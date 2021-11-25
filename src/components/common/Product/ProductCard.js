import React, { useState } from "react";
import styles from "./Styles.module.css";
import { formatVND, numberOnly } from "../../../controller/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import imageService from "../../../services/imageService";
import cartService from "../../../services/cartService";
export default function ProductCard(props) {
  const minQuantity = 1,
    maxQuantity = 99;
  const [quantity, setQuantity] = useState(1);
  function onSubQuantity() {
    setQuantity(quantity > minQuantity ? quantity - 1 : quantity);
  }
  function onAddQuantity() {
    setQuantity(quantity < maxQuantity ? quantity + 1 : quantity);
  }
  function onChangeInputQuantity(e) {
    if (!e.target.value) {
      setQuantity(minQuantity);
      return;
    }
    let val = parseInt(e.target.value);
    val = val < minQuantity ? minQuantity : val;
    val = val > maxQuantity ? maxQuantity : val;
    setQuantity(val);
  }
  function onClickAddCart() {
    let user = JSON.parse(localStorage.getItem("user"));
    cartService
      .addCart(props.data.id, user.UserId, quantity)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function redirectProduct() {
    
  }
  return (
    <div className={styles.productCard} onClick={redirectProduct}>
      <div className={styles.imgContainer}>
        <img
          src={imageService.get(props.data.displayImageName)}
          alt="Hình ảnh"
        />
      </div>
      <h1>{props.data.name}</h1>
      <h2>{formatVND(props.data.price)}đ</h2>
      <div className={styles.hoverContainer}>
        <div className={styles.quantityContainer}>
          <button className={styles.btnSub} onClick={onSubQuantity}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            value={quantity}
            onKeyPress={numberOnly}
            onChange={onChangeInputQuantity}
          />
          <button className={styles.btnAdd} onClick={onAddQuantity}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className={styles.priceContainer}>
          <h1>
            Total:<span>{formatVND(props.data.price * quantity)}đ</span>
          </h1>
          <button onClick={onClickAddCart}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
}
