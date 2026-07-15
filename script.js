// ===============================
// Al-Furqan Fashion World
// JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Header Shadow
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            } else {
                header.style.boxShadow = "none";
            }
        });
    }

    // Fade Animation
    const cards = document.querySelectorAll(
        ".service-card, .product-card, .gallery-item, .team-card, .contact-card, .hero-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        });

        cards.forEach(function (card) {

            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = "all 0.6s ease";

            observer.observe(card);

        });

    }

    // Footer Year
    const footer = document.querySelector("footer p:last-child");

    if (footer) {
        footer.innerHTML =
            "&copy; " +
            new Date().getFullYear() +
            " Al-Furqan Fashion World. All Rights Reserved.";
    }

    console.log("Al-Furqan Fashion World Loaded Successfully");

});