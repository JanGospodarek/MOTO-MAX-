import { View } from "./View.js";
class productView extends View {
  data;
  parentElement = document.querySelector(".contentMain");
  generateMarkup() {
    let markup = "";
    console.log(this.data);
    this.data.forEach((product, i) => {
      markup += `
          <a href="" class="product">
          <div class="preview flexCenter">
            <img src="./src/img/products/${product.fileName}.png" alt="product${i}" />
          </div>
          <p>${product.describtion}</p>
          <p class="cena">${product.price}zł</p>
        </a>`;
    });
    return markup;
  }
}
export const products = new productView();
