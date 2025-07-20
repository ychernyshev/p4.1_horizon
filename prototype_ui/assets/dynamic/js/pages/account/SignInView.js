export const SignIn = {
    mount(params = {}) {
        const container = document.getElementById("sign-in");
        const currentYear = new Date().getFullYear();

        if (!container) {
            console.warn("[TopBar] Контейнер #sidenav-main не знайдено — компонент не змонтовано.");
            return;
        }

        container.innerHTML = `
            <section>
                <div class="page-header min-vh-75">
                    <div class="container">
                        <div class="row">
                            <div
                                    class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto"
                            >
                                <div class="card card-plain mt-8">
                                    <div class="card-header pb-0 text-left bg-transparent">
                                        <h3 class="font-weight-bolder text-info text-gradient">
                                            Welcome back
                                        </h3>
                                        <p class="mb-0">
                                            Enter your authorization information to sign in
                                        </p>
                                    </div>
                                    <div class="card-body">
                                        <form role="form">
                                            <label>Username</label>
                                            <div class="mb-3">
                                                <input
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Username"
                                                        aria-label="Username"
                                                        aria-describedby="email-addon"
                                                />
                                            </div>
                                            <label>Password</label>
                                            <div class="mb-3">
                                                <input
                                                        type="password"
                                                        class="form-control"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                />
                                            </div>
                                            <div class="text-center">
                                                <a
                                                        class="btn bg-gradient-info w-100 mt-4 mb-0 underline-none"
                                                        href="#dashboard"
                                                >
                                                    Sign in
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div
                                        class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8"
                                >
                                    <div
                                            class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                                            style="
                              width: 80%;
                              background-image: url('./assets/img/postman4_horizonebig_logo.png');
                            "
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
            <footer class="footer py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 mx-auto text-center mt-1">
                            <div class="copyright text-center text-sm text-muted text-lg-start">©
                                ${currentYear}
                                , made with
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-heart-fill"
                                        viewBox="0 0 16 16"
                                >
                                    <path
                                            fill-rule="evenodd"
                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                                    />
                                </svg>
                                by
                                <a
                                        href="https://ychernyshev.github.io/"
                                        class="font-weight-bold text-secondary"
                                        target="_blank"
                                >Yevhenii Chernyshev</a>
                                for a comfortable tasks processes.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}