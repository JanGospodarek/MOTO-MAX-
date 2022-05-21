"use strict";
// Z racji że jest to mały projekt kod, który normalnie znajdowałby się w View, modelu i controllerze skombinowałem w jeden plik
import { data } from "/src/js/productsData.js";
//W prawdziwym świecie dane pochodziłyby z promisa uzyskanego z API
class View {
  data;
  parentElement;
  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkup() {}
}
class productView extends View {
  parentElement = document.querySelector(".contentMain");
  generateMarkup() {
    let markup = "";
    this.data.forEach((product, i) => {
      markup += `
        <a href="" class="product">
        <div class="preview flexCenter">
          <img src="/src/img/products/${product.fileName}.png" alt="product${i}" />
        </div>
        <p>${product.describtion}</p>
        <p class="cena">${product.price}zł</p>
      </a>`;
    });
    return markup;
  }
}
const products = new productView();
let state = {
  products: data,
};

function init() {
  products.render(state.products);
}
window.addEventListener("load", init);
///////////////////////
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
