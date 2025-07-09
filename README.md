# 🚀 P4.1 Horizon

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.13-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Status](https://img.shields.io/badge/status-in--development-yellow)


> Postman 4.1 Horizon is a personal project developed to explore the REST API ecosystem and optimize routine operational workflows.
> 
> A personal backend project simulating a smart locker system — built to explore REST APIs using Django, DRF, Redis, Vite and Vue, with Docker-based deployment, modular architecture, and real-world automation patterns.

> **Postman 4.1 Horizon** — це персональний проєкт, створений для дослідження екосистеми REST API та оптимізації рутинних операційних процесів.  
> 
> Симуляція смарт-поштомату з використанням **Django**, **DRF**, **Redis**, **Vue 3**, **Vite** та **Docker** — з акцентом на модульну архітектуру, масштабованість і реальні сценарії автоматизації.

---

## ✨ Основна ідея

**Horizon** — це нова фаза системи **P4 Postman Report**, яка фокусується на:

- 🧱 Чистій, модульній архітектурі
- 🔁 Розділенні frontend/backend
- ⚙️ Підготовці до інтеграції з апаратними комірками (Arduino)
- 🧠 Переході на сучасні підходи: Composition API, Pinia, Vite

---

## 🚀 Нововведення у P4.1 Horizon

| Категорія         | Нововведення / Зміни                         | Коментар |
|-------------------|----------------------------------------------|----------|
| 🐳 Інфраструктура  | Docker + docker-compose                     | Розділення frontend/backend |
| ⚙️ Backend         | Django API на `localhost:8000`              | Готовий до інтеграції з фронтом |
| 🎨 Frontend        | Vue 3 + Vite + Yarn                         | Сучасна SPA-архітектура |
| 🧠 Архітектура     | Початок переходу на Composition API         | Поступовий рефакторинг |
| 📦 Стан            | Впроваджено Pinia замість Vuex              | Простота + підтримка Composition API |
| ⚡ Білд-система     | Перехід з Vue CLI на Vite                   | Швидший dev-сервер |
| 🧹 Якість коду      | ESLint + Prettier + .gitignore              | Автоматичне форматування |
| 🔐 Безпека         | .env + .env.example                         | Конфіденційність змінних середовища |

---

## 🧭 Документація

- 📘 [Horizon Master Doc](docs/horizon.md) — головний технічний документ
- 🛠️ [API-документація (Swagger)](/api/schema/swagger-ui/) *(локально після запуску)*
- 🧭 [Архітектура системи](docs/architecture.md)
- 📦 [requirements.txt](backend/requirements.txt) / [dev-requirements.txt](dev-requirements.txt)
- ⚙️ [Налаштування середовища](docs/settings.md)
- 🐳 [docker-compose.yml](docker-compose.yml) — конфігурація сервісів
- 🧾 [.env.example](.env.example) — шаблон змінних середовища
- 🧰 [Makefile](Makefile) — команди для запуску та обслуговування

---

## ⚙️ Технологічний стек

| Категорія     | Технології                                              |
|---------------|---------------------------------------------------------|
| Backend       | Python 3.11+, Django 5.2 LTS, DRF, Redis, PostgreSQL 16 |
| Frontend      | Vue 3, Vite, Pinia, Bootstrap                           |
| DevOps        | Docker, docker-compose, Makefile, GunicornNginx         |
| Інше          | ESLint, Prettier, .env, Swagger (drf-spectacular)       |
| (опціонально) | Celery, Arduino, ролі/доступи, async-обробка            |
Детальніше про стек: [технологічний стек](docs/stack.md)

---

## 🧱 Запуск у dev-режимі

```bash
make build        # зібрати сервіси
make dev          # запустити у development
make migrate      # застосувати міграції
make createsuper  # створити суперкористувача
```

Усі команди у [Makefile](Makefile)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Євгеній (Eugene)**  
GitHub: [github.com/ychernyshev](https://github.com/ychernyshev)
