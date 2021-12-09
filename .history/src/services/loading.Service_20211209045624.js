import http from "../http-common";
import React, { useState } from "react";
class LoadingService {
  showLoading() {
    document.getElementById("loading").innerHTML = "<div id=\"loadingPanel\"><div class=\"background\"></div><div class=\"spinner\"> <div class=\"double-bounce1\"></div><div class=\"double-bounce2\"></div></div></div>";
    
  }
  HideLoading() {
      document.getElementById("loadingPanel").innerHTML = "";
  }

}
export default new LoadingService();
