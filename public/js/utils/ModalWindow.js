const modal = document.querySelector(".nav-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const navList = document.querySelector("#navList");
const alertMessage = document.getElementById("alert");
if (alertMessage) {
  // console.log("Hiding Alert Message!");
  alertMessage.style.display = "none";
}

const openModal = function () {
  modal.classList.remove("nav__hidden");
  overlay.classList.remove("nav__hidden");
};

const closeModal = function () {
  modal.classList.add("nav__hidden");
  overlay.classList.add("nav__hidden");
};

navList?.addEventListener("click", openModal);

btnCloseModal?.addEventListener("click", closeModal);

overlay?.addEventListener("click", closeModal);

if (modal) {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
