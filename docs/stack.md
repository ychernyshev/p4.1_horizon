# ⚙️ Технологічний стек Postman 4:Horizon (Up.1)

## 🔧 Загальний опис

Postman 4:Horizon — це модульна система з чітким поділом на frontend, backend та інфраструктурні компоненти. Архітектура орієнтована на масштабованість, продуктивність і чисту інтеграцію між сервісами.

---

## 📦 Технологічний стек

| Категорія     | Технології                                                                |
|---------------|---------------------------------------------------------------------------|
| Backend       | Python 3.11+, Django 5.2 LTS, Django REST Framework, Redis, PostgreSQL 16 |
| Frontend      | Vue 3, Vite, Pinia, Bootstrap                                         |
| DevOps        | Docker, docker-compose, Makefile, **Gunicorn**, **Nginx**                 |
| Інше          | ESLint, Prettier, .env, Swagger (drf-spectacular)                         |
| (опціонально) | Celery, Arduino, ролі/доступи, async-обробка                              |

---

## 🧭 Архітектура

```
[Client Browser]
       ↓
     [Nginx]         ← HTTPS, кешування, статика
       ↓
   [Gunicorn]        ← WSGI-сервер
       ↓
   [Django App]      ← REST API, логіка, ORM
       ↓
[PostgreSQL] + [Redis]
```

---

## 📁 Структура проєкту (фрагмент)


```text
p4.1_horizon/
├── backend/
│   ├── config/
│   ├── core/
│   ├── gunicorn/
│   └── requirements.txt
├── frontend/
│   └── src/
├── nginx/
│   └── default.conf
├── docker-compose.yml
├── Makefile
└── docs/
    └── stack.md
```

---

## 🧠 Принципи

- **Модульність**: кожен компонент ізольований і легко замінюється
- **Прозорість**: зрозуміла структура, зрозумілі точки входу
- **Масштабованість**: готовність до продакшну з Gunicorn + Nginx
- **Зручність розробки**: Makefile, hot-reload, .env, Swagger

---

## 🔜 У планах

- Додати Celery для асинхронних задач
- Інтегрувати Arduino через WebSocket або API
- Розширити систему ролей та доступів
- Додати CI/CD (наприклад, GitHub Actions)

---

