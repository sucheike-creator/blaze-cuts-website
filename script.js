/* BLAZE CUTS - Website interactions */

// Select the menu button and navigation links
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", function () {
  const isOpen = navbar.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// WhatsApp booking link
// Replace this example with the business owner's number.
// Use country code and digits only: no +, spaces, or dashes.
const whatsappNumber = "2348105722448";

const whatsappMessage =
  "Hello BLAZE CUTS! I would like to ask about booking a haircut.";

const whatsappLink = document.getElementById("whatsapp-link");

whatsappLink.href =
  "https://wa.me/" +
  whatsappNumber +
  "?text=" +
  encodeURIComponent(whatsappMessage);

whatsappLink.target = "_blank";
// cspell:ignore noopener
whatsappLink.rel = "noopener";
