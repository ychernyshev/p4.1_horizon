import {Dispatcher} from "../composables/useDispatcher.js";

export function init(app) {
    app.routing.add("sign_in", () => {
        app.panelManager.mountScene("sign_in");
    });

    app.routing.add("sign_out", () => {
        app.panelManager.mountScene("sign_out");
    });

    app.routing.add("dashboard", () => {
        app.panelManager.mountScene("dashboard");
    });

    app.routing.add("add_entry", () => {
        app.panelManager.mountScene("add_entry")
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