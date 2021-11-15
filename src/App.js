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
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className={`${styles.container}`}>
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
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
