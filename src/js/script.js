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
});
