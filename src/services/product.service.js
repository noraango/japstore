import http from "../http-common";
class ProductService {
  getStatus() {
    return http.get("/product/status");
  }
  getPacking() {
    return http.get("/product/packing");
  }
  getOrgin() {
    return http.get("/product/origin");
  }
  getStore() {
    return http.get("/store/get");
  }
  postComment(userId, productId, rating, comment) {
    return http.post(
      "/product/addComment?userId=" +
        userId +
        "&productId=" +
        productId +
        "&rating=" +
        rating +
        "&comment=" +
        comment
    );
  }
  create(data) {
    let formData = new FormData();
    formData.append("code", data.code);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("size", data.size);
    formData.append("weight", data.weight);
    formData.append("manufacturer", data.manufacturer);
    formData.append("shortDescription", data.shortDes);
    formData.append("description", data.des);
    formData.append("brand", data.brand);
    formData.append("originId", data.originId);
    formData.append("packingMethodId", data.packingMethodId);
    formData.append("productStatusId", data.statusId);
    formData.append("displayImage", data.displayImage);
    formData.append("shopId", data.shopId);
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images[]", data.images[i]);
    }
    return http.post("/product/create", formData);
  }
  getList(quantity) {
    return http.get("/product/getlist?quantity=" + quantity);
  }
  search(text, currentPage, pageSize) {
    return http.get(
      "/product/search?querySearch=" +
        text +
        "&CurrentPage=" +
        currentPage +
        "&PageSize=" +
        pageSize
    );
  }
  searchFilter(text, price, rate, currentPage, pageSize) {
    return http.get(
      "/product/searchFilter?querySearch=" +
        text +
        "&price=" +
        price +
        "&rate=" +
        rate +
        "&CurrentPage=" +
        currentPage +
        "&PageSize=" +
        pageSize
    );
  }
  CategoryFilter(category, price, rate, page, size) {
    return http.get(
      "/product/categoryFilter?categoryId=" +
        category +
        "&price=" +
        price +
        "&rate=" +
        rate +
        "&page=" +
        page +
        "&size=" +
        size
    );
  }
  shopProduct(userId, text, currentPage, pageSize) {
    return http.get(
      "/product/getShopProduct?userId=" +
        userId +
        "&querySearch=" +
        text +
        "&CurrentPage=" +
        currentPage +
        "&PageSize=" +
        pageSize
    );
  }
  getDetail(productId) {
    return http.get("/product/get/" + productId);
  }
  getDetailImages(productId) {
    return http.get("/product/getImages/" + productId);
  }
  getComment(productId, page, size) {
    return http.get(
      "/product/getComment/" + productId + "/" + page + "/" + size
    );
  }
  buyProduct(productId, quantity, userId) {
    return http.get(
      "/order/buynow?productId=" +
        productId +
        "&quantity=" +
        quantity +
        "&userId=" +
        userId
    );
  }
  Category(category, page, size) {
    return http.get(
      "/product/category?categoryId=" +
        category +
        "&page=" +
        page +
        "&size=" +
        size
    );
  }
}
export default new ProductService();
