import http from "../http-common";
import {cart} from "../controller/data";
class OrderService {
  getAll() {
   
  }

  getOrder(userId) {
     return http.get("/order/getorder/1");
  }
}
export default new OrderService();
