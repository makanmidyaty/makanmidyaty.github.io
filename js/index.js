const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!targetElement.closest('.navbar')) {
    menu.classList.remove('show-menu');
  }
});

// Close the menu on window resize (when switching from mobile to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('show-menu');
  }
});
