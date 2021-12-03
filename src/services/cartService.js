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
  addCart(productId, userId, quantity) {
    return http.post("/cart/add/" + productId + "/" + userId + "/" + quantity);
  }
  deleteCartItem(productId, userId) {
    return http.delete("/cart/delete/" + productId + "/" + userId);
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
  }
}
export default new CartService();
