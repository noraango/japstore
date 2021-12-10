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

  getOrder(userId,page,size) {
    return http.get("/order/getStoreOrder?userId="+userId+"&currentPage="+page+"&pageSize="+size);
  }

  getOrder(id) {
    return http.get("/order/getOrderDetail?orderId="+id);
  }
}
export default new StoreService();
