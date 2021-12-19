import http from "../http-common";
import { users } from "../controller/data";
class UserService {
  getAll() {
    return users;
    // return http.get("/product");
  }

  get(userid) {
    return http.get("/User/ViewRole?userId=" + userid);
  }
  getRole(userid) {
    return http.get("/User/ViewRole?userId=" + userid);
  }
  updateInfor(userId, name, phone) {
    return http.post(
      "/User/UpdateInfor?userId=" + userId + "&name=" + name + "&phone=" + phone
    );
  }
  create(data) {
    console.log(data);
    return http.post("/user", data);
  }

  UpdateUserStatus(userId, status) {
    return http.get(
      "/User/UpdateUserStatus?userId=" + userId + "&status=" + status
    );
  }
  getUserRequest() {
    return http.get("/User/UserRequest?page=1&size=10&roleId=0&status=99");
  }
  getUserReq(page, size, roleId, status) {
    return http.get(
      "/User/UserRequest?page=" +
        page +
        "&size=" +
        size +
        "&roleId=" +
        roleId +
        "&status=" +
        status
    );
  }
  getRoleReq(page, size) {
    return http.get("/User/RoleRequest?page=" + page + "&size=" + size);
  }
  updateRoleReq(statusAccept, requestId) {
    return http.get(
      "/User/UpdateRequest?status=" + statusAccept + "&requestId=" + requestId
    );
  }
  update(data) {
    return "OK";
    //return http.put(`/product/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }
}
export default new UserService();
