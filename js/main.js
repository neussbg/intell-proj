(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Fact Counter

  $(document).ready(function () {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "easeInQuad",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formControls = Array.from(
    document.querySelectorAll(".form-control")
  ).filter((field) => !["_honeypot", "leaveblank"].includes(field.name));
  const submitBtn = document.getElementById("submit-btn");
  const spinner = document.getElementById("spinner");

  // Функция для проверки заполнения полей
  const isFormValid = () => {
    return formControls.every((field) => field.value.trim() !== "");
  };

  // Обновление состояния кнопки
  const updateButton = () => {
    submitBtn.disabled = !isFormValid();
  };

  formControls.forEach((input) => {
    input.addEventListener("input", updateButton);
  });

  // Обработчик отправки формы
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (!isFormValid()) {
      return;
    }

    // Включаем спиннер и блокируем кнопку
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
        // Проверяем, существует ли элемент модального окна
        const modalElement = document.getElementById("successModal");
        if (modalElement) {
          // Инициализируем модальное окно
          const modal = new bootstrap.Modal(modalElement);
          modal.show();
        } else {
          console.error("Модальное окно не найдено!");
        }

        // Очистка формы (опционально)
        form.reset();
      } else {
        alert("Ошибка отправки. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка. Проверьте подключение к интернету.");
    } finally {
      // Удаляем спиннер и разблокируем кнопку
      spinner.classList.remove("show");
      submitBtn.disabled = false;
    }
  });
});
