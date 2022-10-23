function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  const slidesCount = carouselInner.children.length;
  let position = 0;

  arrowRight.addEventListener('click', () => {
    position -= slideWidth;
    changeSlide();
    checkArrow();
  });

  arrowLeft.addEventListener('click', () => {
    position += slideWidth;
    changeSlide();
    checkArrow();
  });

  function changeSlide() {
    carouselInner.style.transform = `translateX(${position}px)`;
  }

  function checkArrow() {
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
