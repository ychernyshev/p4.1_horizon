export const SectionNavigator = {
    mount(params) {
        const container = document.getElementById("section-navigator");
        container.innerHTML = `
    <div class="row">
            <div class="col-xl-5">
              <button type="button" class="btn btn-default p-2">All</button>
              <button type="button" class="btn btn-secondary p-2">РТЦК</button>
              <button type="button" class="btn btn-secondary p-2">ВЛК</button>
            </div>
            <div class="col-xl-7">
              <input
                type="search"
                class="form-control border p-1"
                placeholder="Typing search a query here"
              />
            </div>
          </div>

          <!--            <button id="showToastBtn" class="btn btn-success">Показати Toast</button>-->

          <!-- Toast-контейнер -->
          <div
            class="toast-container position-fixed bottom-0 end-0 p-3 z-index-sticky"
          >
            <div
              id="softToast"
              class="toast align-items-center text-white bg-gradient-success border-0"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="d-flex">
                <div class="toast-body">Операція успішна!</div>
                <button
                  type="button"
                  class="btn-close btn-close-white me-2 m-auto"
                  data-bs-dismiss="toast"
                  aria-label="Закрити"
                ></button>
              </div>
            </div>
          </div>

          <p class="mt-2">
            <small style="color: lightgray">Today</small>
          </p>
          <hr style="background: lightgray; margin-top: -1rem" />
          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-6">
                  <small><b>РТЦК</b></small>
                </div>
                <div class="col-xl-6 text-end">
                  <small><b>13.07.2025</b></small>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-xl-7">
                  <p>ЛЬВІВСЬКА ФІЛІЯ ТОВ ГАЗОРОЗПОДІЛЬЧІ МЕРЕЖІ</p>
                </div>
                <div class="col-xl-5 text-end">
                  <p>7902600271708</p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-6">
                  <small><b>РТЦК</b></small>
                </div>
                <div class="col-xl-6 text-end">
                  <small><b>13.07.2025</b></small>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-xl-7">
                  <p>ЛІВАВТОДОР</p>
                </div>
                <div class="col-xl-5 text-end">
                  <p>7902689651703</p>
                </div>
              </div>
            </div>
          </a>
          <p class="mt-2">
            <small style="color: lightgray">Yesterday</small>
          </p>
          <hr style="background: lightgray; margin-top: -1rem" />
          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-6">
                  <small><b>РТЦК</b></small>
                </div>
                <div class="col-xl-6 text-end">
                  <small><b>12.07.2025</b></small>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-xl-7">
                  <p>Львівський НДЕКЦ МВС України</p>
                </div>
                <div class="col-xl-5 text-end">
                  <p>7902689655589</p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-6">
                  <small><b>ВЛК</b></small>
                </div>
                <div class="col-xl-6 text-end">
                  <small><b>12.07.2025</b></small>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-7">
                  <p>Львівський НДЕКЦ МВС України</p>
                </div>
                <div class="col-xl-5 text-end">
                  <p>7902689798965</p>
                </div>
              </div>
            </div>
          </a>

          <p class="mt-2">
            <small style="color: lightgray">10.07.2025</small>
          </p>
          <hr style="background: lightgray; margin-top: -1rem" />
          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-8">
                  <small><b>ВЛК</b></small>
                </div>
                <div class="col-xl-4 text-end">
                  <small><b>10.07.2025</b></small>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <p>Львівський НДЕКЦ МВС України</p>
                </div>
                <div class="col-xl-4 text-end">
                  <p>0601153976159</p>
                </div>
              </div>
            </div>
          </a>

          <p class="mt-2">
            <small style="color: lightgray">09.07.2025</small>
          </p>
          <hr style="background: lightgray; margin-top: -1rem" />
          <a
            href="mail/entry_details.html"
            class="text-decoration-none d-block mb-2"
          >
            <div class="card w-100 p-3 navigation-card">
              <div class="row">
                <div class="col-xl-8">
                  <small><b>ВЛК</b></small>
                </div>
                <div class="col-xl-4 text-end">
                  <small><b>10.07.2025</b></small>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <p>Львівський НДЕКЦ МВС України</p>
                </div>
                <div class="col-xl-4 text-end">
                  <p>0601153976159</p>
                </div>
              </div>
            </div>
          </a>
    `;
    }
};