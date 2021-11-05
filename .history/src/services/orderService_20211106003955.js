import http from "../http-common";
import {cart} from "../controller/data";
class OrderService {
  getAll() {
    return order;
    // return http.get("/product");
  }

  getOrder(userId) {
     return http.get("/order/getorder/1");
  }
}
export default new OrderService();
