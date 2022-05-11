const btnGoToPreviousImage = window.document.getElementById(
  "btnGoToPreviousImage",
);
const currentImage = window.document.getElementById("currentImage");
const btnGoToNextImage = window.document.getElementById("btnGoToNextImage");
const gallery = window.document.getElementById("gallery");

const images = Array.from(Array(15).keys());

function handleSelectImage(event) {
  const btnImage = event.target.closest("button.btnImageGallery[data-index]");

  if (!btnImage) {
    return false;
  }

  gallery.querySelector(".selected").classList.remove("selected");
  currentImage.src = `img/${btnImage.dataset.index}.jpg`;

  const currentSelectedImage = gallery.querySelector(
    `button[data-index="${btnImage.dataset.index}"]`,
  );

  currentSelectedImage.classList.add("selected");

  if (currentSelectedImage.offsetLeft - 4 < gallery.scrollLeft) {
    gallery.scrollTo({
      top: 0,
      left: currentSelectedImage.offsetLeft - 4,
      behavior: "smooth",
    });
  }

  if (
    currentSelectedImage.offsetLeft + currentSelectedImage.clientWidth + 4 >
    gallery.scrollLeft + gallery.clientWidth
  ) {
    gallery.scrollTo({
      top: 0,
      left:
        currentSelectedImage.offsetLeft +
        currentSelectedImage.clientWidth -
        gallery.clientWidth +
        4,
      behavior: "smooth",
    });
  }

  if (
    !gallery.querySelector(
      `button[data-index="${Number(currentSelectedImage.dataset.index) + 1}"]`,
    )
  ) {
    btnGoToNextImage.classList.add("hideButton");
  } else {
    btnGoToNextImage.classList.remove("hideButton");
  }

  if (
    !gallery.querySelector(
      `button[data-index="${Number(currentSelectedImage.dataset.index) - 1}"]`,
    )
  ) {
    btnGoToPreviousImage.classList.add("hideButton");
  } else {
    btnGoToPreviousImage.classList.remove("hideButton");
  }
}

function handleGoToPreviousImage() {
  const currentSelectedImage = gallery.querySelector(".selected");
  const btnPreviousImage = gallery.querySelector(
    `button[data-index="${Number(currentSelectedImage.dataset.index) - 1}"]`,
  );

  if (!btnPreviousImage) {
    return false;
  }

  if (
    !gallery.querySelector(
      `button[data-index="${Number(currentSelectedImage.dataset.index) - 2}"]`,
    )
  ) {
    btnGoToPreviousImage.classList.add("hideButton");
  }

  btnGoToNextImage.classList.remove("hideButton");
  currentSelectedImage.classList.remove("selected");
  currentImage.src = `img/${btnPreviousImage.dataset.index}.jpg`;
  btnPreviousImage.classList.add("selected");

  if (btnPreviousImage.offsetLeft - 4 < gallery.scrollLeft) {
    gallery.scrollTo({
      top: 0,
      left: btnPreviousImage.offsetLeft - 4,
      behavior: "smooth",
    });
  }
}

function handleGoToNextImage() {
  const currentSelectedImage = gallery.querySelector(".selected");
  const btnNextImage = gallery.querySelector(
    `button[data-index="${Number(currentSelectedImage.dataset.index) + 1}"]`,
  );

  if (!btnNextImage) {
    return false;
  }

  if (
    !gallery.querySelector(
      `button[data-index="${Number(currentSelectedImage.dataset.index) + 2}"]`,
    )
  ) {
    btnGoToNextImage.classList.add("hideButton");
  }

  btnGoToPreviousImage.classList.remove("hideButton");
  currentSelectedImage.classList.remove("selected");
  currentImage.src = `img/${btnNextImage.dataset.index}.jpg`;
  btnNextImage.classList.add("selected");

  if (
    btnNextImage.offsetLeft + btnNextImage.clientWidth + 4 >
    gallery.scrollLeft + gallery.clientWidth
  ) {
    gallery.scrollTo({
      top: 0,
      left:
        btnNextImage.offsetLeft +
        btnNextImage.clientWidth -
        gallery.clientWidth +
        4,
      behavior: "smooth",
    });
  }
}

function init() {
  currentImage.src = `img/${images[0]}.jpg`;

  images.forEach((image, index) => {
    gallery.insertAdjacentHTML(
      "beforeend",
      `
        <button class="btnImageGallery" data-index="${index}">
          <img src="img/${image}.jpg" alt="${image}" />
        </button>
      `,
    );
  });

  gallery
    .querySelector('button.btnImageGallery[data-index="0"]')
    .classList.add("selected");

  btnGoToPreviousImage.classList.add("hideButton");
}

init();

gallery.addEventListener("click", handleSelectImage);
btnGoToNextImage.addEventListener("click", handleGoToNextImage);
btnGoToPreviousImage.addEventListener("click", handleGoToPreviousImage);
