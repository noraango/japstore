import http from "../http-common";
class OrderService {
  getAll() {}

  getOrder(userId) {
    return http.get("/order/getorderitems/1");
  }

  createOrder(user, data) {
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
    return http.post("/order/create", formData);
  }
}
export default new OrderService();
