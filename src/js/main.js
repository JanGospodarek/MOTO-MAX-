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
        <img src="/src/img/products/${product.fileName}.png" alt="product${i}" />
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
