'use strict';

function sliderStart() {
  const slider = document.querySelector('.slider');
  const cards = Array.from(document.querySelectorAll('.carousel__item'));
  const sliderDots = Array.from(document.querySelectorAll('.carousel__dot'));

  let currentIndex = cards.findIndex(item => {
    return item.classList.contains('carousel__item--active');
  });

  const dotCurentIndex = sliderDots.findIndex(item => {
    return item.classList.contains('carousel__dot--active');
  });

  if (currentIndex !== dotCurentIndex) {
    sliderDots[dotCurentIndex].classList.remove('carousel__dot--active');
    sliderDots[currentIndex].classList.add('carousel__dot--active');
  }

  function handler(e) {
    if (!e.target.classList.contains('carousel__btn')) {
      return;
    }

    cards[currentIndex].classList.remove('carousel__item--active');
    sliderDots[currentIndex].classList.remove('carousel__dot--active');

    if (e.target.classList.contains('carousel__btn_prev')) {
      if (currentIndex === 0) {
        currentIndex = cards.length - 1;
      } else {
        currentIndex -= 1;
      }
    } else if (e.target.classList.contains('carousel__btn_next')) {
      if (currentIndex === cards.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
    }

    cards[currentIndex].classList.add('carousel__item--active');
    sliderDots[currentIndex].classList.add('carousel__dot--active');
  }

  slider.addEventListener('click', handler);
}

sliderStart();
