# 📘 Horizon Master Doc

> Технічна документація до проєкту **P4.1 Horizon** — симулятора смарт-поштомат-системи з REST API, побудованого на Django + Vue 3.

---

## 🧠 Мета проєкту

**Horizon** — це фаза розвитку системи **Postman 4**, яка фокусується на:

- Побудові масштабованої, модульної архітектури
- Вивченні REST API, DRF, Redis, Celery
- Інтеграції з апаратними пристроями (Arduino)
- Підготовці до асинхронної обробки подій
- Впровадженні сучасного frontend-стека (Vue 3 + Vite + Pinia)

---

## 🧱 Архітектура

```text
p4.1_horizon/
├── backend/        ← Django API (DRF, PostgreSQL, Redis)
├── frontend/       ← Vue 3 SPA (Vite, Pinia, Tailwind)
├── docker-compose.yml
├── .env / .env.example
├── Makefile
└── docs/
    ├── horizon.md
    └── settings.md
```



### 🔁 Взаємодія сервісів

- **Vue** звертається до Django через `/api/v1/` (проксі через Vite)
- **Django** працює з PostgreSQL та Redis
- **Docker** забезпечує ізоляцію та запуск усіх сервісів

---

## 🔧 Основні компоненти

| Компонент         | Опис |
|-------------------|------|
| `Locker`          | Модель поштомату (стан, код, статус) |
| `LockerViewSet`   | DRF endpoint для CRUD-операцій |
| `useLockerStore`  | Pinia store для керування станом |
| `LockerList.vue`  | Компонент, що відображає список комірок |
| `useApi.js`       | Централізований API-клієнт |

---

## 🧩 Особливості реалізації

- ✅ **Composition API** у Vue для модульності
- ✅ **Pinia** як state manager
- ✅ **Vite** для швидкого білду
- ✅ **.env** для безпечного зберігання конфігурацій
- ✅ **Swagger** для автоматичної API-документації
- ✅ **Makefile** для зручного запуску

---

## 🛠️ Плани на P4.2 Fusion

- 🔌 Інтеграція з Arduino через серійний порт
- 🔐 Ролі та права доступу (admin, courier, user)
- ⏱️ Асинхронна обробка подій (Celery + Redis)
- 📦 Вивантаження логів, аналітика, статуси

---

## 📎 Пов’язані файли

- 📄 [README.md](../README.md)
- 📘 [Horizon Master Doc](horizon.md)
- ⚙️ [Налаштування середовища](settings.md)
- 🐳 [docker-compose.yml](../docker-compose.yml)
- 🧾 [.env.example](../.env.example)

