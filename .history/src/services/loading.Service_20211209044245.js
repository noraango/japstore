import http from "../http-common";
class LoadingService {
  showLoading() {
    document.getElementById("loadingPanel").innerHTML = 
        "<div class=\"background\"></div><div class=\"spinner\"> <div class=\"double-bounce1\"></div><div class=\"double-bounce2\"></div></div>"
    ;
    
  }
  HideLoading() {
      document.getElementById("loadingPanel").innerHTML = "";
  }

}
export default new LoadingService();
