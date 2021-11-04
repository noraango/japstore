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
  return (
 
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <span>Giỏ hàng</span>
      </div>
      <div className={`${styles.content}`}>
        <button className={`${styles.btnAdd}`} onClick={onClickCreateEmployee}>
          Thêm nhân viên
        </button>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Mã</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
