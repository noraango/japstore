import React, { useEffect,useState } from 'react';
import orderService from '../../../services/orderService';
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
    }, []);
    return (
        <div className={styles.container}>
        <div className={`${styles.header}`}>
          <span>Đơn hàng</span>
        </div>
        <div className={`${styles.content}`}>
          
          <table>
            <tbody>
              <tr>
                  
                  <th>UsedId</th>
                <th>WeekendDelivery</th>
                <th>EarliestDeliveryDate</th>
                <th>LatestDeliveryDate</th>
                <th>Address</th>
                <th>Ward</th>
                <th>District</th>
                <th>Province</th>
                <th>OrderStatusId</th>
                <th>ShipperId</th>
                <th>status</th>
              </tr>
              {items.map((item,index) => (
                <tr  >
                   
                  <td>{item.userId}</td>
                  <td>{item.weekendDelivery}</td>
                  <td>{item.earliestDeliveryDate}</td>
                  <td>{item.latestDeliveryDate}</td>
                  <td>{item.address} </td>
                  <td>{item.ward} </td>
                  <td>{item.district} </td>
                  <td>{item.province} </td>
                  <td>{item.OrderStatusId} </td>
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
