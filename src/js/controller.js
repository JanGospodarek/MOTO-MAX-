"use strict";
//Architektura MVC
import { slider } from "./slider.js";
import * as model from "./model.js";
import { products } from "./productView.js";
import { menuView } from "./menuView.js";
function init() {
  products.render(model.state.products);
  slider();
}
init();
// window.addEventListener("load", init);
///////////////////////
