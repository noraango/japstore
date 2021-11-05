import React, { useEffect, useState } from "react";
import cartService from "../../../services/cartService";
export default function Cart() {

  let user = JSON.parse(localStorage.getItem("user"));
  const [cartitems, setCartitems] = useState([]);
  function retrieveCartItems() {
    cartService
      .getCart(user.UserId)
      .then((res) => {
        setCartitems(res.data)
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveCartItems();

  }, []);
  return <div></div>;
}
