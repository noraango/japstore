import React, { useState } from "react";
import { Route } from "react-router-dom";
import styles from "./Staff.module.css";
import Product from "../staff/Product";
import { useHistory } from "react-router-dom";
import Store from "../staff/Store";
import Order from "../staff/Order/Order";
export default function Staff(prop) {
  var pathz = process.env.PUBLIC_URL + "/images";
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  const [tab, setTab] = useState(prop.location.pathname);
  if (user === null) {
    history.push("/");
    return <div></div>;
  } else if (user.role !== "Admin") {
    history.push("/");
    return <div></div>;
  }
  return (
    <div className={`container`}>
      <div className={`${styles.container}`}>
        <div className={`row`}>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-3 col-xl-2`}>
            <div className={`${styles.menu}`}>
              <div className={`${styles.userBox}`}>
                <div className={`${styles.avatar}`}>
                  <img src={`${pathz}/user-icon.png`} alt="user" />
                </div>
                <h1>
                  @{user.fullName}({user.role})
                </h1>
              </div>
              <button
                className={` ${
                  tab.indexOf("/staff/product") !== -1
                    ? styles.buttonChosen
                    : ""
                }`}
                onClick={(e) => {
                  setTab("/staff/product");
                  history.push(prop.match.path + "/product");
                }}
              >
                Quản lí sản phẩm
              </button>
              <button
                className={`${
                  tab.indexOf("/staff/storage") !== -1
                    ? styles.buttonChosen
                    : ""
                }`}
                onClick={(e) => {
                  setTab("/staff/storage");
                  history.push(prop.match.path + "/storage");
                }}
              >
                Quản lí kho
              </button>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-9 col-xl-10`}>
            <div className={`${styles.content}`}>
              <Route
                path={[`${prop.match.path}/product`, `${prop.match.path}/`]}
                component={Product}
              />
              <Route path={`${prop.match.path}/storage`} component={Store} />
              <Route path={`${prop.match.path}/order`} component={Order} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
