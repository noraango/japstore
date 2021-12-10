import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../layout/Order/Order.module.css";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";
import { formatVND } from "../../../../controller/constants";
import ReactPaginate from "react-paginate";
const OrderDetail = (props) => {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  function renderSwitch(param) {
    switch(param) {
      case 3:
        return 'Đang giao hàng';
        case 4:
        return 'Giao hàng thành công';
        case 5:
        return 'Đã hủy bỏ';
      default:
        return 'Chưa Rõ';
    }
  }
  return (
    <div className={styles.container} style={{ margin: "0" }}>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mã Đơn Hàng : JapStore - {props.data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Tên Khách Hàng:{" "}
            {props.data.user.lastName +
              " " +
              props.data.user.middleName +
              " " +
              props.data.user.firstName}
          </p>
          <p>Số lượng sản phẩm: {props.data.order.quantity}</p>
          <p>
            san pham - so luong
            {/* {order.product.map((pro) => {
              return (
                <div>
                  <p>
                    {pro.name} - số lượng : {pro.quanity}
                  </p>
                </div>
              );
            })} */}
          </p>
          <p>Giá Đơn Hàng: {props.data.order.price}</p>
        </Modal.Body>
      </Modal>
      <Container className={styles.card}>
        <Row className={styles.row}>
          <Col xs sm md lg="6">
            <Row>
              <Col className={styles.col}>
                <button
                  className={styles.button}
                  style={{
                    color: "black",
                    backgroundColor: "#ffffff",
                    textDecoration: "none",
                    marginLeft: "20px",
                  }}
                  onClick={() => setShow(true)}
                >
                  Xem Chi tiết
                </button>
              </Col>
              <Col className={styles.col}></Col>
              <Col className={styles.col}></Col>
            </Row>
          </Col>

          <Col xs sm md lg="6">
            <Row>
              <Col></Col>
              <Col
                xs
                sm
                md
                lg="6"
                className={styles.col}
                style={{ justifyContent: "end" }}
              >
                <span className={styles.sts} style={{ color: "white" }}>
                  {"Mã Đơn Hàng: JapStore - " + props.data.order.id}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px solid red" }}>
          <Col>
            <p style={{ margin: "12px 30px" }}>
              Địa chỉ giao hàng: {props.data.order.address}
            </p>
            <p style={{ margin: "12px 30px" }}>
              Tên Khách Hàng: {props.data.user.lastName +
              " " +
              props.data.user.middleName +
              " " +
              props.data.user.firstName}
            </p>
          </Col>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Giá Trị Đơn Hàng</small>
              <h5 style={{ color: "crimson" }}>
                {formatVND(props.data.order.price)}
              </h5>
            </span>
            <p style={{ marginRight: "40px ", textAlign: "right" }}>
              Giao Hàng Trong giờ hành chính
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ margin: "12px 30px" }}>
              Ngày giao hàng: {props.data.order.earliestDeliveryDate}-
              {props.data.order.latestDeliveryDate}
            </p>
          </Col>
          <Col className={styles.vl}>
            <button
              className={styles.button}
              style={{
                width: "fit-content",
                color: "black",
                padding: "10px 20px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              {renderSwitch(props.data.order.orderStatusId)}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default function ShippingHistory() {
  const [key, setKey] = useState(1);
  const ordersRaw = [
    {
      id: 1,
      shopName: "Astusy",
      province: "Thành Phố Hà Nội",
      district: "Cầu Giấy",
      product: [
        {
          name: "Sữa bột",
          quanity: 2,
        },
        {
          name: "Bỉm",
          quanity: 4,
        },
      ],
      orderPrice: 15000,
      userName: "vịt con",
    },
    {
      id: 2,
      shopName: "Astusy",
      province: "Thành Phố Hà Nội",
      district: "Cầu Giấy",
      product: [
        {
          name: "Sữa bột",
          quanity: 2,
        },
        {
          name: "Bỉm",
          quanity: 4,
        },
      ],
      orderPrice: 15000,
      userName: "vịt con",
    },
  ];
  const [orders, setOrders] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if(user!==null){
    fetch(
      "https://localhost:6969/Order/GetHistory?userId=" +
        user.id +
        "&page=1&size=10"
    )
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => {setOrders(data.data)
        setTotalPage(data.totalPage)
        setTotalRows(data.totalRow)})
      .catch((err) => {
        console.error("Fetching list orders history error: " + err);
      });
    }
  }, []);
  const handlePageClick = (event) => {
    let index =  event.selected;
    fetch(
      "https://localhost:6969/Order/GetHistory?userId=" +
      user.id  +
        "&filterType=2&page="+(index+1)+"&size=10"
    )
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => {
        setOrders(data.data)
        setTotalPage(data.totalPage)
        setTotalRows(data.totalRow)
      })
      .catch((err) => {
        console.error("Fetching order error: " + err);
      });
  };
  return (
    <div>
      {orders.length > 0 ? (
        <div>
          {orders.map((o, key) => {
            // return (<div>{o.order.id}</div>)
            return <OrderDetail data={o} />;
          })}
          <nav
            aria-label="Page navigation example"
            className={styles.navigation}
          >
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={totalPage}
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
        </div>
      ) : (
        <div>Không có dữ liệu để hiển thị</div>
      )}
    </div>
  );
}
