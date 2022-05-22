export class View {
  data;
  parentElement;
  btnOpen;
  btnClose;

  window;
  overlay = document.querySelector(".overlay");

  render(data, clear = true, useWindow = false) {
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
    // this.btnOpen = document.querySelector(`.${query}`);
    // console.log(this.btnOpen);
    if (array) {
      this.btnOpen.forEach((element) => {
        element.addEventListener("click", this.showWindow.bind(this));
        // if (element.dataset) this.dataset = element.dataset.id;
      });
    } else {
      this.btnOpen.addEventListener("click", this.showWindow.bind(this));
      // if (this.btnOpen.dataset) return (this.dataset = this.btnOpen.dataset.id);
    }
  }

  addHandlerHideWindow() {
    this.overlay.addEventListener("click", this.hideWindow.bind(this));
  }

  showWindow() {
    this.overlay.classList.remove("hidden");
    this.window.classList.remove("hidden");
    console.log(this.window);
  }

  hideWindow() {
    this.overlay.classList.add("hidden");
    this.window.classList.add("hidden");
  }
  generateMarkup() {}
}
export const view = new View();
