import http from "../http-common";
class OrderService {
  getAll() {}

  getOrder(userId) {
    return http.get("/order/getorderitems/1");
  }

  createOrder(userId, data) {
    let formData = new FormData();
    formData.append("userid", userId);
  }
}
export default new OrderService();
