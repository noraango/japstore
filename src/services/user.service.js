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
  updateInfor(userId,name,phone) {
    return http.post("/User/UpdateInfor?userId="+userId+"&name=" + name+"&phone=" + phone);
  }
  create(data) {
    console.log(data);
    return http.post("/user", data);
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
