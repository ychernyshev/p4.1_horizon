export const DetailsDisplay = {
  mount(params) {
    const container = document.getElementById("details-display");
    container.innerHTML = `
      <div class="row">
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          Today's items
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          153
                          <span class="text-success text-sm font-weight-bolder"
                            >+5%</span
                          >
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div
                        class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                      >
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          This week items
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          700
                          <span class="text-success text-sm font-weight-bolder"
                            >+3%</span
                          >
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div
                        class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                      >
                        <i
                          class="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          This month items
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          +3,462
                          <span class="text-danger text-sm font-weight-bolder"
                            >-2%</span
                          >
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div
                        class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                      >
                        <i
                          class="ni ni-paper-diploma text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p
                          class="text-sm mb-0 text-capitalize font-weight-bold"
                        >
                          In general
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          103 430
                          <!--                                        <span class="text-success text-sm font-weight-bolder">+5%</span>-->
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div
                        class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                      >
                        <i
                          class="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-12">
              <div class="card z-index-2">
                <div class="card-header pb-0">
                  <h6>This moth DB items overview</h6>
                  <p class="text-sm">
                    <i class="fa fa-arrow-up text-success"></i>
                    <span class="font-weight-bold">4% more</span> in june
                  </p>
                </div>
                <div class="card-body p-3">
                  <div class="chart">
                    <canvas
                      id="chart-line"
                      class="chart-canvas"
                      height="300"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                    <div class="col-lg-6 col-7">
                      <h6>Storage time will expire</h6>
                      <p class="text-sm mb-0">
                        <i class="fa fa-check text-info" aria-hidden="true"></i>
                        <span class="font-weight-bold ms-1">6 items</span> in
                        list
                      </p>
                    </div>
                    <div class="col-lg-6 col-5 my-auto text-end">
                      <div class="dropdown float-lg-end pe-4">
                        <a
                          class="cursor-pointer"
                          id="dropdownTable"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul
                          class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                          aria-labelledby="dropdownTable"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Another action</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href="javascript:;"
                              >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pb-2">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th
                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                          >
                            Sender name
                          </th>
                          <th
                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                          >
                            Tracking number
                          </th>
                          <th
                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                          >
                            Time to returning
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">Soft UI XD Version</h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              8860113151519
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">Add Progress Track</h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              7905754799115
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">
                                  Fix Platform Errors
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              Not set
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">
                                  Launch our Mobile App
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              1000122568869
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">
                                  Add the New Pricing Page
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              7904326589742
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div
                                class="d-flex flex-column justify-content-center"
                              >
                                <h6 class="mb-0 text-sm">
                                  Redesign New Online Shop
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold">
                              0303356497823
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold"
                                    >10%</span
                                  >
                                </div>
                              </div>
                              <div class="progress">
                                <div
                                  class="progress-bar bg-gradient-info w-10"
                                  role="progressbar"
                                  aria-valuenow="10"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card h-100">
                <div class="card-header pb-0">
                  <h6>Storage time expired</h6>
                  <p class="text-sm">
                    <i
                      class="fa fa-arrow-up text-success"
                      aria-hidden="true"
                    ></i>
                    <span class="font-weight-bold">6 items</span> in list
                  </p>
                </div>
                <div class="card-body p-3">
                  <div class="timeline timeline-one-side">
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          8860113151519
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Soft UI XD Version
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          7905754799115
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Add Progress Track
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          7905754799116
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Fix Platform Errors
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          1000122568869
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Launch our Mobile App
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block mb-3">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          7904326589742
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Add the New Pricing Page
                        </p>
                      </div>
                    </div>
                    <div class="timeline-block">
                      <span class="timeline-step">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-return-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
                          />
                        </svg>
                      </span>
                      <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0">
                          0303356497823
                        </h6>
                        <p
                          class="text-secondary font-weight-bold text-xs mt-1 mb-0"
                        >
                          Redesign New Online Shop
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--            <footer class="footer pt-3">-->
          <!--                <div class="container-fluid">-->
          <!--                    <div class="row align-items-center justify-content-lg-between">-->
          <!--                        <div class="col-lg-7 mb-lg-0 mb-4">-->
          <!--                            <div-->
          <!--                                    class="copyright text-center text-sm text-muted text-lg-start"-->
          <!--                            >-->
          <!--                                ©-->
          <!--                                <script>-->
          <!--                                    document.write(new Date().getFullYear());-->
          <!--                                </script>-->
          <!--                                , made with-->
          <!--                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"-->
          <!--                                     class="bi bi-heart-fill" viewBox="0 0 16 16">-->
          <!--                                    <path fill-rule="evenodd"-->
          <!--                                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>-->
          <!--                                </svg> by-->
          <!--                                <a-->
          <!--                                        href="https://ychernyshev.github.io/"-->
          <!--                                        class="font-weight-bold"-->
          <!--                                        target="_blank"-->
          <!--                                >Yevhenii Chernyshev</a-->
          <!--                                >-->
          <!--                                for a comfortable tasks processes.-->
          <!--                            </div>-->
          <!--                        </div>-->
          <!--                        <div class="col-lg-5">-->
          <!--                            <ul-->
          <!--                                    class="nav nav-footer justify-content-center justify-content-lg-end"-->
          <!--                            >-->
          <!--                                <li class="nav-item">-->
          <!--                                    <a-->
          <!--                                            href="https://github.com/ychernyshev/p4.1_horizon/blob/feature/ui-prototype/LICENSE"-->
          <!--                                            class="nav-link pe-0 text-muted"-->
          <!--                                            target="_blank"-->
          <!--                                    >Project License</a-->
          <!--                                    >-->
          <!--                                </li>-->
          <!--                            </ul>-->
          <!--                        </div>-->
          <!--                    </div>-->
          <!--                </div>-->
          <!--            </footer>-->
    `;
  }
};