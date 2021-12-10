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

  getOrderDetail(id) {
    return http.get("/order/getOrderDetail?id="+id);
  }

  Cancel(idOrder,reason) {
    return http.get("Order/CancelOrder?cancelType=1&orderId="+idOrder+"&reason="+reason);
  }
  checkOrder(idOrder) {
    return http.get("Order/checkOrder?id="+idOrder);
  }
  
}
export default new StoreService();
