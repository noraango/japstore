import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
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
              <th></th>
            </tr>
            
              <tr >
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                
              </tr>
          </tbody>
        </table>
        <button className={`${styles.btnAdd}`} >
          Thêm nhân viên
        </button>
      </div>
    </div>
  );
}
