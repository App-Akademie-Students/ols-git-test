from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../.env", extra="ignore")

    app_name: str = "My API"
    app_env: str = "development"
    debug: bool = False
    database_url: str = "sqlite:///./app.db"
    secret_key: str = "change-me"
    cors_origins: list[str] = ["http://localhost:5173"]


settings = Settings()
