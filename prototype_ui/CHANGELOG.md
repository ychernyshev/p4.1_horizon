# 📝 CHANGELOG — P4.1 Horizon

Цей журнал змін фіксує основні етапи розвитку проєкту, нові функціональні модулі, оновлення архітектури та документації.

---

## [0.1.0] — 2024-07-10

### 🚀 Added
- 📁 Створено гілку `feature/ui-prototype` для шаблону інтерфейсу
- 📦 Додано папку `prototype_ui/` зі Soft UI Dashboard (Creative Tim)
- 📝 Створено `prototype_ui/README.md` із описом шаблону та використання
- 📘 Додано англомовну версію документації (`README.en.md`)
- 📄 Оновлено головний `LICENSE.md` із зазначенням Creative Tim

### ✏️ Changed
- 🧾 Головний `README.md`: фінальна структура, навігація, прев’ю, коментар автора

### 📌 Notes
- 🔱 Гілки розділено: `main` для документації, `feature/ui-prototype` для шаблону
- 🎨 Наступний етап: перенесення UI в Vue — буде у гілці `ui-dev`

---

## 🔮 Coming Up

- [ ] Створити `ui-dev` гілку для Vue 3 інтерфейсу
- [ ] Реалізувати `TriPanelLayout.vue` з Composition API
- [ ] Інтеграція з бекендом через DRF endpoint
- [ ] Створити `CHANGELOG.md` для API та сервісної логіки

---

## [v0.1.1] – 2025-07-13

### 📁 Structure
- Added folder `mail` with templates:
  - `add_mail.html`
  - `update_mail.html`
- Added folder `reports` with template:
  - `upload_errors.html`

### ✨ Features
- Max section height added and scrolling enabled.
- Dashboard page design has been completed.
- “Add mail” page updated: saving form for mail item added.

### 🎨 Styles
- Scrolling styles added in `scrolling_stiles.css`.
- Toast styles added in `toasts.css`.
- Styles for Navigation Panel cards added in `navigation-cards.css`.

### 🧭 Navigation Panel
- Basic structure of the Navigation Panel has been added.
- Example cards have been implemented for interface testing.
- Search panel and filter buttons are now available.
- Search form has been added.
- Active-style card now has its own styling and animation.

---

## [v0.1.2] – 2025-07-14

### 🔧 Updates
- Updated styles for Navigation Panel cards in "active" state.
- Improved animation for active card behavior.
- Ensured design consistency of the “Add mail” form.
- Renamed template `add_mail.html` to `add_entry.html`.
- Replaced diamond icon with P4 logo in the Documentation component (Navigation Bar).

### 🚀 New Components
- Added Upload Cheatsheet modal.
- Added Upload Images modal.

---

## [v0.1.3] — 2025.07.18

#### Postman 4 Dynamic UI. Початок інтеграції

### ✏️ Змінено
- Файл `route/index.js` тепер виконує логіку запуску застосунку
- Клас `Routing` доповнено маршрутом для 404

### 🔧 Створено
- Основна точка входу `index_d.html` — тимчасова версія для інтеграції динамічного UI.
- Файл `index.js` — головний контролер SPA-архітектури.
- Компоненти ядра:
  - `useLocalStorage.js` — керування станом зберігання.
  - `useDispatcher.js` — реактивний in-memory стан.
  - `useRouting.js` — навігація між розділами.
  - `layout.js` — генерація трипанельного каркасу.
  - `PanelManager.js` — динамічне оновлення вмісту панелей.
- Створено базову структуру порожніх файлів для сторінок:
  - DashboardView.
  - account:
     - ProfileSetupView
     - ProfileView
     - SignInView
  - entry:
     - AddEntryView
     - EntryDetailsView
     - UpdateEntryView
  - reports:
     - Collection8View
     - Collection22aView
     - ReceiptsListView
     - UploadErrorDetailsView
  - Ініціалізовано шаблони документації (для майбутнього заповнення):
    - DocumentationView
    - Routing.md
    - SimulationGuide
    - StorageTutorial
- Налаштовано систему маршрутизації (SPA, хеш-роутинг)

> 🧪 Примітка: _Відображення головної сторінки наразі тестове_

### ⚙️ Ініціалізовано
- `MainController` — централізоване керування логікою SPA.
- Dispatcher → тема `theme` отримується із Local Storage, з fallback на `light`.
- Layout рендериться в `#app` та підключає `PanelManager`.


### 📌 Підготовлено для
- Повної симуляції компонентної логіки в шаблоні без Vue.
- Додавання темізації, симуляцій, карток повідомлень і внутрішньої маршрутизації.

> 🔥 _Це початок інтеграції живої логіки в статичну структуру._

### 🚧 Наступні дії
- Інтеграція сторінок: AddEntryView, EntryDetailsView
- Компоненти картки повідомлення з симуляцією збереження
- Темізація через Dispatcher (у майбутньому)


---


---

## [0.2.0] — 2024-07-20

### 🚀 Added
- 📁 Створено гілку `ui-dev` для реалізації інтерфейсу на Vue 3
- 🧩 Імпортовано базові компоненти з `prototype_ui/` у структуру Vue
- 🧠 Заплановано створення `TriPanelLayout.vue` з Composition API та Pinia

### ✏️ Changed
- 📄 Оновлено README.md: уточнення про майбутню Vue-реалізацію

### 📌 Notes
- 🔧 Vue буде використовуватись для побудови трипанельного інтерфейсу
- 🧪 Можливе виділення `Pinia` store для стану панелей, фільтрації, навігації
- 🌐 Підготовка до інтеграції DRF endpoint-ів для реального контенту

---

## 🧭 Наступні кроки

- [ ] `TriPanelLayout.vue`: базовий layout і розмітка
- [ ] `Sidebar.vue` / `Toolbar.vue`: компонентна декомпозиція
- [ ] Підключення демо-даних через Composition API + Pinia
- [ ] Початкова інтеграція з бекендом (`api/boxes/`, `api/auth/`)

