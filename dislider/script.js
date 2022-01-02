const SLIDER_ELEMENTS = 5;
let isAnimating = false;

const btnPrevious = window.document.getElementById("previousButton");
const divContainer = window.document.querySelector(".container");
const btnNext = window.document.getElementById("nextButton");

btnPrevious.addEventListener("click", function () {
  if (isAnimating) return false;

  isAnimating = true;

  const previousBlock = window.document.getElementById("previousBlock");
  const currentBlock = window.document.getElementById("currentBlock");
  const nextBlock = window.document.getElementById("nextBlock");

  previousBlock.classList.remove("nextAction");
  currentBlock.classList.remove("nextAction");
  nextBlock.classList.remove("nextAction");

  if (nextBlock) {
    nextBlock.removeAttribute("id");
    nextBlock.classList.remove("previousAction");
    nextBlock.classList.add("realocationDelayNext");
  }

  if (currentBlock) {
    currentBlock.setAttribute("id", "nextBlock");
    !currentBlock.classList.contains("previousAction") &&
      currentBlock.classList.add("previousAction");
  }

  if (previousBlock) {
    previousBlock.setAttribute("id", "currentBlock");
    !previousBlock.classList.contains("previousAction") &&
      previousBlock.classList.add("previousAction");

    const newPreviousBlock = window.document.querySelector(
      `div.block[data-index="${
        Number(previousBlock.dataset.index) - 1 >= 0
          ? Number(previousBlock.dataset.index) - 1
          : SLIDER_ELEMENTS - 1
      }"]`,
    );

    if (!newPreviousBlock.hasAttribute("id")) {
      newPreviousBlock.setAttribute("id", "previousBlock");
      !newPreviousBlock.classList.contains("previousAction") &&
        newPreviousBlock.classList.add("previousAction");
    }
  }

  setTimeout(() => {
    nextBlock.classList.remove("realocationDelayNext");
  }, 500);

  setTimeout(() => {
    isAnimating = false;
  }, 1000);
});

btnNext.addEventListener("click", function () {
  if (isAnimating) return false;

  isAnimating = true;

  const previousBlock = window.document.getElementById("previousBlock");
  const currentBlock = window.document.getElementById("currentBlock");
  const nextBlock = window.document.getElementById("nextBlock");

  previousBlock.classList.remove("previousAction");
  currentBlock.classList.remove("previousAction");
  nextBlock.classList.remove("previousAction");

  if (previousBlock) {
    previousBlock.removeAttribute("id");
    previousBlock.classList.remove("nextAction");
    previousBlock.classList.add("realocationDelayPrevious");
  }

  if (currentBlock) {
    currentBlock.setAttribute("id", "previousBlock");
    !currentBlock.classList.contains("nextAction") &&
      currentBlock.classList.add("nextAction");
  }

  if (nextBlock) {
    nextBlock.setAttribute("id", "currentBlock");
    !nextBlock.classList.contains("nextAction") &&
      nextBlock.classList.add("nextAction");

    const newNextBlock = window.document.querySelector(
      `div.block[data-index="${
        (Number(nextBlock.dataset.index) + 1) % SLIDER_ELEMENTS
      }"]`,
    );

    if (!newNextBlock.hasAttribute("id")) {
      newNextBlock.setAttribute("id", "nextBlock");
      !newNextBlock.classList.contains("nextAction") &&
        newNextBlock.classList.add("nextAction");
    }
  }

  setTimeout(() => {
    previousBlock.classList.remove("realocationDelayPrevious");
  }, 500);

  setTimeout(() => {
    isAnimating = false;
  }, 1000);
});

function populateSlider() {
  Array.from(Array(SLIDER_ELEMENTS).keys()).forEach((_, index, array) => {
    const divBlock = window.document.createElement("div");

    divBlock.classList.add("block");
    divBlock.classList.add(`b${(index % 5) + 1}`);
    divBlock.setAttribute("data-index", index);

    if (index === array.length - 1 && array.length > 2)
      divBlock.setAttribute("id", "previousBlock");
    if (index === 0) divBlock.setAttribute("id", "currentBlock");
    if (index === 1) divBlock.setAttribute("id", "nextBlock");

    divContainer.append(divBlock);
  });
}

function init() {
  populateSlider();
}

init();
