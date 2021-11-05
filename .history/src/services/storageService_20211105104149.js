import http from "../http-common";
import {storages} from "../controller/data";
class StorageService {
  getAll() {
    return storages;
    // return http.get("/product");
  }

  getStorage(userId) {
    return http.get("/storage/get/");
    // return http.get(`/product/${id}`);
  }
}
export default new StorageService();
