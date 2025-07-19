import { LocalStorage } from "./composables/useLocalStorage.js";
import { Routing } from "./composables/useRouting.js";
import { init } from "./route";

//  Interface Layout
// import { layout } from "./components/layout/MainLayout.js";

// Theme control
import { PanelManager } from "./components/theme/PanelManager.js";

class MainController {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.localStorage = new LocalStorage();
        this.routing = new Routing();
        // this.layout = layout;
        this.panelManager = new PanelManager();
    }

    renderLayout() {
        // this.root.innerHTML = this.layout.render();
        this.panelManager.mountPanels();
    }

    navigateTo(view) {
        this.routing.navigate(view);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new MainController("app");
    init(app);
});
