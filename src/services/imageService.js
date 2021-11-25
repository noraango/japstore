import { url } from "../http-common";
class imageService {
  get(name) {
    return url + "/Images/" + name;
  }
}
export default new imageService();