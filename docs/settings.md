# ⚙️ Налаштування середовища

> Цей документ описує змінні середовища, які використовуються у проєкті **Postman 4:Horizon (Up.1)**, а також їх призначення та спосіб інтеграції з Django, Docker і frontend.

---

## 📄 .env / .env.example

Файл `.env` розташовується в корені проєкту (`p4.1_horizon/.env`) і використовується як для `docker-compose`, так і для Django.

### 🔐 Приклад `.env.example`

```dotenv
# === Django ===
DJANGO_SECRET_KEY=your-secret-key-here
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# === Database ===
POSTGRES_DB=horizon
POSTGRES_USER=horizon_user
POSTGRES_PASSWORD=horizon_pass
POSTGRES_HOST=db
POSTGRES_PORT=5432

# === Redis ===
REDIS_HOST=redis
REDIS_PORT=6379

# === Email (опціонально) ===
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=your@email.com
EMAIL_HOST_PASSWORD=your-email-password
EMAIL_USE_TLS=True

# === Frontend ===
VITE_API_BASE_URL=/api/v1
```

## ⚙️ Django: використання змінних

У backend/settings.py змінні середовища читаються через os.getenv() або django-environ.

### Приклад:

```python
import os

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "fallback-secret")
DEBUG = os.getenv("DJANGO_DEBUG", "False") == "True"
ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", "localhost").split(",")
```

Для зручності можна використовувати ```django-environ``` або ```python-decouple```.

### 🐳 Docker: інтеграція з .env

У docker-compose.yml:

```yaml
env_file:
  - .env
```

Це дозволяє передавати змінні у всі сервіси (backend, frontend, db, redis).

## 🎨 Frontend: змінні для Vite

Vite автоматично підхоплює змінні, які починаються з VITE_.

### Vite автоматично підхоплює змінні, які починаються з VITE_.

```dotenv
VITE_API_BASE_URL=/api/v1
```

У коді Vue:

```pycon
const baseUrl = import.meta.env.VITE_API_BASE_URL
```

## 🧪 Перевірка
1. Створи .env на основі .env.example
2. Запусти:
```shell
make build
make dev
```
3. Перевір, що Django і Vue працюють з правильними змінними

## 📌 Поради
- Не коміть .env у репозиторій — він має бути в .gitignore
- Зберігай .env.example актуальним для нових змінних
- Для продакшну використовуй окремий .env.prod

---

## 📎 Пов’язані файли

- 📄 [README.md](../README.md)
- 📘 [Horizon Master Doc](horizon.md)
- 🐳 [docker-compose.yml](../docker-compose.yml)
- 🧾 [.env.example](../.env.example)
