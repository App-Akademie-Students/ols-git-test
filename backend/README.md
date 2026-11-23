# Backend

    python -m venv .venv
    pip install -e ".[dev]"
    uvicorn app.main:app --reload --app-dir src
    pytest

Neue Ressource: models/ -> schemas/ -> repositories/ -> services/ -> api/v1/endpoints/ -> Router in api/v1/router.py registrieren.
