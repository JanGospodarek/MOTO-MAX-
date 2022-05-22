import { View } from "./View.js";
class productView extends View {
  data;
  parentElement = document.querySelector(".contentMain");
  products = document.querySelectorAll(".product");
  window = document.querySelector(".productModal");
  btnOpen;

  generateMarkup() {
    let markup = "";
    console.log(this.data);
    this.data.forEach((product, i) => {
      markup += `
          <button data-id="${product.id}" href="" class="product">
          <div class="preview flexCenter">
            <img src="./src/img/products/${product.fileName}.png" alt="produkt${i}" />
          </div>
          <p>${product.describtion}</p>
          <p class="cena">${product.price}zł</p>
        </button>`;
    });
    return markup;
  }
}

export const products = new productView();
class productPreviewView extends View {
  parentElement = document.querySelector(".contentMain");
  window = document.querySelector(".productModal");
  data;

  addHandlerProductMenu(handler) {
    this.parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.target.closest(".product");
      if (!btn) return;
      const dataset = btn.dataset.id;
      handler(dataset);
    });
  }
  generateMarkup() {
    let markup = `
    <div class="imgPrev flexCenter">
          <img src="./src/img/products/${this.data.fileName}.png" alt="" />
        </div>
        <div class="describtionPrev">
          <p>${this.data.describtion}</p>
          <p class="opis">Świetny kask, który zapewni Ci najlepszą ochronę</p>
          <form class="productForm">
            <p class="rozmiary">
              Wybierz rozmiar:
              <select name="rozmiar">
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
              </select>
            </p>
            <input class="dodaj" type="submit" value="Dodaj do koszyka" />
          </form>
        </div>
    `;
    return markup;
  }
}
export const productsPrevs = new productPreviewView();
