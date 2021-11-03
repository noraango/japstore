import React, { useState } from "react";
import { Route } from "react-router-dom";
import styles from "./Staff.module.css";
import Product from "../staff/Product";
import { useHistory } from "react-router-dom";
import Report from "../staff/Report";
import Employee from "../staff/Employee";
export default function Staff(prop) {
  var pathz = process.env.PUBLIC_URL + "/images";
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  const [tab, setTab] = useState(prop.location.pathname);
  if (user === null) {
    history.push("/");
    return <div></div>;
  } else if (user.RoleNames.indexOf("admin") === -1) {
    history.push("/");
    return <div></div>;
  }
  return (
    <div className={`container`}>
      <div className={`${styles.container}`}>
        <div className={`row`}>
          <div className={`col-0 col-sm-2 col-md-2 col-lg-2 col-xl-2`}>
            <div className={`${styles.menu}`}>
              <div className={`${styles.userBox}`}>
                <div className={`${styles.avatar}`}>
                  <img src={`${pathz}/user-icon.png`} alt="user" />
                </div>
                <h1>
                  @{user.Username}({user.RoleNames[0]})
                </h1>
              </div>
              <button
                className={`${
                  tab.indexOf("/staff/report") !== -1 ? styles.buttonChosen : ""
                }`}
                onClick={(e) => {
                  setTab("/staff/report");
                  history.push(prop.match.path + "/report");
                }}
              >
                Báo cáo doanh thu
              </button>
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
                  tab.indexOf("/staff/employee") !== -1
                    ? styles.buttonChosen
                    : ""
                }`}
                onClick={(e) => {
                  setTab("/staff/employee");
                  history.push(prop.match.path + "/employee");
                }}
              >
                Quản lí nhân viên
              </button>
            </div>
          </div>
          <div className={`col-0 col-sm-10 col-md-10 col-lg-10 col-xl-10`}>
            <div className={`${styles.content}`}>
              <Route path={`${prop.match.path}/report`} component={Report} />
              <Route path={`${prop.match.path}/product`} component={Product} />
              <Route
                path={`${prop.match.path}/employee`}
                component={Employee}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
