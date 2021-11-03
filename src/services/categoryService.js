import http from "../http-common";
import { categories } from "../controller/data";
class CategoryService {
  getAll() {
    return http.get("/category/getlist");
  }

  getLevel(level) {
    return http.get("/category/level/" + level);
    // return http.get(`/product/${id}`);
  }

  getAllSubCategory(parentId) {
    return http.get("/category/subcategory/" + parentId);
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
