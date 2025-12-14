from fastapi.testclient import TestClient
from app.main import app
from app import models, security
import pytest

client = TestClient(app)

def get_auth_headers(client, username, password):
    response = client.post(
        "/auth/token",
        data={"username": username, "password": password}
    )
    assert response.status_code == 200
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}

def test_create_order(client, test_db):
    # 1. Create a user
    client.post("/auth/register", json={"username": "ordertester", "email": "order@test.com", "password": "password"})
    headers = get_auth_headers(client, "ordertester", "password")

    # 2. Get a product to order (assuming seed data exists or we create one)
    # Let's create a product first to be safe
    product_data = {
        "name": "Test Cookie",
        "description": "Yum",
        "price": 5.0,
        "stock": 100,
        "category": "Test"
    }
    # We need a way to insert products. Either via API (if simple) or DB.
    # Since products endpoint is protected or just seeded, let's insert directly into DB to simulate "Admin" setup
    # But for integration test, we might use the API if there's a create endpoint.
    # Looking at previous file lists, products.py likely has CRUD.
    # Let's try inserting via API if possible, or just rely on seeded data?
    # Safer: Insert into DB directly via session fixture if available, or just assume one exists? 
    # Let's use the DB fixture to add a product.
    
    product = models.Product(**product_data)
    test_db.add(product)
    test_db.commit()
    test_db.refresh(product)
    
    # 3. Create Order
    order_payload = {
        "items": [
            {"product_id": product.id, "quantity": 2}
        ]
    }
    
    response = client.post("/orders/", json=order_payload, headers=headers)
    assert response.status_code == 200, response.text
    data = response.json()
    assert data["total_amount"] == 10.0
    assert len(data["items"]) == 1
    assert data["items"][0]["product_id"] == product.id

def test_get_orders(client, test_db):
    # 1. Create user
    client.post("/auth/register", json={"username": "historytester", "email": "history@test.com", "password": "password"})
    headers = get_auth_headers(client, "historytester", "password")
    
    # 2. Create Order
    # Need product
    product = models.Product(name="History Cake", description="Old", price=20.0, stock=10, category="Cake")
    test_db.add(product)
    test_db.commit()
    test_db.refresh(product)
    
    client.post("/orders/", json={"items": [{"product_id": product.id, "quantity": 1}]}, headers=headers)
    
    # 3. Fetch Orders
    response = client.get("/orders/", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 1
    assert data[0]["total_amount"] == 20.0

def test_insufficient_stock(client, test_db):
    # 1. Setup
    client.post("/auth/register", json={"username": "stocktester", "email": "stock@test.com", "password": "password"})
    headers = get_auth_headers(client, "stocktester", "password")
    
    product = models.Product(name="Low Stock Item", description="Rare", price=100.0, stock=1, category="Rare")
    test_db.add(product)
    test_db.commit()
    test_db.refresh(product)
    
    # 2. Try to order more than stock
    response = client.post(
        "/orders/", 
        json={"items": [{"product_id": product.id, "quantity": 5}]}, 
        headers=headers
    )
    assert response.status_code == 400
    assert "Not enough stock" in response.json()["detail"]
