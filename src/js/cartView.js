import { View } from "./View.js";
import * as model from "./model.js";
class CartView extends View {
  parentElement = document.querySelector(".productsCart");
  btnOpen = document.querySelector(".cart");
  window = document.querySelector(".cartModal");
  btnBuy = document.querySelector(".kup");
  btnDelete = document.querySelector(".delete");
  constructor() {
    super();
  }
  addHandlerRenderOnOpen(handler) {
    this.btnOpen.addEventListener("click", (e) => {
      handler();
      if (model.state.cart.length === 0) {
        this.btnBuy.classList.add("hidden");
        this.btnDelete.classList.add("hidden");
      } else {
        this.btnBuy.classList.remove("hidden");
        this.btnDelete.classList.remove("hidden");
      }
    });
  }
  addHandlerDeleteProduct(handler) {
    this.btnDelete.addEventListener("click", (e) => {
      handler();
    });
  }
  resetCart() {
    this.btnBuy.classList.add("hidden");
    this.btnDelete.classList.add("hidden");
    const es = "<p>Koszyk jest pusty</p>";
    this.parentElement.insertAdjacentHTML("afterbegin", es);
  }
  renderMsg() {}
  generateMarkup() {
    let markup = "";
    this.data.forEach((product) => {
      markup += `
            <div  class="productCart">
            <div class="imgPrev flexCenter">
              <img src="./src/img/products/${
                product.fileName
              }.png" alt="" width="70" />
            </div>
            <p>${product.describtion}</p>
           <p>Rozmiar: ${product.size ? product.size : "uniwersalny"}</p>
           
          </div>`;
    });
    return markup;
  }
}
export const cartView = new CartView();
