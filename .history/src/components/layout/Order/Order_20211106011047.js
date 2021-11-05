import React, { useEffect } from 'react';
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
                  <th>#</th>
                <th>WeekendDelivery</th>
                <th>earliestDeliveryDate</th>
                <th>latestDeliveryDate</th>
                <th>address</th>
                <th>Ward</th>
                <th>District</th>
                <th>Province</th>
                <th>OrderStatusId</th>
                <th>ShipperId</th>
                <th>status</th>
              </tr>
              {cartitems.map((cartitem) => (
                <tr >
                  <td>{cartitem.name}</td>
                  <td>{formatVND(cartitem.price)}đ</td>
                  <td>{cartitem.quantity}</td>
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
          <button className={`${styles.btnAdd}`}  >
            Thanh toán
          </button>
        </div>
      </div>
    );
}
