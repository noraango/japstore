import http from "../http-common";
class OrderService {
  getAll() {
   
  }

  getOrder(userId) {
     return http.get("/order/getorderitems/1");
  }
}
export default new OrderService();
