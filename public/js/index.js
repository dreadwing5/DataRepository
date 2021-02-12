const modal = document.querySelector(".nav-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");

const openModal = function () {
  modal.classList.remove("nav__hidden");
  overlay.classList.remove("nav__hidden");
};

const closeModal = function () {
  modal.classList.add("nav__hidden");
  overlay.classList.add("nav__hidden");
};

const navList = document.querySelector("#navList");
navList.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
