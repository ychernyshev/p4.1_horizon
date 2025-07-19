import { TopBar } from '../layout/TopBar.js';
import { ControlBar } from '../layout/ControlBar.js';
import { SectionNavigator } from '../layout/SectionNavigator.js';
import { SectionNavigatorMobile } from '../layout/SectionNavigatroMobile.js';
import { DetailsDisplay } from '../layout/DetailsDisplay.js';

export class PanelManager {
    constructor() {
        this.root = document.getElementById("app");
    }

    mountPanels() {
        this.root.innerHTML = `
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
                  id="sidenav-main"></aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" id="top-bar">
            <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"></nav>
            <div class="d-flex flex-row">
                <div class="col-md-4 mt-2 max-height scroll-area scroll-panel" id="section-navigator"></div>
                <div class="container-fluid py-4 max-height scroll-area scroll-panel" id="details-display"></div>
            </div>
            </main>
        `;

        TopBar.mount({title: "Horizon UI"});
        ControlBar.mount({filters: []});
        SectionNavigator.mount({entries: []});
        DetailsDisplay.mount({selected: null});
    }
}