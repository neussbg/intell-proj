class FormComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
           <!-- Form Start -->
               <form
              id="contact-form"
              action="https://formsubmit.co/sakurato456@gmail.com"
              method="POST"
            >
              <!-- 
              Скрытые поля для защиты от спама:
              1. Поле _honeypot (FormSubmit рекомендует использовать именно это имя) 
                 — боты заполнят его, а реальные пользователи нет.
              2. Видимое, но скрытое поле "leaveblank" — боты могут его заполнить, 
                 тогда сообщение будет отклонено.
            -->
              <input type="hidden" name="_honeypot" value="" />
              <!-- Ловушка для ботов -->
              <input
                class="form-control"
                name="leaveblank"
                style="display: none"
                placeholder="Оставьте это поле пустым"
              />
              <!-- Скрытое поле через CSS -->

              <!-- Дополнительные параметры FormSubmit -->
              <input
                type="hidden"
                name="_subject"
                value="Новая заявка с сайта"
              />
              <!-- Тема письма -->
              <input type="hidden" name="_next" />
              <!-- Страница после отправки -->
              <input type="hidden" name="_captcha" value="false" />
              <!-- Отключить CAPTCHA (если не используется) -->

              <!-- Основные поля формы -->
              <input
                class="form-control"
                name="name"
                type="text"
                placeholder="Имя"
                required
              />
              <input
                class="form-control"
                name="phone"
                type="text"
                placeholder="Телефон"
                required
              />
              <input
                class="form-control"
                name="email"
                type="email"
                placeholder="Электронная почта"
                required
              />
              <textarea
                class="form-control"
                name="message"
                rows="6"
                placeholder="Ваше сообщение"
                required
              ></textarea>

              <!-- Кнопка отправки -->
              <button id="submit-btn" type="submit" disabled>
                Отправить заявку
              </button>
            </form>
      <!-- Form End -->
          `;
  }
}

customElements.define("form-component", FormComponent);
