import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={`${styles.container} colLeft`}>
      <div className={styles.navList}>
        <a className={`${styles.navItem}`} href="customerService">
          CHĂM SÓC KHÁCH HÀNG
        </a>
      </div>
      <div className={`${styles.navList} colRight`}>
        <a className={`${styles.navItem}`} href="cart">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </a>
        <div className={`${styles.line}`}/>
        <a className={`${styles.navItem}`} href="login">
          ĐĂNG NHẬP
        </a>
        <div className={`${styles.line}`}/>
        <a className={`${styles.navItem}`} href="register">
          ĐĂNG KÝ
        </a>
      </div>
    </div>
  );
};

export default Header;
