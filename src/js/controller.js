"use strict";
//Architektura MVC
import { slider } from "./slider.js";
import * as model from "./model.js";
import { products } from "./productView.js";
import { menuView } from "./menuView.js";
import { productsPrevs } from "./productView.js";
function controlProducts(data) {
  const productIndex = model.state.products.findIndex(
    (product) => product.id === +data
  );
  console.log(model.state.products[productIndex]);
  productsPrevs.render(model.state.products[productIndex], true, true);
}
function init() {
  products.render(model.state.products);
  products.btnOpen = document.querySelectorAll(".product");
  products.addHandlerHideWindow();
  products.addHandlerShowWindow(true);
  productsPrevs.addHandlerProductMenu(controlProducts);
  slider();
}
init();
// window.addEventListener("load", init);
///////////////////////
