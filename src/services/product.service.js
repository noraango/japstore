import http from "../http-common";
import { products } from "../controller/data";
class ProductService {
  getAll() {
    return products;
    // return http.get("/product");
  }

  getSome(quantity) {
    return products.slice(0, quantity);
  }

  get(id) {
    return products.find((x) => x.id === id);
    // return http.get(`/product/${id}`);
  }

  searchByName(name) {
    if (!name) {
      return [];
    }
    let result = products.filter((x) =>
      x.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    return result;
  }

  create(data) {
    return http.post("/product", data);
  }

  update(data) {
    return "OK";
    //return http.put(`/product/${id}`, data);
  }

  delete(id) {
    return http.delete(`/product/${id}`);
  }
}
export default new ProductService();
