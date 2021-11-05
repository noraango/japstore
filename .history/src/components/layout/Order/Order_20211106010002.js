import React from 'react';
import styles from "./Order.module.css";

export default function Order() {
   
 
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
                <th>Giá bán lẻ</th>
                <th>Số lượng </th>
                <th>Tổng tiền</th>
                <th>Xóa</th>
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
