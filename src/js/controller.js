"use strict";
import { slider } from "./slider.js";
import * as model from "./model.js";
import { products } from "./productView.js";
import { menuView } from "./menuView.js";
import { productsPrevs } from "./productView.js";
import { cartView } from "./cartView.js";
import { logView } from "./logView.js";
function controlProducts(data) {
  const productIndex = model.state.products.findIndex(
    (product) => product.id === +data
  );
  model.state.currProduct = model.state.products[productIndex];
  console.log(model.state.currProduct);
  productsPrevs.render(model.state.currProduct, true, true);
  productsPrevs.addHandlerSubmit(controlCart);
}

// function controlDeleteProduct(data) {
//   const productIndex = model.state.cart.findIndex(
//     (product) => product.id === +data
//   );

//   model.state.cart.splice(productIndex, 1);
//   if (model.state.cart.length === 0) {
//     cartView.render(model.state.cart);
//     cartView.resetCart();
//   } else {
//     cartView.render(model.state.cart);
//   }
// }
function controlDeleteProduct() {
  model.state.cart.splice(0, model.state.cart.length);
  cartView.render(model.state.cart);
  cartView.resetCart();
}
function controlCart(data) {
  model.addToCart(data);
  cartView.addHandlerRenderOnOpen(controlRenderCart);
  cartView.addHandlerDeleteProduct(controlDeleteProduct);
}

function controlRenderCart() {
  if (model.state.cart.length === 0) {
    cartView.render(model.state.cart, true, false);
    cartView.resetCart();
  } else {
    cartView.render(model.state.cart);
  }
}

function init() {
  products.render(model.state.products);
  products.btnOpen = document.querySelectorAll(".product");
  products.addHandlerHideWindow();
  products.addHandlerShowWindow(true);
  productsPrevs.addHandlerProductMenu(controlProducts);
  cartView.addHandlerShowWindow();
  cartView.addHandlerHideWindow();
  slider();
}
init();
///////////////////////

alert("W README.txt jest opisana cała funkcjonalność strony");
