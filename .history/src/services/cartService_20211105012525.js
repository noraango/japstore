import http from "../http-common";
import {cart} from "../controller/data";
class CartService {
  getAll() {
    return cart;
    // return http.get("/product");
  }

  getCart(userId) {
     return http.get("/cart/get/" + userId);
  }
}
export default new CartService();
