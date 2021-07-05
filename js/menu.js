const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav');
const closeMenuButton = document.querySelector('.close-button');

menuButton.addEventListener('click', (event) => {
  menu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', (event) => {
  menu.classList.remove('is-open');
});