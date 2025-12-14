def test_get_products_empty(client):
    response = client.get("/products/")
    assert response.status_code == 200
    assert response.json() == []

# Note: Creating products requires admin rights, which we haven't set up in the test DB easily 
# without seeding. For now, we verify the empty state or could mock the admin user.
