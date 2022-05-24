import { productD } from "./productsData.js";
console.log(productD);
export let state = {
  products: productD,
  cart: [],
  currProduct: "",
};
export function addToCart(data) {
  const { rozmiar } = data;
  const product = {
    describtion: state.currProduct.describtion,
    price: state.currProduct.price,
    fileName: state.currProduct.fileName,
    id: state.currProduct.id,
    size: rozmiar,
  };
  state.cart.push(product);
}
