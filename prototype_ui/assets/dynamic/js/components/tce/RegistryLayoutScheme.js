export const LayoutRegistry = {
    dashboard: {
        primary_structure: `
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
        `
        ,
        layout: ["ControlBar", "TopBar", "SectionNavigator", "DetailsDisplay"],
        config: {
            TopBar: {title: "Horizon UI Dashboard"},
            ControlBar: {filters: []},
            SectionNavigator: {entries: []},
            DetailsDisplay: {selected: null}
        }
    },
    add_entry: {
        primary_structure: `
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
                  id="sidenav-main"></aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" id="top-bar">
                <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                id="navbarBlur"
                navbar-scroll="true"></nav>
                <div class="d-flex flex-row">
                    <div class="col-md-4 mt-2 max-height scroll-area scroll-panel" id="section-navigator"></div>
                    <div class="container-fluid py-4 max-height scroll-area scroll-panel" id="entry-form"></div>
                </div>
            </main>
        `,
        layout: ["TopBar", "ControlBar", "SectionNavigator", "EntryForm"],
        config: {
            TopBar: {title: "Add entry"},
            EntryForm: {mode: "create"}
        }
    },
    sign_in: {
        primary_structure: `
            <main class="main-content mt-0" id="sign-in"></main>
        `,
        layout: ["SignIn"],
        config: {
            SignInForm: {redirect: "dashboard"}
        }
    },
}