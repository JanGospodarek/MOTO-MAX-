"use strict";
//Architektura MVC
import { slider } from "./slider.js";
import * as model from "./model.js";
import { products } from "./productView.js";

function init() {
  products.render(model.state.products);
  slider();
}
window.addEventListener("load", init);
///////////////////////
