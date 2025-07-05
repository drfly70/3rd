// script.js for Carota Canina – The Roman Dog Coin

// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});

// Animated Mint Button & FOMO Message
const mintBtn = document.getElementById('mintBtn');
const fomoMsg = document.getElementById('fomo-message');
if (mintBtn && fomoMsg) {
  mintBtn.addEventListener('click', () => {
    mintBtn.classList.add('clicked');
    fomoMsg.textContent = "You minted! Welcome to the Meme Legion 🥕🐕‍🦺";
    setTimeout(() => mintBtn.classList.remove('clicked'), 500);
    setTimeout(() => fomoMsg.textContent = '', 3500);
  });
}

// Live Price Widget (Simulated Demo)
function fetchPrice() {
  // Replace this with real API call for production
  const price = (Math.random() * 0.01 + 0.001).toFixed(6);
  const priceValue = document.getElementById('price-value');
  if (priceValue) {
    priceValue.textContent = `$${price} USD`;
  }
}
fetchPrice();
setInterval(fetchPrice, 5000);

// Contact Form Submission (Demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting Carota Canina! We will respond soon.');
    contactForm.reset();
  });
}

// FAQ Accessibility: Expand only one at a time (optional enhancement)
const faqDetails = document.querySelectorAll('.faq details');
faqDetails.forEach((detail) => {
  detail.addEventListener('toggle', function () {
    if (detail.open) {
      faqDetails.forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});
