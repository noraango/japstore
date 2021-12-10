import http from "../http-common";
import {storages} from "../controller/data";
class StoreService {
  getAll() {
    return storages;
    // return http.get("/product");
  }

  getStore(userId) {
    return http.get("/store/get/");
    // return http.get(`/product/${id}`);
  }

  getOrder(userId) {
    return http.get("/order/getStoreOrder?userId="+userId);
  }
}
export default new StoreService();
