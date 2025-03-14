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
                <img src="img/logo.svg" class="img-fluid" alt="logo" style="max-width: 50px; margin-right: 10px;">
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
