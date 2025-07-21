export const ProfileOverview = {
    mount(params = {}) {
        const container = document.getElementById("user_profile");

        if(!container) {
            console.warn("[ProfileOverview] Контейнер #user_profile не знайдено — компонент не змонтовано.");
            return;
        }

        container.innerHTML = `
            
        `
    }
}