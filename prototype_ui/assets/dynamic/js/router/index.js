import {Dispatcher} from "../composables/useDispatcher.js";

export function init(app) {
    app.routing.add("sign_in", () => {
        app.panelManager.mountScene("sign_in");
    });

    app.routing.add("sign_out", () => {
        app.panelManager.mountScene("sign_out");
    });

    app.routing.add("user_profile", () => {
        app.panelManager.mountScene("user_profile");
    });

    app.routing.add("dashboard", () => {
        app.panelManager.mountScene("dashboard");
    });

    app.routing.add("add_entry", () => {
        app.panelManager.mountScene("add_entry")
    });

    app.routing.add("page_404", () => {
        app.panelManager.mountScene("page-404");
        // app.root.innerHTML = `
        //     <div style="height: 65vh; position: relative;" class="col-12 col-xl-8">
        //         <div style="position: absolute; top: 50%; right: 45%;" class="card w-25 h-100">
        //             <div class="card-body p-3 d-flex justify-content-center" style="position: relative">
        //                 <div style="position: absolute; top: 0;">
        //                     <p style="font-size: 8rem;">404</p>
        //                     <p style="font-size: 2rem">Page not found</p>
        //                 </div>
        //                 <a href="#dashboard" style="position: absolute; left: 2.5rem; bottom: 2.5rem; text-underline: none; font-size: 1.2rem;">To Dashboard</a>
        //             </div>
        //         </div>
        //     </div>
        // `;
    });

    app.routing.init();
    app.dispatcher.init();
    app.localStorage.init();
    Dispatcher.set("theme", localStorage.getItem("theme") || "light");
    app.renderLayout();
    app.panelManager.init();
}