import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import cartService from "../../../services/cartService";
import authService from "../../../services/auth.Service";

import CartDetail from "./CartDetail";
function Cart(props) {
  let user = authService.getUser();
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    retrieveCartItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function retrieveCartItems() {
    if (user) {
      cartService
        .getListCart(user.id)
        .then((res) => {
          setCartitems(res.data.data);
          let cartAmount = localStorage.getItem('cartAmount');
          props.getCartAmount(cartAmount);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      let order = localStorage.getItem("order");
      if(order){
        setCartitems(JSON.parse(order));
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <span>Giỏ hàng</span>
      </div>
      {cartitems.length > 0 ? (
        cartitems.map((item, index) => {
          return <CartDetail cart={item} key={item.id} />;
        })
      ) : (
        <div className={styles.empty}>
          <p>Giỏ hàng trống</p>
        </div>
      )}
    </div>
  );
}

export default (Cart);
