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
}
export default new CartService();
