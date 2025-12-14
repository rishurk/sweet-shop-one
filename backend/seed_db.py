import sys
import os

# Ensure backend directory is in path so we can import app modules
sys.path.append(os.getcwd())

from app.database import SessionLocal, engine, Base
from app.models import User
from app.security import hash_password

def seed():
    # Ensure tables exist
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    users_to_add = [
        {"email": "admin@example.com", "password": "password123", "role": "ADMIN"},
        {"email": "testuser@example.com", "password": "password123", "role": "USER"},
    ]
    
    print("--- Seeding Database ---")
    
    for u in users_to_add:
        existing = db.query(User).filter(User.email == u["email"]).first()
        if existing:
            print(f"User {u['email']} already exists. Skipping.")
        else:
            new_user = User(
                email=u["email"],
                hashed_password=hash_password(u["password"]),
                role=u["role"]
            )
            db.add(new_user)
            print(f"Added user: {u['email']}")
            
    db.commit()
    
    # Verification
    print("\n--- Current Users in DB ---")
    users = db.query(User).all()
    for user in users:
        print(f"ID: {user.id} | Email: {user.email} | Role: {user.role}")
        
    db.close()

if __name__ == "__main__":
    seed()
