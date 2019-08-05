var nav = document.querySelector('.nav');
var navBurger = document.querySelector('.nav__burger');

nav.classList.remove('nav--nojs');

navBurger.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
