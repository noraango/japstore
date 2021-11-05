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
}
export default new CartService();
