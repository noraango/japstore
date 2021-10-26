import React from "react";
import Style from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
import styles from "./App.module.css";
import Staff from "./components/layout/Staff";
export default function App() {
  return (
    <div className={`${Style.container}`}>
      <BrowserRouter>
        <Header></Header>
        <div className={styles.layout}>
          <Route exact path={["/", "/japstore"]} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/staff" component={Staff} />
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
