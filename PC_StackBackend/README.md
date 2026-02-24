PC_StackBackend
================

Minimal FastAPI backend for the PC_Stack Vite frontend.

Quick start

1. Ensure you're using the project's virtualenv with the packages already installed.
2. Set environment variables (or edit `.env`):

```bash
export SECRET_KEY="change_me"
export DATABASE_URL="sqlite:///./pc_stack.db"
export CORS_ORIGINS="http://localhost:5173"
```

3. Run the app:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API endpoints:
- `POST /api/auth/register` - register a user
- `POST /api/auth/login` - obtain JWT token
- `GET /api/products` - list products
- `POST /api/products` - create product (simple demo)

Alembic:

```bash
alembic -c alembic.ini revision --autogenerate -m "init"
alembic -c alembic.ini upgrade head
```
