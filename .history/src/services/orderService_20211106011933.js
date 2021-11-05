import http from "../http-common";
class OrderService {
  getAll() {
   
  }

  getOrder(userId) {
     return http.get("/order/getorder/1");
  }
}
export default new OrderService();
