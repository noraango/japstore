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
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
import loading from "../../../services/loading.Service";

export default function ProductCard(props) {
  const minQuantity = 1,
    maxQuantity = 99;
  const history = useHistory();
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
    loading.showLoading();
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      cartService
        .addCart(props.data.id, user.id, quantity)
        .then((res) => {
           toast.success('Thêm sản phẩm '+props.data.name+" vào giỏ hàng thành công", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          loading.HideLoading();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log(props.data);
      var item = {
        id: props.data.id,
        name: props.data.name,
        displayImageName: props.data.displayImageName,
        quantity: quantity,
        price: props.data.price,
      };
      cartService.addItemToLocalCart(item);
      loading.HideLoading();
    }
  }
  function redirectProduct() {
    history.push("/product/" + props.data.id);
  }
  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer} onClick={redirectProduct}>
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
