export class View {
  data;
  parentElement;
  btnOpen;
  btnClose;
  window;
  overlay = document.querySelector(".overlay");

  render(data, clear = true) {
    if (clear) this.parentElement.innerHTML = "";
    this.data = data;
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerShowWindow(query) {
    this.btnOpen = document.querySelector(`.${query}`);
    this.btnOpen.addEventListener("click", this.showWindow.bind(this));
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
