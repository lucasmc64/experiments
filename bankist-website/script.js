'use strict';

///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

// Modal window

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button navigation

btnScrollTo.addEventListener('click', function (event) {
  // Scroll "suave" moderno
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Page navigation

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

// Tabbed component

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(elem => {
      if (elem !== link) elem.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into a handler

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation

const observer = new IntersectionObserver();
observer.observe(section1);

/*
// Mensagem de Cookies
const header = document.querySelector('.header');
const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
*/

/*
// Scroll suave
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (event) {
  // Pegar as coordenadas do elemento para onde queremos rolar
  const s1coords = section1.getBoundingClientRect();

  // Scroll "seco" antigo
  window.scrollTo(
    s1coords.left + window.pageXOffset, // Posição horizontal do elemento em relação a viewport + distância já rolada horizontalmente
    s1coords.top + window.pageYOffset // Posição vertical do elemento em relação a viewport + distância já rolada verticalmente
  );
  

  // Scroll "suave" antigo
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  

  // Scroll "seco" moderno
  section1.scrollIntoView();
  

  // Scroll "suave" moderno
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
*/
