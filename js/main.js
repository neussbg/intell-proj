document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Initiate the wowjs
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // Кнопка поднятия страницы
  const backToTopButton = document.querySelector(".back-to-top");
  backToTopButton.style.display = "none";
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Contact Form
  const form = document.getElementById("contact-form");
  const formControls = Array.from(
    document.querySelectorAll(".form-control")
  ).filter((field) => !["_honeypot", "leaveblank"].includes(field.name));
  const agreementCheckbox = document.getElementById("agreement");
  const submitBtn = document.getElementById("submit-btn");
  const isFieldValid = (field) => {
    const value = field.value.trim();
    const { name } = field;

    if (name === "name") {
      return /^[a-zA-Zа-яА-Я\s]+$/.test(value);
    }
    if (name === "phone") {
      // Регулярное выражение для проверки российских номеров: +7, 7 или 8, затем 10 цифр
      return /^(?:\+7|7|8)\d{10}$/.test(value);
    }
    if (name === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value !== "";
  };

  const isFormValid = () => {
    const allFieldsValid = formControls.every(isFieldValid);
    return allFieldsValid && agreementCheckbox.checked;
  };

  const updateButton = () => {
    submitBtn.disabled = !isFormValid();
  };

  formControls.forEach((input) =>
    input?.addEventListener("input", updateButton)
  );
  agreementCheckbox?.addEventListener("change", updateButton);

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const spinner = document.getElementById("spinner");
    spinner.classList.add("show");
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(form)),
      });

      if (response.ok) {
        const modalElement = document.getElementById("successModal");
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
        } else {
          console.error("Модальное окно не найдено!");
        }
        form.reset();
      } else {
        alert("Ошибка отправки. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка. Проверьте подключение к интернету.");
    } finally {
      spinner.classList.remove("show");
      submitBtn.disabled = false;
    }
  });
});
