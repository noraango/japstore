import http from "../http-common";
class CartService {
  getCart(userId) {
    return http.get("/cart/get/" + userId);
  }
  updateCartItem(productId, userId, quantity) {
    return http.post(
      "/cart/update/" + productId + "/" + userId + "/" + quantity
    );
  }
  updateLocalCartItem(productId, quantity) {
    let cart = this.getLocalCart();
    let newCart = [];
    cart.forEach((element) => {
      if (element.id === productId) {
        element.quantity = quantity;
      }
      newCart.push(element);
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  addCart(productId, userId, quantity) {
    return http.post("/cart/add/" + productId + "/" + userId + "/" + quantity);
  }
  deleteCartItem(productId, userId) {
    return http.delete("/cart/delete/" + productId + "/" + userId);
  }
  deleteLocalCartItem(productId) {
    let cart = this.getLocalCart();
    let newCart = [];
    cart.forEach((element) => {
      if (element.id != productId) {
        newCart.push(element);
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  getLocalCart() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    } else {
      let newCart = [];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }
  addItemToLocalCart(item) {
    let cart = this.getLocalCart();
    let increase = false;
    let newCart = [];
    if (cart.length > 0) {
      cart.forEach((element) => {
        if (element.id === item.id) {
          element.quantity += item.quantity;
          increase = true;
        }
        newCart.push(element);
      });
    }
    if (!increase) {
      newCart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(res.data);
  }
}
export default new CartService();
