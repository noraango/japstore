import React from 'react'
import { useState } from 'react';
import styles from './Order.module.css'
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faStoreAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { formatVND } from "../../../controller/constants";

const productDetail = (product) => {
  const pathz = process.env.PUBLIC_URL + "/images";
  const priceQuantity = parseInt(product.price) * parseInt(product.quanity)
  const nameProduct = (product) => {
    let name = product.name
    let nameSub = name.substr(0, 30)+'...'
    return name.length > 30 ? nameSub : name
  }
  const name= nameProduct(product);
  return (
    <Row>
      <Col>
        <div className={styles.cardInfo}>
          <div className={styles.img}>
            <img src={pathz + product.displayImageName} />
          </div>
          <Col>
            <p>{name}</p>
            <small>X {product.quanity}</small>
          </Col>
        </div>
      </Col>

      <Col>
      </Col>
      <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div className={styles.price}
          style={{ marginRight: '10%' }}
        >
          {formatVND(priceQuantity)}đ
        </div>
      </Col>
    </Row>
  )
}

const OrderDetail = (order) => {
  const totalPrice = (order) => {
    if (order.product.length > 0) {
      let totalPrice = 0;
      for (let p of order.product) {
        totalPrice += (p.price * p.quanity);
      }
      return totalPrice + order.ship;
    }
    else {
      return 0
    }
  }
  return (
    <div className={styles.container}>
      <Container className={styles.card}>
        <Row className={styles.row} >
          <Col xs sm md lg='6'>
            <Row>
              <Col className={styles.col}>
                <button className={styles.button} style={{ color: 'black', backgroundColor: '#ffffff', textDecoration: 'none', marginLeft: '20px' }}>
                  <FontAwesomeIcon className={styles.icon} style={{ color: 'black' }} icon={faUser} />
                  {order.shopName}
                </button>
              </Col>
              <Col className={styles.col}>
                {/* <button className={styles.button} style={{ backgroundColor: 'crimson', color: 'white', marginLeft: '20px' }}>
                  <FontAwesomeIcon className={styles.icon} icon={faCommentAlt} />
                  Chat
                </button> */}
              </Col>
              <Col className={styles.col}>
                {/* <button className={styles.button} style={{ color: 'black', backgroundColor: '#ffffff', marginLeft: '20px' }}>
                  <FontAwesomeIcon className={styles.icon} style={{ color: 'black' }} icon={faStoreAlt} />
                  Xem shop
                </button> */}
              </Col>
            </Row>
          </Col>

          <Col xs sm md lg='6'>
            <Row>
              <Col></Col>
              <Col xs sm md lg='6' className={styles.col} style={{ justifyContent: 'end' }}>
                <span className={styles.sts} style={{ color: 'royalblue' }}>
                  {order.status}
                </span>
              </Col>

              <Col className={styles.col} style={{ borderLeft: '3px solid red' }}>
                <span className={styles.sts} style={{ color: 'crimson', textTransform: 'uppercase' }}>
                  {order.status}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        {
          order.product.map((p, key) => {
            return productDetail(p)
          })
        }

        <Row style={{ borderTop: '2px solid red' }}>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: '0 50px' }}>Tổng số tiền</small>
              <h5 style={{ color: 'crimson' }}>
                {formatVND(totalPrice(order))}đ
              </h5>
            </span>
          </Col>
        </Row>

        {/* <Row className={styles.row1}>
          <Col xs sm md lg='6'></Col>
          <Col xs sm md lg='6'>
            <div>
              <Row>
                <Col className={styles.col}>
                  <button className={styles.button}
                    style={{ backgroundColor: 'crimson', color: 'white', marginRight: '20px' }}>
                    Mua lại
                  </button>
                </Col>
                <Col className={styles.col}>
                  <button className={styles.button}
                    style={{ backgroundColor: '#b8894e', color: 'white', marginRight: '20px' }}>
                    Liên hệ người bán
                  </button>
                </Col>
                <Col className={styles.col}>
                  <button className={styles.button}
                    style={{ backgroundColor: '#b8894e', color: 'white', marginRight: '20px' }}>
                    Xem đánh giá người mua
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div >
  )
}

const Order = () => {
  const [key, setKey] = useState(1);
  const ordersRaw = [
    {
      id: 1,
      shopName: 'Astusy',
      product: [
        {
          id: 1,
          name: 'Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfofffff',
          quanity: 2,
          price: 50000,
          displayImageName: 'fsfdsf.jpg'
        },
        {
          id: 2,
          name: 'Qfsdggggfdghjghkh',
          quanity: 4,
          price: 50000,
          displayImageName: 'fsfdsf.jpg'
        }
      ],
      ship: 15000,
      status: 'Đã giao',
    },
    {
      id: 2,
      shopName: 'fdfdfg',
      product: [
        {
          id: 1,
          name: 'Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfoffffffff',
          quanity: 2,
          price: 50000,
          displayImageName: 'fsfdsf.jpg'
        },
        {
          id: 2,
          name: 'Qfsdggggfdghjghkh',
          quanity: 4,
          price: 50000,
          displayImageName: 'fsfdsf.jpg'
        }
      ],
      ship: 15000,
      status: 'Đã giao',

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
        <p style={{ color: 'black' }}>
          {
            ordersRaw.map((o, key) => {
              return OrderDetail(o)
            })

          }
        </p>

      </Tab>
    )

  return (
    <div>
      <Tabs justify
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={styles.tab}
      >
        {displayTabTitle(tabTitle)}
      </Tabs>

    </div>

  )
}

export default Order
