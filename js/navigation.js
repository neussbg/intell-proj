class MyComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Получаем имя текущей страницы из URL (например, 'main.html')
    const pageName = window.location.pathname
      .split("/")
      .pop()
      .split(".")
      .shift();

    this.render();
    this.setActiveNavItem(pageName || "");
  }

  render() {
    this.innerHTML = `
<!-- Navbar Start -->
<div class="container-fluid" style="background-color: #E6F0FF;">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light py-0">
            <a href="main.html" class="navbar-brand d-flex align-items-center">
                <img src="img/logo.png" class="img-fluid" alt="logo" style="max-width: 50px; margin-right: 10px;">
                <h1 class="text-primary fw-bold mb-0">
                    Integra<span style="color: #2962FF;">Marine</span>
                </h1>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto">
                    <a id="nav-main" href="main.html" class="nav-item nav-link">Главная</a>
                    <a id="nav-about" href="about.html" class="nav-item nav-link">О компании</a>
                    <a id="nav-solutions" href="solutions.html" class="nav-item nav-link">Продукты и решения</a>
                    <a id="nav-services" href="services.html" class="nav-item nav-link">Услуги</a>
                    <a id="nav-contact" href="contact.html" class="nav-item nav-link">Контакты</a>

        <div class="d-none d-xl-flex flex-shrink-0" style="margin-left:40px;">
        <div id="phone-tada" class="d-flex align-items-center justify-content-right me-4">
          <a href="tel:+79887700010" class="position-relative">
            <i class="fa fa-phone-alt text-primary fa-2x"></i>
            <div class="position-absolute" style="top: -7px; left: 20px">
              <span><i class="fa fa-comment-dots text-secondary"></i></span>
            </div>
          </a>
        </div>
        <div class="d-flex flex-column pe-4 telephone-text">
          <span class="text-primary">Остались вопросы?</span>
          <span class="text-secondary">Позвоните: +7 (988) 770 00 10</span>
        </div>
            </div>
                </div>
        </nav>
    </div>
</div>
<!-- Navbar End -->
      `;
  }

  setActiveNavItem(message) {
    let currentMessage = message;
    this.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });

    const activeElementId = `nav-${currentMessage}`;

    const activeElement = this.querySelector(`#${activeElementId}`);
    if (activeElement) {
      activeElement.classList.add("active");
    }
  }
}

customElements.define("nav-component", MyComponent);
