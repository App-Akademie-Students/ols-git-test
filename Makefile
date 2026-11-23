.PHONY: install dev-backend dev-frontend test lint format

install:
	cd backend && pip install -e ".[dev]"
	cd frontend && npm install

dev-backend:
	cd backend && uvicorn app.main:app --reload --app-dir src

dev-frontend:
	cd frontend && npm run dev

test:
	cd backend && pytest
	cd frontend && npm test

lint:
	cd backend && ruff check . && mypy src
	cd frontend && npm run lint && npm run typecheck

format:
	cd backend && ruff format . && ruff check --fix .
	cd frontend && npm run format
