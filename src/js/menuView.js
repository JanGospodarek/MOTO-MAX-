import { View } from "./View.js";
class MenuView extends View {
  window = document.querySelector(".contactCont");
  btnOpen = document.querySelector("#btnContact");
  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }
}
export const menuView = new MenuView();
