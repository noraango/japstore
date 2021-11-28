import http from "../http-common";
class AuthService {
  login(username, password) {
    return http.post(
      "Auth/login?username=" + username + "&password=" + password
    );
  }
  register(data) {}
}
export default new AuthService();
