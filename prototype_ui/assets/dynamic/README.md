# Horizon UI micro-framework

> A lightweight vanilla JavaScript UI framework for declarative, component-driven SPA interfaces.

Horizon UI lets you build structured interfaces where each view (scene) is composed from layout modules defined declaratively.

---

## 🚀 Core Modules

### `PanelManager.js`

Main engine that renders UI scenes.

- Injects HTML structure from `LayoutRegistry.scene.structure`
- Mounts layout components in declared order
- Uses `ComponentMap` to bind logic

### `LayoutRegistry.js`

Defines available scenes, including:

- `structure`: HTML template for containers
- `layout`: ordered array of components
- `config`: props passed to each component

```js
dashboard: {
  structure: `...`,
  layout: ["TopBar", "ControlBar"],
  config: {
    TopBar: { title: "Horizon UI" }
  }
}
```

Declarative registry that defines how each scene is rendered.

```javascript
export const LayoutRegistry = {
  dashboard: {
    structure: `
      <main>
        <nav id="navbarBlur"></nav>
        <div id="section-navigator"></div>
        <div id="details-display"></div>
      </main>
    `,
    layout: ["TopBar", "SectionNavigator", "DetailsDisplay"],
    config: {
      TopBar: { title: "Horizon UI" },
      SectionNavigator: { entries: [] },
      DetailsDisplay: { selected: null }
    }
  },

  sign_in: {
    structure: `
      <div id="sign-in"></div>
    `,
    layout: ["SignIn"],
    config: {
      SignIn: { redirect: "dashboard" }
    }
  }
};
```

Each scene contains:

- structure: required HTML containers for rendering components
- layout: array of components to mount 
- config: props passed to each component's `mount(params)`

## 📦 Component Convention

Each component exports:
```javascript
export const TopBar = {
  mount(params) {
    const container = document.getElementById("navbarBlur");
    if (!container) return;
    container.innerHTML = `...`;
  }
};
```
Each component implements a `mount(params)` function and knows its target container via unique `id`

```javascript
export const TopBar = {
  mount(params = {}) {
    const container = document.getElementById("navbarBlur");
    if (!container) {
      console.warn("[TopBar] Container #navbarBlur not found");
      return;
    }

    container.innerHTML = `
      <div class="navbar-content">
        <h1>${params.title || "Default Title"}</h1>
      </div>
    `;
  }
};
```
## ⚙️ ComponentMap

Maps layout names to actual modules used by `PanelManager`.

```javascript
this.ComponentMap = {
    TopBar,
    ControlBar,
    SectionNavigator,
    SectionNavigatorMobile,
    DetailsDisplay,
    EntryForm,
    SignIn,
};
```

## 🔧 Routing

Basic hash-based router integrated with scene rendering:

```javascript
routing.add("dashboard", () => {
  panelManager.mountScene("dashboard");
});

routing.add("sign_in", () => {
  panelManager.mountScene("sign_in");
});
```

Scenes switch declaratively using `window.location.hash`.

## 🔧 Architecture Flow

```
graph TD
A[Router] --> B[PanelManager]
B --> C[Insert HTML structure]
C --> D[Mount layout components]
```
## 💡 Parameter Usage

Each component receives `params` from its scene config:
```javascript
DetailsDisplay: {
  selected: entryId,
  theme: "light"
}
```
Common use cases:
```
| Param Type | Example         | Purpose                          |
|------------|-----------------|----------------------------------|
| Content    | title, text     | Sets visual text                 |
| Data       | entries, id     | Supplies model info              |
| Behavior   | redirect, mode  | Defines logic or flow            |
| Callbacks  | onSubmit()      | Hooked functions on user events  |
| Flags      | readonly, theme | Control presentation variation   |
```

## Sample Scene Registry Entry

```javascript
add_entry: {
  structure: `
    <main>
      <nav id="navbarBlur"></nav>
      <div id="entry-form"></div>
    </main>
  `,
  layout: ["TopBar", "EntryForm"],
  config: {
    TopBar: { title: "Add New Entry" },
    EntryForm: { mode: "create" }
  }
}
```

## 📦 Summary

```
| Module            | Purpose                                  |
|-------------------|------------------------------------------|
| PanelManager.js   | Centralized renderer for all views       |
| LayoutRegistry.js | Declarative scene definitions            |
| Components        | Mount themselves into target DOM         |
| ComponentMap      | Connects layout names to components      |
```

## Credits

#### Created by Yevhenii Chernyshev. Made for a dynamic template version preview Postman 4:Horizon project.