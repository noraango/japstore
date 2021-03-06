import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Order.module.css";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import orderService from "../../../services/orderService";
import { formatVND } from "../../../controller/constants";
import { useHistory } from "react-router";
import imageService from "../../../services/imageService";
import ReactPaginate from "react-paginate";

const ProductDetail = ({ product }) => {
  const pathz = process.env.PUBLIC_URL + "/images";
  const priceQuantity = product.price * product.quantity;
  const nameProduct = (product) => {
    let name = product.name;
    let nameSub = name.substr(0, 30) + "...";
    return name.length > 30 ? nameSub : name;
  };
  const name = nameProduct(product);
  return (
    <>
      <Row>
        <Col>
          <div className={styles.cardInfo}>
            <Col>
              <div className={styles.imgContainer}>
                <img src={imageService.get(product.displayImageName)} />
              </div>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <p>{name}</p>
            </Col>
            <Col
              className={styles.col}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <p>X {product.quantity}</p>
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
      <Row>
        <span className={styles.vl}>
          <small style={{ margin: "0 50px" }}>Tiền ship đơn hàng</small>
          <h5 style={{ color: "crimson", marginRight: '2em' }}>{formatVND('15000')}đ</h5>
        </span>
      </Row>
    </>
  );
};

const OrderDetail = ({ order }) => {
  const [orderId, setOrderId] = useState(order.id);
  const [orderD, setOrderD] = useState([]);
  //get data
  function fetchOrderItems(orderId) {
    orderService
      .getOrderItems(orderId)
      .then((res) => {
        setOrderD(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    fetchOrderItems(orderId);
    setOrderId(order.id);
  }, [orderId, orderD]);

  // sum total price
  const totalPrice = (orderD) => {
    if (orderD.length > 0) {
      let totalPrice = 0;
      for (let p of orderD) {
        totalPrice += p.price * p.quantity; //p.quantity đang ko hiển thị
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
                style={{ borderLeft: "3px solid red" }}
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
          return <ProductDetail product={p} key={p.id} />;
        })}

        <Row style={{ borderTop: "2px solid red" }}>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Tổng số tiền đơn hàng</small>
              <h5 style={{ color: "crimson" }}>{formatVND(order.price)}đ</h5>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Order = () => {
  const [key, setKey] = useState(0);
  const [statusId, setStatusId] = useState(0);

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
  const DisplayTabTitle = ({ orders }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(orders.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(orders.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    //paginate
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % orders.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return (
      <>
        {currentItems &&
          currentItems.map((o) => <OrderDetail order={o} key={o.id} />)}
        <nav aria-label="Page navigation example" className={styles.navigation}>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </nav>
      </>
    );
  };
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

  useEffect(() => {
    if (user !== null) {
      fetchOrders(0);
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  if (user === null) {
    history.push("/");
    return <div></div>;
  }
  //filter click
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
        style={{
          color: "black",
        }}
      >
        {tabTitle.map((t) => (
          <Tab eventKey={t.key} title={t.name} key={t.key}>
            <DisplayTabTitle orders={orders} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;
