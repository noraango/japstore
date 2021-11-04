import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { products } from "../../../controller/data";
import cartService from "../../../services/cartService";
export default function Cart() {

  let user = JSON.parse(localStorage.getItem("user"));
  const [cartitems, setCartitems] = useState([]);
  function retrieveCartItems() {
    cartService
      .getCart(user.Id)
      .then((res) => {
        setCartitems(res.data)
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {

    console.log(products);
  }, []);
  return <div></div>;
}
