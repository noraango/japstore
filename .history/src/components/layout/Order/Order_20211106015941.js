import React, { useEffect,useState } from 'react';
import orderService from '../../../services/orderService';
import { formatVND } from "../../../controller/constants";
import styles from "./Order.module.css";

export default function Order() {
    let user = JSON.parse(localStorage.getItem("user"));
    const [items, setItem] = useState([]);
    function retrieveOrderItems() {
        orderService
          .getOrder(user.UserId)
          .then((res) => {
            setItem(res.data)
            console.log(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    useEffect(() => {
       retrieveOrderItems();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={styles.container}>
        <div className={`${styles.header}`}>
          <span>Đơn hàng</span>
        </div>
        <div className={`${styles.content}`}>
          
          <table>
            <tbody>
              <tr>
                  
                  <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Phương thức đóng gói</th>
                <th>Status</th>
              </tr>

              {items.map((item,index) => (
                <tr key={index} >
                   
                  <td>{item.name}</td>
                  <td>{formatVND(item.price)}đ</td>
                  <td>{item.quantity}</td>
                  <td>{item.packingmethod}</td>
                  <td>{item.status} </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    );
}
