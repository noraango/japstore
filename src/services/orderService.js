import http from "../http-common";
class OrderService {
  getAll() {}

  getOrders(userId, statusId) {
    return http.get("/order/getorders/" + userId + "/" + statusId);
  }
  getOrderItems(orderId) {
    return http.get("/order/getorderitems/" + orderId);
  }

  createOrder(user, data, cartId) {
    console.log(user);
    console.log(data);
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
    return http.post("/order/create?cartId=" + cartId, formData);
  }

  getListOrder(idOrder) {
    return http.get("/Order/ViewOrder?orderId=" + idOrder);
  }
  ReceiveOrder(userId, orderid) {
    return http.get(
      "/Order/ReceiveOrder?userId=" + userId + "&orderid=" + orderid
    );
  }
  getOrder(userId, type, page, size) {
    return http.get(
      "/Order/GetOrder?userId=" +
        userId +
        "&filterType=" +
        type +
        "&page=" +
        page +
        "&size=" +
        size
    );
  }
  getOrderShipping(userId, page, size) {
    return http.get(
      "/Order/GetShipping?userId=" + userId + "&page=" + page + "&size=" + size
    );
  }
  GetOrderHistory(userId, page, size) {
    return http.get(
      "/Order/GetHistory?userId=" + userId + "&page=" + page + "&size=" + size
    );
  }
  UpdateOrderShipping(orderId, status) {
    return http.get(
      "/Order/UpdateOrder?orderId=" + orderId + "&status=" + status
    );
  }
  CancelOrder(cancleId, idOrder, reason) {
    return http.get(
      "/Order/CancelOrder?cancelType=" +
        cancleId +
        "&orderId=" +
        idOrder +
        "&reason=" +
        reason
    );
  }

  ViewOrder(idOrder) {
    return http.get("/Order/ViewOrder?orderId=" + idOrder);
  }
}
export default new OrderService();
