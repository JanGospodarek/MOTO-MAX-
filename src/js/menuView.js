import { View } from "./View.js";
class MenuView extends View {
  window = document.querySelector(".contactCont");
  parentElement = document.querySelector(".menu");
  btnOpen = document.querySelector("#btnContact");
  categories = document.querySelectorAll(".category");
  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
    ["akcesoria", "czesci", "ubrania"].forEach((el) =>
      this.handlerDropMenu(el)
    );
  }

  handlerDropMenu(element) {
    const btn = document.querySelector(`.${element}`);
    const dropMenu = document.querySelector(`#${element}`);
    function helper() {
      if (element === "akcesoria") dropMenu.style.height = "120px";
      if (element === "czesci") dropMenu.style.height = "60px";
      if (element === "ubrania") dropMenu.style.height = "60px";
    }
    btn.addEventListener("mouseover", helper);
    btn.addEventListener("mouseleave", () => {
      dropMenu.style.height = "0";
    });
    dropMenu.addEventListener("mouseleave", () => {
      dropMenu.style.height = "0";
    });
    dropMenu.addEventListener("mouseover", helper);
  }
}
export const menuView = new MenuView();
