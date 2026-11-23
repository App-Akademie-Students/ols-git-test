# Projekt

Monorepo: **FastAPI** (Python) Backend + **TypeScript** (Vite/React) Frontend.

```
.
├── backend/    FastAPI-App (src-Layout, pyproject.toml)
├── frontend/   Vite + React + TypeScript
├── docs/       Architektur, ADRs, API-Doku
├── .github/    CI-Workflows
├── Makefile    Kurzbefehle
└── .env.example
```

## Schnellstart

    cp .env.example .env
    make install
    make dev-backend    # http://localhost:8000/docs
    make dev-frontend   # http://localhost:5173

## Konventionen
- Backend: Schichten api -> services -> repositories -> models; Pydantic-Schemas getrennt von DB-Modellen; API unter /api/v1.
- Frontend: feature-orientiert (features/NAME/), generische UI in components/ui, API-Zugriff nur ueber src/api.
- Commits: Conventional Commits (feat:, fix:, chore: ...).

nur ein Test
