
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentYearTargets = document.querySelectorAll("[data-current-year]");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === currentPath || (currentPath === "" && href === "index.html");
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (navToggle && header) {
    const closeNav = () => {
      header.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-lock");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-lock", isOpen && window.innerWidth <= 1100);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) closeNav();
    });
  }

  currentYearTargets.forEach((item) => item.textContent = new Date().getFullYear());
});
