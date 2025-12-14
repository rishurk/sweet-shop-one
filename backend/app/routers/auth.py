from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.database import SessionLocal
from app.models import User
from app.schemas import UserRegister
from app.security import hash_password, verify_password
from app.jwt_utils import create_access_token

router = APIRouter()


# -------------------------
# Database dependency
# -------------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# -------------------------
# Register
# -------------------------
@router.post("/register")
def register(user: UserRegister, db: Session = Depends(get_db)):
    try:
        new_user = User(
            email=user.email,
            hashed_password=hash_password(user.password),
            role="USER"
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {
            "id": new_user.id,
            "email": new_user.email,
            "role": new_user.role
        }

    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="User already exists")


# -------------------------
# Login (OAuth2)
# -------------------------
@router.post("/token")
def login_for_access_token(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.email == form_data.username).first()

    if not user:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    if not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    access_token = create_access_token({"user_id": user.id})

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
