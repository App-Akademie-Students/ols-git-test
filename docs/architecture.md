# Architektur

## Backend-Schichten
| Schicht | Verzeichnis | Aufgabe |
|---|---|---|
| API | api/v1/endpoints | HTTP, Validierung, Dependency Injection |
| Service | services | Geschaeftslogik |
| Repository | repositories | Datenzugriff |
| Model | models | SQLAlchemy-Entitaeten |
| Schema | schemas | Pydantic Ein-/Ausgabe |
| Core | core | Config, Security, Logging |

## Frontend
pages (Routen-Ebene) -> features (Fachlogik + Komponenten) -> components/ui (wiederverwendbar). Serverzugriff ueber api/.
