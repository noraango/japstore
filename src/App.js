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
import Category from "./components/layout/Category/Category";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/layout/User/User";

import GetOrder from "./components/staff/Shipper/GetOrder/GetOrder";
import Shipping from "./components/staff/Shipper/ShipOrder/Ship";
import ShipHistory from "./components/staff/Shipper/ViewHistory/ShippingHistory";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div>
      <div id="loading"></div>
      <div className={`${styles.container}`}>
        <BrowserRouter>
          <Header></Header>
          <div className={styles.layout}>
            <Route exact path={["/", "/japstore"]} component={Home} />
            <Route exact path="/search" component={Search} />
            <Route path="/search/:search" component={Search} />
            <Route path="/category/:search" component={Category} />
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
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}
