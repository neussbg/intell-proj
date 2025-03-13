document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  // Initiate the wowjs
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // Кнопка поднятия страницы
  const backToTopButton = document.querySelector(".back-to-top");

  // Изначально скрыть кнопку
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
  const submitBtn = document.getElementById("submit-btn");
  const spinner = document.getElementById("spinner");

  const isFormValid = () =>
    formControls.every((field) => field.value.trim() !== "");

  const updateButton = () => (submitBtn.disabled = !isFormValid());

  formControls.forEach((input) =>
    input.addEventListener("input", updateButton)
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

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
