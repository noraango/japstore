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
                <th>EarliestDeliveryDate</th>
                <th>LatestDeliveryDate</th>
                <th>Address</th>
                <th>Ward</th>
                <th>District</th>
                <th>Province</th>
                <th>OrderStatusId</th>
                <th>ShipperId</th>
                <th>Status</th>
              </tr>

              {items.map((item,index) => (
                <tr key={index} >
                   
                  <td>{item.name}</td>
                  <td>{formatVND(item.price)}đ</td>
                  <td>{item.earliestDeliveryDate}</td>
                  <td>{item.latestDeliveryDate}</td>
                  <td>{item.address} </td>
                  <td>{item.ward} </td>
                  <td>{item.district} </td>
                  <td>{item.province} </td>
                  <td>{item.orderstatusId} </td>
                  <td>{item.shipperId} </td>
                  <td>{item.status} </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
      </div>
    );
}
