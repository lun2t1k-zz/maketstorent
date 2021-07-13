const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function () {
  menu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', function () {
  menu.classList.remove('is-open');
});