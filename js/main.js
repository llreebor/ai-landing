function burgerMenu() {
  const menu = document.querySelector("#mobile-menu");
  const burger = document.querySelector("#burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });
}
burgerMenu();

const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
  },
});

// Dark Mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const modeBtn = document.querySelector("#mode-btn");

modeBtn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");

  if (document.querySelector("html").classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});
