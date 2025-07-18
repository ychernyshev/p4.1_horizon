import { LocalStorage } from "../composables/useLocalStorage.js";
import { Dispatcher } from "../composables/useDispatcher.js";
import { Routing } from "../composables/useRouting.js";

//  Interface Layout
import { layout } from "components/layout/MainLayout.js";

// Theme control
import { panelManager } from "components/theme/PanelManager.js";

class MainController {
  constructor(rootId) {
    this.root = document.getElementById(rootId);
    this.localStorage = new LocalStorage();
    this.dispatcher = new Dispatcher();
    this.routing = new Routing();
    this.layout = layout;
    this.panelManager = new PanelManager();
  }

  init() {
    this.router.init();
    this.dispatcher.init();
    this.localStorage.init();
    Dispatcher.set("theme", localStorage.getItem("theme") || "light");
    this.renderLayout();
    this.panelManager.init();
  }

  renderLayout() {
    this.root.innerHTML = this.layout.render(); // HTML як рядок
    this.panelManager.mountPanels();
  }

  navigateTo(view) {
    this.router.navigate(view);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new MainController("app");
  app.init();
});
