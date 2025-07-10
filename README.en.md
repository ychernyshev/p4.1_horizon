🇺🇦 [Ukrainian version](README.md)

---

- [✨ Основна ідея](#✨-основна-ідея)
- [🎯 Мета проєкту](#🎯-мета-проєкту)
- [🚀 Нововведення](#🚀-нововведення-у-p41-horizon)
- [🎨 UI-прототип](#🎨-ui-прототип-та-демонстрація-інтерфейсу)
- [🧱 Запуск](#🧱-запуск-у-dev-режимі)
- [🧭 Документація](#🧭-документація)
- [💬 Коментар автора](#💬-коментар-від-автора-про-проект)

---

# 🚀 P4.1 Horizon — Frontend Prototype + Modular Architecture

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.13-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Status](https://img.shields.io/badge/status-in--development-yellow)

---

![Preview of dashboard layout](prototype_ui/assets/preview.png)

---

**Postman 4.1 Horizon** is a production-oriented platform for building scalable web systems using **Django REST Framework**, **Docker**, **Redis**, **Nginx**, **Vue 3**, and a clean, adaptive UI.

This personal project was developed to explore the REST API ecosystem and optimize routine operational workflows in my current work environment.

It simulates a smart locker system built with **Django**, **DRF**, **Redis**, **Vue 3**, **Vite**, and **Docker**, focusing on modular architecture, scalability, and real-world automation patterns.

---

## ✨ Core Concept

**Horizon** is the next phase of the **P4 Postman Report** system, focused on:

- 🧱 Clean, modular architecture
- 🔁 Separation of frontend/backend services
- ⚙️ Preparation for hardware integration (Arduino)
- 🧠 Transition to modern patterns: Composition API, Pinia, Vite

---

## 🎯 Project Goals

- Build a system based on clean architectural principles
- Consolidate knowledge in DRF, Vue, Redis, Nginx
- Showcase UI/UX, scalability, and Docker-integrated development
- Design a tri-panel interface and migrate existing P4 functionality

---

## 🚀 What’s New in P4.1 Horizon

| Area             | Feature / Change                      | Comment |
|------------------|----------------------------------------|---------|
| 🐳 Infrastructure | Docker + docker-compose                | Splits frontend and backend |
| ⚙️ Backend         | Django API (ViewSet)                   | Ready for frontend integration |
| 🎨 Frontend        | Vue 3 + Vite + Yarn                   | Modern SPA architecture |
| 🧠 Architecture     | Start of migration to Composition API | Ongoing refactor |
| 📦 State           | Pinia replacing Vuex                  | Simplified & API-friendly |
| ⚡ Build System     | Migrated from Vue CLI to Vite         | Faster dev environment |
| 🧹 Code Quality     | ESLint + Prettier + .gitignore        | Auto-formatting enforced |
| 🔐 Security         | .env + .env.example                   | Secured environment variables |

---

## ⚙️ Technology Stack

| Layer         | Technologies                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------|
| 🌐 Backend     | Python 3.11+, Django 5.2 LTS, DRF, Redis, PostgreSQL 16                                          |
| 🖼️ Frontend    | Vue 3 (Options API + Composition API, Pinia), Vite, Bootstrap                                   |
| 🐳 Deployment  | Docker, Docker Compose, Gunicorn, Nginx                                                          |
| 📦 Dev Tools   | Makefile, .env, GitHub Pages                                                                     
| Other         | ESLint, Prettier, .env management, Swagger (drf-spectacular)                                      |
| (Optional)    | Celery (async tasks), Arduino (hardware logic), roles/access control                              |
| 📑 Documentation | 📘 [See below](#🧭-documentation) |

Full stack description: [docs/stack.en.md](docs/stack.en.md)
---

## 🎨 UI Prototype & Preview

This template is part of the P4.1 Horizon interface design — based on clean architecture with DRF, Docker, and Vue.  
It was built using Soft UI Dashboard (Bootstrap 5) to quickly visualize the tri-panel layout prior to full Vue componentization.  
It acts as the visual blueprint for implementation using Composition API and Pinia.

- Built with Soft UI Dashboard (Bootstrap 5)
- Serves as layout reference for Vue 3 tri-panel architecture
- Includes responsive markup, cards, tables, and interactive elements
- 
### 📺 Live Links

| 📁 Repository | 🌐 Live Preview |
|---------------|-----------------------------|
| [UI Prototype](https://github.com/ychernyshev/p4.1_horizon/tree/main/prototype_ui/) | [Live Demo](https://ychernyshev.github.io/p4.1_horizon/) |

> 💬 Note: I created this template to reinforce learning, test design workflows, and apply clean UI architecture practices.  
> I hope it’s useful to others — or inspires their own approach.

---

## 🧱 Development Setup

```bash
make build        # build all services
make dev          # run in development mode
make migrate      # apply database migrations
make createsuper  # create a superuser account
```

See all commands in [Makefile](Makefile)

---

## 🧭 Documentation

- 📘 [Horizon Master Doc](docs/en/horizon.en.md) — primary technical overview
- 🛠️ [Swagger API Docs](/api/schema/swagger-ui/) *(local after launch)*
- 🧭 [Architecture Overview](docs/en/architecture.en.md)
- 📦 [requirements.txt](backend/en/requirements.en.txt) / [dev-requirements.txt](dev-requirements.txt)
- ⚙️ [Environment Setup](docs/en/settings.en.md)
- 🐳 [docker-compose.yml](docker-compose.yml) — service definitions
- 🧾 [.env.example](.env.example) — environment variable template
- 🧰 [Makefile](Makefile) — build & utility commands

---

## 💬 Author’s Reflection

P4.1 Horizon is the next step in evolving a scalable backend-driven system built on clean architecture, DRF, Docker, and Vue. I created this project to consolidate knowledge, explore new technologies, and dive into a principled approach to real-world software development. I’ve aimed to build a structure that is scalable, modular, and adaptable for future integration. If this project proves useful to others or inspires new ideas — that is already a win.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Євгеній Чернишев**  
📧 [Yevhenii (Eugene) Chernyshev](mailto:eugene_chernyshev@yahoo.com)  
🐙 [GitHub](https://github.com/ychernyshev)


