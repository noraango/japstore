import http from "../http-common";
import { products } from "../controller/data";
class ProductService {
  getAll() {
    return products;
    // return http.get("/product");
  }

  get(id) {
    return products.find((x) => x.id === id);
    // return http.get(`/product/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/product", data);
  }

  update(id, data) {
    return http.put(`/product/${id}`, data);
  }

  delete(id) {
    return http.delete(`/product/${id}`);
  }
}
export default new ProductService();
