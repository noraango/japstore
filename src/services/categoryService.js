import http from "../http-common";
import { categories } from "../controller/data";
class CategoryService {
  getAll() {
    return categories;
    // return http.get("/product");
  }

  getLevel(level) {
    return categories.filter((x) => x.level === level);
    // return http.get(`/product/${id}`);
  }

  getAllSubCategory(parentId) {
    return categories.filter((x) => x.superCateId === parentId);
  }

  getId(id) {
    return categories.find((x) => x.id === id);
    // return http.get(`/product/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/product", data);
  }

  update(data) {
    return "OK";
    //return http.put(`/product/${id}`, data);
  }

  delete(id) {
    return "OK";
    // return http.delete(`/product/${id}`);
  }
}
export default new CategoryService();
