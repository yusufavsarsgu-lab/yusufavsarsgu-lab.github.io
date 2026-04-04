document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const currentYearTargets = document.querySelectorAll("[data-current-year]");

    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const isActive = href === currentPath || (currentPath === "" && href === "index.html");

        if (isActive) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });

    if (navToggle && header) {
        navToggle.addEventListener("click", () => {
            const isOpen = header.classList.toggle("nav-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                header.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                header.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 820) {
                header.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    currentYearTargets.forEach((item) => {
        item.textContent = new Date().getFullYear();
    });

    const revealItems = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window && revealItems.length) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16 }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
});