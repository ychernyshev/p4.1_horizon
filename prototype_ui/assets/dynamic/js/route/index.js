import {Dispatcher} from "../composables/useDispatcher.js";

export function init(app) {
    app.routing.add("dashboard", () => {
        app.root.innerHTML = "<h1>Dashboard</h1>";
    });

    app.routing.add("add_entry", () => {
        app.root.innerHTML = "<h1>Add entry</h1>";
    });

    app.routing.add("404", () => {
        app.root.innerHTML = "<h1>404</h1><h3>Page not found</h3>";
    });

    app.routing.init();
    app.dispatcher.init();
    app.localStorage.init();
    Dispatcher.set("theme", localStorage.getItem("theme") || "light");
    app.renderLayout();
    app.panelManager.init();
}