from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import schemas, crud, models
from ..db import get_db
from ..deps import get_current_user

router = APIRouter()


@router.get("/", response_model=list[schemas.ProductOut])
def list_products(db: Session = Depends(get_db)):
    return crud.list_products(db)


@router.post("/", response_model=schemas.ProductOut)
def create_product(product: schemas.ProductBase, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    try:
        return crud.create_product(db, product)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
