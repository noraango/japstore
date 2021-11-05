import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { formatVND } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faTrash
} from "@fortawesome/free-solid-svg-icons";
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
  return (
 
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <span>Giỏ hàng</span>
      </div>
      <div className={`${styles.content}`}>
        
        <table>
          <tbody>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá bán lẻ</th>
              <th>Số lượng </th>
              <th>Tổng tiền</th>
              <th>Xóa</th>
            </tr>
            {cartitems.map((cartitem) => (
              <tr >
                <td>{cartitem.name}</td>
                <td>{formatVND(cartitem.price)}đ</td>
                <td>
                  {/* {cartitem.quantity} */}
                 
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
                  </td>
                <td>{formatVND((cartitem.quantity)*(cartitem.price))}đ</td>
                <td>
                <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <button className={`${styles.btnAdd}`} >
          Thanh toán
        </button>
      </div>
    </div>
  );
}
