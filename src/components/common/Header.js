import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={`${styles.container} colLeft`}>
      <div className={styles.navList}>
        <Link className={`${styles.navItem} colLeft`} to="/cart">
          CHĂM SÓC KHÁCH HÀNG
        </Link>
      </div>
      <div className={`${styles.navList} colRight`}>
        <Link className={`${styles.navItem}`} to="/cart">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </Link>
        <div className={`${styles.line}`} />
        <Link className={`${styles.navItem}`} to="/login">
          ĐĂNG NHẬP
        </Link>
        <div className={`${styles.line}`} />
        <Link className={`${styles.navItem}`} to="/register">
          ĐĂNG KÝ
        </Link>
      </div>
    </div>
  );
};

export default Header;
