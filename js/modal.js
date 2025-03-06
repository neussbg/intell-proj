class ModalComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Modal Start -->
     <div
      class="modal fade"
      id="successModal"
      tabindex="-1"
      aria-labelledby="successModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div
          class="modal-content"
          style="border-radius: 10px; background-color: #ffffff"
        >
          <div class="modal-header" style="background-color: #e6f0ff">
            <h5 class="modal-title text-primary" id="successModalLabel">
              Успешно!
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div class="modal-body" style="color: #5a5a5a; font-size: 1.1rem">
            Ваша заявка отправлена. Мы свяжемся с вами!
          </div>
          <div class="modal-footer" style="border-top: none">
            <button
              type="button"
              class="btn success-btn"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
        `;
  }
}

customElements.define("modal-component", ModalComponent);
