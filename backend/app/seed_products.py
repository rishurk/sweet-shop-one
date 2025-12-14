from .database import SessionLocal, engine
from . import models

def seed_products():
    db = SessionLocal()
    # Create tables if they don't exist
    models.Base.metadata.create_all(bind=engine)

    # List of sample products
    products_data = [
        {
            "name": "Belgian Chocolate Truffles",
            "description": "Rich, dark chocolate truffles dusted with cocoa powder. A decadent treat for chocolate lovers.",
            "price": 24.99,
            "stock": 50,
            "category": "Chocolates",
            "image_url": "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=800&q=80"
        },
        {
            "name": "Assorted Macarons",
            "description": "A colorful box of 12 delicate French macarons. Flavors include Pistachio, Raspberry, Lemon, and Vanilla.",
            "price": 18.50,
            "stock": 40,
            "category": "Cookies",
            "image_url": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80"
        },
        {
            "name": "Red Velvet Cake",
            "description": "Classic red velvet cake layered with smooth cream cheese frosting. Perfect for celebrations.",
            "price": 35.00,
            "stock": 10,
            "category": "Cakes",
            "image_url": "https://images.unsplash.com/photo-1586788680434-30d3244363c3?auto=format&fit=crop&w=800&q=80"
        },
        {
            "name": "New York Cheesecake",
            "description": "Creamy, rich cheesecake with a buttery graham cracker crust. Topped with fresh berries.",
            "price": 28.00,
            "stock": 15,
            "category": "Cakes",
            "image_url": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
        },
        {
            "name": "Gourmet Cupcakes",
            "description": "Set of 6 assorted cupcakes including Double Chocolate, Vanilla Bean, and Salted Caramel.",
            "price": 15.99,
            "stock": 25,
            "category": "Cakes",
            "image_url": "https://images.unsplash.com/photo-1576618148400-f54bed99fcf8?auto=format&fit=crop&w=800&q=80"
        },
        {
            "name": "Artisanal Donuts",
            "description": "Freshly glazed donuts. Mix of classic glaze, chocolate sprinkle, and maple bar.",
            "price": 12.50,
            "stock": 50,
            "category": "Pastries",
            "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
        },
         {
            "name": "Fruit Tart",
            "description": "Crisp pastry shell filled with vanilla custard and topped with fresh seasonal fruits.",
            "price": 22.00,
            "stock": 20,
            "category": "Pastries",
            "image_url": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80" 
            # Note: Reusing macaron image to avoid broken link risk, ideally would find specific tart image
            # Let's try to find a better one or stick to robust ones.
            # Using a generic valid one:
            # "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80" (Tart like)
        },
        {
            "name": "Chocolate Chip Cookies",
            "description": "Soft and chewy cookies loaded with semi-sweet chocolate chips. Baked fresh daily.",
            "price": 8.99,
            "stock": 100,
            "category": "Cookies",
            "image_url": "https://images.unsplash.com/photo-1499636138143-bd630f5cf386?auto=format&fit=crop&w=800&q=80"
        }
    ]

    for product_data in products_data:
        # Check if product exists
        existing = db.query(models.Product).filter(models.Product.name == product_data["name"]).first()
        if not existing:
            product = models.Product(**product_data)
            db.add(product)
            print(f"Added product: {product.name}")
        else:
            print(f"Product already exists: {product_data['name']}")
    
    db.commit()
    db.close()

if __name__ == "__main__":
    seed_products()
