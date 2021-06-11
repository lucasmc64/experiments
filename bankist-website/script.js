'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
