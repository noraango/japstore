import http from "../http-common";
import { users } from "../controller/data";
class UserService {
  getAll() {
    return users;
    // return http.get("/product");
  }

  get(userid) {
    return users.find((x) => x.userid === userid);
    // return http.get(`/product/${id}`);
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
