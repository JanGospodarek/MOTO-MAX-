export class View {
  data;
  parentElement;
  btnOpen;
  btnClose;
  window;
  overlay = document.querySelector(".overlay");

  render(data, clear = true, useWindow = false, hideBtn = false) {
    this.data = data;
    const markup = this.generateMarkup();

    if (clear) {
      if (useWindow) {
        this.window.innerHTML = "";
        this.window.insertAdjacentHTML("afterbegin", markup);
      } else {
        this.parentElement.innerHTML = "";
        this.parentElement.insertAdjacentHTML("afterbegin", markup);
      }
    }
  }

  addHandlerShowWindow(array = false) {
    if (array) {
      this.btnOpen.forEach((element) => {
        element.addEventListener("click", this.showWindow.bind(this));
      });
    } else {
      this.btnOpen.addEventListener("click", this.showWindow.bind(this));
    }
  }

  addHandlerHideWindow() {
    this.overlay.addEventListener("click", this.hideWindow.bind(this));
  }

  showWindow() {
    this.overlay.classList.remove("hidden");
    this.window.classList.remove("hidden");
  }

  hideWindow() {
    this.overlay.classList.add("hidden");
    this.window.classList.add("hidden");
  }
  generateMarkup() {}
  resetCart() {}
}
export const view = new View();
