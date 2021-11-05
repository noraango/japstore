import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { formatVND, numberOnly } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import imageService from "../../../services/imageService";
export default function Cart(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  const minQuantity = 1,
    maxQuantity = 99;
  const [cartitems, setCartitems] = useState([]);
  useEffect(() => {
    retrieveCartItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function onSubQuantity(cartItem) {
    let productId = cartItem.id;
    let quantity = cartItem.quantity;
    quantity = quantity > minQuantity ? quantity - 1 : quantity;
    updateQuantity(productId, quantity);
  }
  function onAddQuantity(cartItem) {
    let productId = cartItem.id;
    let quantity = cartItem.quantity;
    quantity = quantity < maxQuantity ? quantity + 1 : quantity;
    updateQuantity(productId, quantity);
  }
  function retrieveCartItems() {
    cartService
      .getCart(user.UserId)
      .then((res) => {
        setCartitems(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function updateQuantity(productId, quantity) {
    console.log(productId);
    cartService
      .updateCartItem(productId, user.UserId, quantity)
      .then((res) => {
        retrieveCartItems();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <span>Giỏ hàng</span>
      </div>
      <div className={`${styles.content}`}>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Tên sản phẩm</th>
              <th>Giá bán lẻ</th>
              <th>Số lượng </th>
              <th>Tổng tiền</th>
              <th>Xóa</th>
            </tr>
            {cartitems.map((cartitem, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.imgContainer}>
                    <img
                      src={imageService.get(cartitem.displayImageName)}
                      alt="Hình ảnh"
                    />
                  </div>
                </td>
                <td>{cartitem.name}</td>
                <td>{formatVND(cartitem.price)}đ</td>
                <td>
                  <div className={styles.quantityContainer}>
                    <button
                      className={styles.btnSub}
                      onClick={() => onSubQuantity(cartitem)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      value={cartitem.quantity}
                      onKeyPress={numberOnly}
                      onChange={updateQuantity}
                    />
                    <button
                      className={styles.btnAdd}
                      onClick={() => onAddQuantity(cartitem)}
                    >
                      <input type="hidden" value={cartitem.quantity} />
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </td>
                <td>{formatVND(cartitem.quantity * cartitem.price)}đ</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={`${styles.btnAdd}`}>Thanh toán</button>
      </div>
    </div>
  );
}
