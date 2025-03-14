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
  action="https://formsubmit.co/office@integra-marine.ru"
  method="POST"
>
  <!-- Скрытые поля для защиты от спама 
   1. Поле _honeypot (FormSubmit рекомендует использовать именно это имя) 
                 — боты заполнят его, а реальные пользователи нет.
              2. Видимое, но скрытое поле "leaveblank" — боты могут его заполнить, 
                 тогда сообщение будет отклонено.
                 -->
  <input type="hidden" name="_honeypot" value="" />
  <input
    class="form-control"
    name="leaveblank"
    style="display: none"
    placeholder="Оставьте это поле пустым"
  />
  <input type="hidden" name="_subject" value="Новая заявка с сайта" />
  <input type="hidden" name="_next" />
  <input type="hidden" name="_captcha" value="false" />

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

  <!-- Чекбокс с пользовательским соглашением -->
<div class="form-control-checkbox">
  <input
    class="form-control-checkbox-input"
    type="checkbox"
    id="agreement"
    required
    style="width: auto;"
  />
  <label class="form-check-label form-control-checkbox-label ms-2 mb-0" for="agreement">
    Я согласен с <a href="agreement.html" target="_blank">пользовательским соглашением</a>
  </label>
</div>

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
