from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from . import models, schemas
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def create_user(db: Session, user: schemas.UserCreate):
    hashed = pwd_context.hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed, full_name=user.full_name)
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError as e:
        db.rollback()
        raise ValueError("User with this email already exists") from e


def verify_password(plain, hashed):
    if not hashed:
        return False
    try:
        return pwd_context.verify(plain, hashed)
    except Exception:
        return False


def create_product(db: Session, product: schemas.ProductBase):
    db_p = models.Product(name=product.name, description=product.description, price=product.price)
    try:
        db.add(db_p)
        db.commit()
        db.refresh(db_p)
        return db_p
    except IntegrityError as e:
        db.rollback()
        raise ValueError("Failed to create product") from e


def list_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Product).offset(skip).limit(limit).all()


def get_user_by_id(db: Session, user_id: int):
    try:
        return db.get(models.User, user_id)
    except Exception:
        return None
