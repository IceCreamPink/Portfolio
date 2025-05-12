document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const cards = document.querySelectorAll(".card-with-modal");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.textContent.trim().toLowerCase();

      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      cards.forEach((card) => {
        const cardCategory = card
          .querySelector(".card-info span")
          .textContent.trim()
          .toLowerCase();

        if (category === "all" || cardCategory.includes(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  const root = document.documentElement;

  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  function setTheme(theme) {
    if (theme === "dark") {
      root.style.setProperty("--body-color", "hsl(250, 26%, 12%)");
      root.style.setProperty("--color-02", "hsl(217, 45%, 98%)");
      root.style.setProperty("--color-04", "hsl(217, 0%, 62%)");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      root.style.setProperty("--body-color", "hsl(0, 0%, 98%)");
      root.style.setProperty("--color-02", "hsl(217, 26%, 12%)");
      root.style.setProperty("--color-04", "hsl(217, 26%, 30%)");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
    localStorage.setItem("theme", theme);
  }

  setTheme(savedTheme);

  themeBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  const menuShowBtn = document.querySelector(".menu-show-btn");
  const menuHideBtn = document.querySelector(".menu-hide-btn");
  const navMenu = document.querySelector(".btn-nav .menu");

  menuShowBtn.addEventListener("click", () => {
    navMenu.style.display = "flex";
    menuShowBtn.style.opacity = "0";
    menuHideBtn.style.opacity = "1";
    menuHideBtn.style.pointerEvents = "auto";
  });

  menuHideBtn.addEventListener("click", () => {
    navMenu.style.display = "none";
    menuShowBtn.style.opacity = "1";
    menuHideBtn.style.opacity = "0";
    menuHideBtn.style.pointerEvents = "none";
  });

  const hireBtns = document.querySelectorAll(".hire-btn-01, .hire-btn-02");
  hireBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });
  });

  const formInputs = document.querySelectorAll(".app-form-control");
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.borderBottomColor = "var(--primary-color)";
    });
    input.addEventListener("blur", function () {
      this.style.borderBottomColor = "#666";
    });
  });

  const sections = document.querySelectorAll(".nav-menu-section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(20px)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});

function toggleMobileMenu() {
  const mobileMenuBtn = document.querySelector(".menu-show-btn");
  const navMenu = document.querySelector(".btn-nav .menu");
  const menuContainer = document.querySelector(".btn-nav");

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-menu-open");
    menuContainer.classList.toggle("menu-active");
  });
}

window.addEventListener("load", toggleMobileMenu);
