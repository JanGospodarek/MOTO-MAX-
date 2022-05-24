import { View } from "./View.js";
class LogView extends View {
  constructor() {
    super();
    this.handlerDropMenu("konto");
  }
  handlerDropMenu(element) {
    const btn = document.querySelector(`.${element}`);
    const dropMenu = document.querySelector(`#${element}`);
    console.log(btn, dropMenu);
    function helper() {
      dropMenu.style.height = "75px";
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
export const logView = new LogView();
