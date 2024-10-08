// Select DOM elements
const navbarIcon = document.getElementById('navbar-icon');
const sideNavbar = document.getElementById('side-navbar');
const closeBtn = document.getElementById('close-btn');

// Open the side navbar
navbarIcon.addEventListener('click', () => {
  sideNavbar.classList.add('show');
});

// Close the side navbar
closeBtn.addEventListener('click', () => {
  sideNavbar.classList.remove('show');
});
