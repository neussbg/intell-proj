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
    <nav class="navbar navbar-expand-lg py-0">
      <a href="main.html" class="navbar-brand">
        <h1 class="text-primary fw-bold d-block">
          Intell<span style="color: #2962FF;">ectika</span>
        </h1>
      </a>
      <button
        type="button"
        class="navbar-toggler me-0"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
        <div class="navbar-nav ms-auto mx-xl-auto p-0">
          <a id="nav-main" href="main.html" class="nav-item nav-link text-secondary">Главная</a>
          <a id="nav-about" href="about.html" class="nav-item nav-link text-secondary">О компании</a>
          <a id="nav-solutions" href="solutions.html" class="nav-item nav-link text-secondary">Продукты и решения</a>
          <a id="nav-services" href="services.html" class="nav-item nav-link text-secondary">Услуги</a>
          <a id="nav-contact" href="contact.html" class="nav-item nav-link text-secondary">Контакты</a>
        </div>
      </div>
      <div class="d-none d-xl-flex flex-shrink-0">
        <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
          <a href="tel:+79999999999" class="position-relative">
            <i class="fa fa-phone-alt text-primary fa-2x"></i>
            <div class="position-absolute" style="top: -7px; left: 20px">
              <span><i class="fa fa-comment-dots text-secondary"></i></span>
            </div>
          </a>
        </div>
        <div class="d-flex flex-column pe-4 ">
          <span class="text-primary">Остались вопросы?</span>
          <span class="text-secondary">Позвоните: +7 (999) 999 99 99</span>
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
