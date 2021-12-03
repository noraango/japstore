import http from "../http-common";
class AuthService {
  login(username, password) {
    return http.post(
      "Auth/login?username=" + username + "&password=" + password
    );
  }
  register(data) {}
  getUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user;
    } 
  }
}
export default new AuthService();
