const menu = document.querySelector('.wrapper');
const menuopen = document.querySelector('.burgermenu');
const b = document.body;

menuopen.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuopen.classList.toggle('hamactive');
  b.classList.toggle('overflow');
});
menu.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('active');
  menuopen.classList.toggle('hamactive');
  b.classList.toggle('overflow');
});
