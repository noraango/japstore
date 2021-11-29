import http from "../http-common";

class LocationService {
  getProvinces() {
    return http.get("/location/province");
  }
  getDistricts(provinceId) {
    return http.get("/location/district/" + provinceId);
  }
}
export default new LocationService();
