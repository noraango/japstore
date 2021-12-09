import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import styles from "./App.module.css";
import Staff from "./components/layout/Staff";
import Search from "./components/layout/Search";
import Cart from "./components/layout/Cart/Cart";
import Order from "./components/layout/Order/Order";
import Detail from "./components/common/Product/Detail";
import Payment from "./components/common/Payment/Payment";
import UserRole from "./components/staff/UserRole/UserRole";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/layout/User/User";

import GetOrder from "./components/staff/Shipper/GetOrder/GetOrder";
import Shipping from "./components/staff/Shipper/ShipOrder/Ship";
import ShipHistory from "./components/staff/Shipper/ViewHistory/ShippingHistory";
export default function App() {
  return (
    <div className={`${styles.container}`}>
      <div id="loadingPanel">
        <div class="background"></div>
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      </div>
      <BrowserRouter>
        <Header></Header>
        <div className={styles.layout}>
          <Route exact path={["/", "/japstore"]} component={Home} />
          <Route exact path="/search" component={Search} />
          <Route path="/search/:search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/staff" component={Staff} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/product/:id" component={Detail} />
          <Route path="/payment" component={Payment} />
          <Route path="/role" component={UserRole} />
          <Route path="/user" component={User} />
          <Route path="/getOrder" component={GetOrder} />
          <Route path="/Shipping" component={Shipping} />
          <Route path="/ShippingHistory" component={ShipHistory} />
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
