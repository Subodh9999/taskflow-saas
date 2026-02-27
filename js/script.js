// =============================
// Mobile Navbar Toggle
// =============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent document click
        navLinks.classList.toggle("active");
    });

    // Prevent menu click from closing itself
    navLinks.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Close when clicking anywhere on page
    document.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

    // Close when clicking nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// =============================
// Scroll Reveal Animation
// =============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =============================
// Pricing Toggle (Monthly / Yearly)
// =============================

const toggle = document.getElementById("toggleSwitch");
const prices = document.querySelectorAll(".price");
const labels = document.querySelectorAll(".toggle-label");

let yearly = false;

if (toggle && prices.length > 0) {

    toggle.addEventListener("click", () => {

        yearly = !yearly;
        toggle.classList.toggle("active");

        // Toggle active label style
        labels.forEach(label => label.classList.toggle("active"));

        prices.forEach(price => {

            const month = price.getAttribute("data-monthly");
            const year = price.getAttribute("data-yearly");

            if (yearly) {
                price.innerHTML = `${year} <span>/year</span>`;
            } else {
                price.innerHTML = `${month} <span>/month</span>`;
            }
        });
    });
}