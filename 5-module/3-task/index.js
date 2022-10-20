function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slidesCount = carouselInner.children.length;
  const slideWidth = carouselInner.offsetWidth;
  let position = 0;

  arrowRight.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      position -= slideWidth;
      changeSlide();
      checkArrow();
    }
  });

  arrowLeft.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      position += slideWidth;
      changeSlide();
      checkArrow();
    }
  });

  function changeSlide() {
    carouselInner.style.transform = `translate(${position}px)`;
  }

  function checkArrow() {
    console.log(position);
    arrowLeft.style.display = '';
    arrowRight.style.display = '';
    if (position === 0) {
      arrowLeft.style.display = 'none';
    }
    if (position <= -((slidesCount - 1) * slideWidth)) {
      arrowRight.style.display = 'none';
    }
  }

  checkArrow();
}
