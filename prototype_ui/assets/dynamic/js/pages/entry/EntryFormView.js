export const EntryForm = {
    mount(params = {}) {
        const container = document.getElementById("entry-form");

        if (!container) {
            console.warn("[TopBar] Контейнер #sidenav-main не знайдено — компонент не змонтовано.");
            return;
        }

        container.innerHTML = `
            <div class="row">
                <div class="col-lg-12">
                    <div class="card z-index-2">
                        <div class="card-header pb-0">
                            <h6>Add new entry to Database</h6>
                        </div>
                        <form action="" onclick="event.preventDefault()" id="entryForm">
                            <div class="card-body p-3">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <label for="senderName">Sender name</label>
                                        <input type="text" class="form-control border" id="senderName" placeholder="Sender name">
                                    </div>
                                    <div class="col-xl-6">
                                        <label for="senderAddress">Sender address</label>
                                        <input type="text" class="form-control border" id="senderAddress" placeholder="Sender address">
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-xl-6">
                                        <label for="senderCity">Sender city</label>
                                        <input type="text" class="form-control border" id="senderCity" placeholder="Sender city">
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <label for="postcode">Postcode</label>
                                                <input type="text" class="form-control border" id="postcode" placeholder="Postcode">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="recipient_selection">Recipient selection</label>
                                                <div class="btn-group w-100" id="recipient_selection" role="group" aria-label="Basic outlined example">
                                                    <button type="button" class="btn btn-outline-secondary p-2" id="recipientRTCK">РТЦК
                                                    </button>
                                                    <button type="button" class="btn btn-outline-secondary p-2" id="recipientVLK">ВЛК
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <label for="dateField">Date of receipt</label>
                                        <input type="date" class="form-control border" id="dateField">
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <label for="trackNumber">Track number</label>
                                                <input type="text" class="form-control border" id="trackNumber" placeholder="Track number">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="returnMailNumber">Return track number</label>
                                                <input type="text" class="form-control border" id="returnMailNumber" placeholder="Return track number">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-start mt-5">
                                    <div class="col-xl-3">
                                        <button type="submit" class="btn btn-default w-100" id="addEntry">Add entry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
}