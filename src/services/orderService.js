import http from "../http-common";
class OrderService {
  getAll() {}

  getOrders(userId, statusId) {
    return http.get("/order/getorders/" + userId + "/" + statusId);
  }
  getOrderItems(orderId) {
    return http.get("/order/getorderitems/" + orderId);
  }

  createOrder(user, data) {
    let formData = new FormData();
    if (user) {
      formData.append("userid", user.id);
    }
    formData.append("EmailAddress", data.email);
    formData.append("ProvinceId", data.city);
    formData.append("DistrictId", data.district);
    formData.append("Name", data.name);
    formData.append("Phone", data.phoneNumber);
    formData.append("Address", data.location);
    formData.append("Price", data.price);
    return http.post("/order/create", formData);
  }
}
export default new OrderService();
