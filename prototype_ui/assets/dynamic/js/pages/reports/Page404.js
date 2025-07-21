export const Page404 = {
    mount(params = {}) {
        const container = document.getElementById("app");

        if(!container) {
            console.warn("[Page404] Контейнер #page_404 не знайдено — компонент не змонтовано.");
            return;
        }

        container.innerHTML = `
            <div style="height: 65vh; position: relative;" class="col-12 col-xl-8">
                <div style="position: absolute; top: 50%; right: 45%;" class="card w-25 h-100">
                    <div class="card-body p-3 d-flex justify-content-center" style="position: relative">
                        <div style="position: absolute; top: 0;">
                            <p style="font-size: 8rem;">404</p>
                            <p style="font-size: 2rem">Page not found</p>
                        </div>
                        <a href="#dashboard" style="position: absolute; left: 2.5rem; bottom: 2.5rem; text-underline: none; font-size: 1.2rem;">To Dashboard</a>
                    </div>
                </div>
            </div>
        `;
    }
}