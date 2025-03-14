class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Footer Start -->
    <footer style="background-color: #e6f0ff; padding: 40px 0; color: #5a5a5a">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <h1 class="mb-4">
              Integra<span style="color: #2962ff">Marine</span>
            </h1>
            <p>
              Integra Marine — комплексный подход к решению ИТ-задач: от идеи до
              внедрения и поддержки.
            </p>
            <div class="d-flex justify-content-start">
              <a href="#" class="me-2"
                ><i class="fab fa-vk text-dark"></i
              ></a>
              <a href="#" class="me-2"
                ><i class="fab fa-telegram text-dark"></i
              ></a>
           
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <a href="#" class="h3 text-dark">Быстрые ссылки</a>
            <div class="mt-4 d-flex flex-column short-link">
              <a href="main.html" class="mb-2 text-secondary footer-value"
                ><i class="fas fa-angle-right text-secondary me-2"></i
                >Главная</a
              >
              <a href="about.html" class="mb-2 text-secondary footer-value"
                ><i class="fas fa-angle-right text-secondary me-2"></i>О
                компании</a
              >
              <a href="contact.html" class="mb-2 text-secondary footer-value"
                ><i class="fas fa-angle-right text-secondary me-2"></i
                >Контакты</a
              >
              <a href="services.html" class="mb-2 text-secondary footer-value"
                ><i class="fas fa-angle-right me-2"></i>Услуги</a
              >
              <a href="solutions.html" class="mb-2 text-secondary footer-value"
                ><i class="fas fa-angle-right me-2"></i>Продукты</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <h3 class="text-dark">Свяжитесь с нами</h3>
            <div class="mt-4">
              <p class="mb-2">
                <i class="fas fa-map-marker-alt me-2"></i>г. Новороссийск, ул. Индустриальная, 8
              </p>
              <p><i class="fas fa-envelope me-2"></i>office@integra-marine.ru</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span
              >&copy; <a href="#" class="text-secondary">Integra Marine</a>, все
              права защищены.</span
            >
          </div>
          <div class="col-md-6 text-center text-md-end">
            <span
              >Разработано
              <a href="https://htmlcodex.com" class="text-secondary"
                >Integra Marine</a
              ></span
            >
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
        `;
  }
}

customElements.define("footer-component", FooterComponent);
