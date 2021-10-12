import React from "react";
import Style from "./App.module.css";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/layout/Home";
import Login from "./components/layout/Login";
import Register from "./components/layout/Register";
export default function App() {
  return (
    <div className={`${Style.container}`}>
      <HashRouter>
        <Header></Header>
        <Route exact path={["/", "/japstore"]} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}
