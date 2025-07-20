import { LayoutRegistry } from './RegistryLayoutScheme.js';
import { TopBar } from '../layout/TopBar.js';
import { ControlBar } from '../layout/ControlBar.js';
import { SectionNavigator } from '../layout/SectionNavigator.js';
import { SectionNavigatorMobile } from '../layout/SectionNavigatorMobile.js';
import { DetailsDisplay } from '../layout/DetailsDisplay.js';
import { EntryForm } from '../../pages/entry/EntryFormView.js';
import { SignIn } from "../../pages/account/SignInView.js";


export class PanelManager {
    const
    ComponentMap = {
        TopBar,
        ControlBar,
        SectionNavigator,
        SectionNavigatorMobile,
        DetailsDisplay,
        EntryForm,
        SignIn,
    };

    constructor() {
        this.root = document.getElementById("app");
    };

    mountScene(sceneName) {
        const scene = LayoutRegistry[sceneName];
        if (!scene) {
            this.root.innerHTML = `
                <div style="height: 65vh; position: relative;">
                    <div style="position: absolute; top: 50%; right: 45%;">
                        <p style="font-size: 8rem">404</p>
                        <p style="font-size: 2rem">Page not found</p>
                        <a href="#dashboard" style="text-underline: none; font-size: 1.2rem;">To Dashboard</a>
                    </div>
                </div>
            `;
        }

        this.root.innerHTML = scene.primary_structure || "";

        requestAnimationFrame(() => {
            scene.layout.forEach(name => {
                this.mountComponent(name, scene.config[name] || {});
            });
        });
    }

    mountComponent(name, config) {
        const component = this.ComponentMap[name];
        if(component?.mount) {
            component.mount(config);
        }
    }

    // mountScene(sceneName) {
    //     const scene = LayoutRegistry[sceneName];
    //     console.log('scene name: ' + scene);
    //     if (!scene) {
    //         this.root.innerHTML = `
    //             <div style="height: 65vh; position: relative;">
    //                 <div style="position: absolute; top: 50%; right: 45%;">
    //                     <p style="font-size: 8rem">404</p>
    //                     <p style="font-size: 2rem">Page not found</p>
    //                     <a href="#dashboard" style="text-underline: none; font-size: 1.2rem;">To Dashboard</a>
    //                 </div>
    //             </div>
    //         `;
    //         return;
    //     }
    //
    //     this.root.innerHTML = "";
    //
    //     scene.layout.forEach(name => {
    //         const component = this.ComponentMap[name];
    //         if (component?.mount()) {
    //             component.mount(scene.config[name] || {});
    //         }
    //     });
    // }


    // mountPanels() {
    //     this.root.innerHTML = `
    //         <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    //               id="sidenav-main"></aside>
    //         <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" id="top-bar">
    //         <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    //         id="navbarBlur"
    //         navbar-scroll="true"></nav>
    //         <div class="d-flex flex-row">
    //             <div class="col-md-4 mt-2 max-height scroll-area scroll-panel" id="section-navigator"></div>
    //             <div class="container-fluid py-4 max-height scroll-area scroll-panel" id="details-display"></div>
    //         </div>
    //         </main>
    //     `;
    //
    //     TopBar.mount({title: "Horizon UI"});
    //     ControlBar.mount({filters: []});
    //     SectionNavigator.mount({entries: []});
    //     DetailsDisplay.mount({selected: null});
    // }
}