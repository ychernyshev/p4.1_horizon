# 🧭 Архітектура Postman 4:Horizon (Up.1)

## 🔍 Огляд

Postman 4:Horizon побудований за принципом розділення відповідальностей між frontend, backend та інфраструктурними сервісами. Основна мета — забезпечити масштабованість, модульність і чисту інтеграцію.

---

## 🔄 Потік запиту

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

## 🧩 Компоненти

### 1. **Nginx**
- Зворотній проксі для Gunicorn
- Обробка статики (`/static/`, `/media/`)
- Може бути точкою входу для HTTPS (через Let's Encrypt)

### 2. **Gunicorn**
- WSGI-сервер, який запускає Django
- Приймає HTTP-запити від Nginx
- Працює з кількома воркерами для обробки навантаження

### 3. **Django + DRF**
- Основна бізнес-логіка
- REST API для frontend
- Авторизація через Djoser
- Swagger-документація через drf-spectacular

### 4. **PostgreSQL**
- Основна база даних
- Зберігає користувачів, дані застосунку, журнали

### 5. **Redis**
- Кешування
- Можливе використання для Celery або WebSocket-черг

### 6. **Vue 3 (Vite)**
- SPA-інтерфейс
- Працює окремо від Django
- Комунікує з API через HTTP-запити

---

## 🧠 Особливості

- **Makefile** — автоматизація команд (`make up`, `make nginx-reload`, `make migrate`, [інші команди](../Makefile))
- **.env** — централізоване керування конфігурацією
- **docker-compose** — ізоляція сервісів, зручний запуск
- **Pinia** — керування станом на фронтенді
- **Tailwind CSS** — швидка адаптивна верстка

---

## 🔜 Майбутні розширення

- **Celery + Redis** для асинхронних задач
- **WebSocket** для реального часу (наприклад, через Django Channels)
- **Arduino**-інтеграція через API або MQTT
- **CI/CD** через GitHub Actions або GitLab CI
- **Ролі та доступи** на рівні API

---

## 📌 Принципи

- Чітке розділення відповідальностей
- Мінімальна зв’язаність між компонентами
- Прозора інфраструктура
- Готовність до продакшн-розгортання

