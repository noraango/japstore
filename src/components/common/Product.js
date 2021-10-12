import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Styles from "./Product.module.css";
export default function Product(product) {
  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.top}`}>
        <img src={product.values.displayImage} alt="Hình ảnh" />
        <h1>{product.values.productName}</h1>
        <h2>{product.values.price}đ</h2>
      </div>
      <button className={`${Styles.buttonCart}`}>
        <FontAwesomeIcon
          className={`${Styles.iconCart}`}
          icon={faShoppingCart}
        />
      </button>
    </div>
  );
}
