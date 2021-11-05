
import {storages} from "../controller/data";
class StorageService {
  getAll() {
    return storages;
    // return http.get("/product");
  }

  get(userid) {
    return storages.find((x) => x.userid === userid);
    // return http.get(`/product/${id}`);
  }
}
export default new StorageService();
