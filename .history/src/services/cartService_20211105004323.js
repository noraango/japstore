
import {cart} from "../controller/data";
class CartService {
  getAll() {
    return cart;
    // return http.get("/product");
  }

  get(userid) {
    return cart.find((x) => x.userid === userid);
    // return http.get(`/product/${id}`);
  }
}
export default new CartService();
