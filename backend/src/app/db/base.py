from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Basisklasse aller ORM-Modelle (fuer Alembic: Modelle hier importieren)."""
