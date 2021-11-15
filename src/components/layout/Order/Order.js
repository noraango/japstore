import React from 'react'
import { useState } from 'react';
import styles from './Order.module.css'
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import { style } from 'dom-helpers';
const OrderDetail = (order) => {
  var pathz = process.env.PUBLIC_URL + "/images";
  console.log(order)
  const totalPrice = parseInt(order.price) * parseInt(order.quanity) + parseInt(order.ship)
  console.log(order.price)
  return (
    <div>
      <div className={styles.card}>
        <table className={styles.table}>
          <tr style={{backgroundColor:'#bc8c4e'}}>
            <td className={styles.td}>
              <a style={{ margin: '0 20px', }}><mark>{order.shopName}</mark></a>
              <button className={styles.button13} style={{ backgroundColor: 'crimson', color: 'white' }}>
                <FontAwesomeIcon className={styles.icon} icon={faCommentAlt} />
                Chat
              </button>
              <button className={styles.button13} >
                <FontAwesomeIcon className={styles.icon} style={{ color: 'black' }} icon={faStoreAlt} />
                Xem shop
              </button>
            </td>
            <td className={styles.td}>
              <p className={styles.vl}>
                <span className={styles.sts} style={{ color: 'royalblue' }}>{order.status}</span>
                <span className={styles.sts} style={{ color: 'crimson', textTransform: 'uppercase' }}>
                  {order.status}
                </span>
              </p>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td >
              <div className={`${styles.cardInfo}`}>
                <div className={`${styles.img}`}>
                  <img src={`${pathz}/user-icon.png`} />
                </div>
                <td>
                  <p>{order.productName}</p>
                  <small>X {order.quanity}</small>
                </td>
              </div>
            </td>
            <td>
              <div
                style={{display: 'flex',
                  justifyContent: 'start',
                  marginLeft:'725px'}} 
              >
                <sup>đ</sup>{order.price}
              </div>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <span className={styles.vl} style={{borderTop:'2px solid red'}}>
                <small style={{ margin: '0 50px' }}>Tổng số tiền</small>
                <h5 style={{ color: 'crimson' }}>
                  <sup>đ</sup> {totalPrice}
                </h5>
              </span>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <td>
                <button className={styles.button}
                  style={{ width: '200px', backgroundColor: 'crimson', color: 'white', fontFamily: '-moz-initial', fontWeight: 'bold' }}>
                  Mua lại
                </button>
              </td>
              <td>
                <button className={styles.button}
                  style={{ width: '200px', backgroundColor: 'transparent', color: 'gray', fontFamily: '-moz-initial', fontWeight: 'bold', border: '1px solid black' }}>
                  Liên hệ người bán
                </button>
              </td>
              <td>
                <button className={styles.button}
                  style={{ width: '200px', backgroundColor: 'transparent', color: 'gray', fontFamily: '-moz-initial', fontWeight: 'bold', border: '1px solid black' }}>
                  Xem đánh giá người mua
                </button>
              </td>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

const Order = () => {
  const [key, setKey] = useState(1);
  const ordersRaw = [
    {
      id: 1,
      shopName: 'Astusy',
      productName: 'Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfoi',
      quanity: 3,
      status: 'Đã giao',
      price: 20000,
      ship: 15000,
    },
    {
      id: 2,
      shopName: 'fdfdfg',
      productName: 'Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfoi',
      quanity: 2,
      status: 'Đã giao',
      price: 50000,
      ship: 15000,
    },
  ]
  const [orders, setOrders] = useState([ordersRaw]);
  const tabTitle = [
    {
      key: 1,
      name: 'Tất cả'
    },
    {
      key: 2,
      name: 'Chờ lấy hàng'
    },
    {
      key: 4,
      name: 'Đang giao'
    },
    {
      key: 5,
      name: 'Đã giao'
    },
    {
      key: 6,
      name: 'Đã hủy'
    }
  ];

  const displayTabTitle = (tabTitle) =>
    tabTitle.map((t) =>
      <Tab eventKey={t.key} title={t.name}>
        {
          ordersRaw.map((o,key)=>{
            return OrderDetail(o)
          })
        }
        
      </Tab>
    )

  return (
    <div className={`${styles.container}`}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3">
        {displayTabTitle(tabTitle)}
      </Tabs>

    </div>
  )
}

export default Order
