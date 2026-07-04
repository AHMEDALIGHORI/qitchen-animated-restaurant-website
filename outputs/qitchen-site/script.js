const topbars = document.querySelectorAll(".topbar");

document.documentElement.classList.add("has-motion");

topbars.forEach((topbar) => {
  const toggle = topbar.querySelector(".menu-toggle");
  const links = topbar.querySelectorAll(".nav-links a");

  toggle?.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
});

const reservationForm = document.querySelector("[data-reservation-form]");

if (reservationForm) {
  const status = reservationForm.querySelector("[data-submit-status]");

  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!reservationForm.checkValidity()) {
      reservationForm.reportValidity();
      status.textContent = "Please complete every field to request your table.";
      return;
    }

    status.textContent = "Thank you. Your reservation request has been noted.";
    reservationForm.reset();
  });
}
