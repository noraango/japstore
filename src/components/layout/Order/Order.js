import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Order.module.css";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import orderService from "../../../services/orderService";
import {
  faCommentAlt,
  faStoreAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { formatVND } from "../../../controller/constants";
import { useHistory } from "react-router";
import { set } from "local-storage";
import imageService from "../../../services/imageService";

const ProductDetail = ({ product }) => {
  const pathz = process.env.PUBLIC_URL + "/images";
  const priceQuantity = parseInt(product.price) * 1; //parseInt(product.quanity) chua co
  const nameProduct = (product) => {
    let name = product.name;
    let nameSub = name.substr(0, 30) + "...";
    return name.length > 30 ? nameSub : name;
  };
  const name = nameProduct(product);
  return (
    <Row>
      <Col>
        <div className={styles.cardInfo}>
          <Col>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>{name}</h5>
            </div>
            <div className={styles.imgContainer}>
              <img src={imageService.get(product.displayImageName)} />
            </div>
          </Col>
          <Col
            className={styles.col}
            style={{
              justifyContent: "flex-start",
            }}
          >
            <small>X 1</small>
            {/* {product.quantity} */}
          </Col>
        </div>
      </Col>
      <Col></Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div className={styles.price} style={{ marginRight: "10%" }}>
          {formatVND(priceQuantity)}đ
        </div>
      </Col>
    </Row>
  );
};

const OrderDetail = ({ order }) => {
  const orderId = order.id;
  const [orderD, setOrderD] = useState([]);
  //get data
  function fetchOrderItems(orderId) {
    orderService
      .getOrderItems(orderId)
      .then((res) => {
        // console.log(res.data);
        setOrderD(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetchOrderItems(orderId);
  }, []);

  // sum total price
  const totalPrice = (orderD) => {
    if (orderD.length > 0) {
      let totalPrice = 0;
      for (let p of orderD) {
        totalPrice += p.price * 1; //p.quantity đang ko hiển thị
      }
      return totalPrice;
    } else {
      return 0;
    }
  };

  return (
    <div className={styles.container}>
      <Container className={styles.card}>
        <Row
          className={styles.row}
          style={{ height: "50px", justifyContent: "end" }}
        >
          <Col xs sm md lg="6">
            <Row>
              <Col
                xs
                sm
                md
                lg="6"
                className={styles.col}
                style={{ justifyContent: "end" }}
              >
                <span className={styles.sts} style={{ color: "#000" }}>
                  Mã đơn hàng: {order.id}
                </span>
              </Col>
              <Col
                className={styles.col}
                style={{borderLeft:'3px solid red'}}
              >
                <span
                  className={styles.sts}
                  style={{ 
                    color: "crimson", 
                    textTransform: "uppercase",
                    
                 }}
                >
                  {order.status}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        {orderD.map((p, key) => {
          return <ProductDetail product={p} />;
        })}

        <Row style={{ borderTop: "2px solid red" }}>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Tổng số tiền</small>
              <h5 style={{ color: "crimson" }}>
                {formatVND(totalPrice(orderD))}đ
              </h5>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Order = () => {
  const [key, setKey] = useState(0);
  const ordersRaw = [
    {
      id: 1,
      shopName: "Astusy",
      product: [
        {
          id: 1,
          name: "Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfofffff",
          quanity: 2,
          price: 50000,
          displayImageName: "fsfdsf.jpg",
        },
        {
          id: 2,
          name: "Qfsdggggfdghjghkh",
          quanity: 4,
          price: 50000,
          displayImageName: "fsfdsf.jpg",
        },
      ],
      ship: 15000,
      status: "Đã giao",
    },
    {
      id: 2,
      shopName: "fdfdfg",
      product: [
        {
          id: 1,
          name: "Qfsdggggfdghjghkhjasdahsbdjikhguiofydhsfiosdfoffffffff",
          quanity: 2,
          price: 50000,
          displayImageName: "fsfdsf.jpg",
        },
        {
          id: 2,
          name: "Qfsdggggfdghjghkh",
          quanity: 4,
          price: 50000,
          displayImageName: "fsfdsf.jpg",
        },
      ],
      ship: 15000,
      status: "Đã giao",
    },
  ];
  const [orders, setOrders] = useState([]);

  //display tab
  const tabTitle = [
    {
      key: 0,
      name: "Tất cả",
    },
    {
      key: 6,
      name: "Chờ lấy hàng",
    },
    {
      key: 3,
      name: "Đang giao",
    },
    {
      key: 4,
      name: "Đã giao",
    },
    {
      key: 5,
      name: "Đã hủy",
    },
  ];
  function displayTabTitle(tabTitle) {
    return tabTitle.map((t) => (
      <Tab eventKey={t.key} title={t.name}>
        {orders.map((o) => (
          <OrderDetail order={o} />
        ))}
      </Tab>
    ));
  }
  //get data order
  function fetchOrders(statzusId) {
    orderService
      .getOrders(user.id, statzusId)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const [statusId, setStatusId] = useState(0);
  useEffect(() => {
    fetchOrders(0);
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  if (user === null) {
    history.push("/");
    return <div></div>;
  }

  const hanldeListOrder = (key) => {
    setStatusId(key);
    console.log(key);
    fetchOrders(key);
    setKey(key);
  };
  return (
    <div>
      <Tabs
        justify
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => hanldeListOrder(k)}
        className={styles.tab}
      >
        {displayTabTitle(tabTitle)}
      </Tabs>
    </div>
  );
};

export default Order;
