const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
burgir.classList.toggle("open");
headerNav.classList.toggle("open");
});

const b2Top = document.querySelector(".backtotop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    b2Top.classList.add("open");
  } else {
    b2Top.classList.remove("open");
  }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Validate inputs
    const inputs = form.querySelectorAll('.contact__inputs');
    let isValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isValid = false;
        input.style.border = '2px solid red';
      } else {
        input.style.border = 'none';
      }
    });

    if (isValid) {
      // Show popup if form is valid
      popup.classList.remove('hidden');
      form.reset();
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });

  // Handle popup close
  popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // Add smooth scroll for navigation
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
