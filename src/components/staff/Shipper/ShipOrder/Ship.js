import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../layout/Order/Order.module.css";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatVND } from "../../../../controller/constants";
import ReactPaginate from "react-paginate";
const OrderDetail = ({ data }) => {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  function finishOrder(){
    if (window.confirm("Xac nhận hoàn thành đơn hàng?")) {
      fetch(
        "https://localhost:6969/Order/UpdateOrder?orderId=" +
          data.order.id +
          "&status=4"
      )
        .then((res) => {
          if (res.ok) return res.json();
          throw res;
        })
        .then((data) => {
          alert("Xác nhận thành công");
        })
        .catch((err) => {
          console.error("Fetching list orders history error: " + err);
        });
    }
    
  }
  function getOrder() {
    if (window.confirm("Xac nhận hủy đơn hàng?")) {
  
      alert("Nhận đơn thành công");
    }
  }
  return (
    <div className={styles.container} style={{ margin: "0" }}>
      <Modal
        show={cancel}
        onHide={() => setCancel(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hủy Giao Đơn Hàng : JapStore - {data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Lý Do Hủy Đơn Hàng:</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={styles.button}
            style={{
              width: "fit-content",
              color: "black",
              backgroundColor: "red",
              textDecoration: "none",
              marginLeft: "20px",
            }}
            onClick={getOrder}
          >
            Hủy Đơn Hàng
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mã Đơn Hàng : JapStore - {data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tên Khách Hàng: {data.order.userName}</p>
          <p>Số lượng sản phẩm: {}</p>
          <p>
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
          <p>Giá Đơn Hàng: {data.order.orderPrice}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={getOrder}>Nhận Đơn Hàng</button>
        </Modal.Footer>
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
                  {"Mã Đơn Hàng: JapStore - " + data.order.id}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px solid red" }}>
          <Col>
          <p style={{ margin: "12px 30px" }}>
              Địa chỉ giao hàng: {data.order.address}
            </p>
            <p style={{ margin: "12px 30px" }}>
              Tên Khách Hàng: {data.user.lastName +
              " " +
              data.user.middleName +
              " " +
              data.user.firstName}
            </p>
          </Col>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Giá Trị Đơn Hàng</small>
              <h5 style={{ color: "crimson" }}>
                {formatVND(data.order.orderPrice)}
              </h5>
            </span>
            {
              data.order.weekendDelivery === true ? (<p style={{ marginRight: "40px ", textAlign: "right" }}>
              Giao Hàng Trong giờ hành chính
            </p>):("")
            }
            
          </Col>
        </Row>
        <Row>
          <Col className={styles.vl}>
            <button
              className={styles.button}
              style={{
                width: "fit-content",
                color: "#ffffff",
                backgroundColor: "#bc8c4e",
                textDecoration: "none",
                marginLeft: "20px",
              }}
              onClick={() => finishOrder()}
            >
              Giao Hàng Thành Công
            </button>
            <button
              className={styles.button}
              style={{
                width: "fit-content",
                color: "#ffffff",
                backgroundColor: "red",
                textDecoration: "none",
                marginLeft: "20px",
              }}
              onClick={() => setCancel(true)}
            >
              Hủy Đơn Hàng
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default function Ship() {
  const [key, setKey] = useState(1);
  const [orders, setOrders] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(
      "https://localhost:6969/Order/GetShipping?userId=" +
        user.id +
        "&page=1&size=10"
    )
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => {
        setOrders(data.data);
        setTotalPage(data.totalPage);
        setTotalRows(data.totalRow);
      })
      .catch((err) => {
        console.error("Fetching list orders history error: " + err);
      });
  }, []);

  const handlePageClick = (event) => {
    let index = event.selected;
    fetch(
      "https://localhost:6969/Order/GetHistory?userId=" +
        user.id +
        "&filterType=2&page=" +
        (index + 1) +
        "&size=10"
    )
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => {
        setOrders(data.data);
        setTotalPage(data.totalPage);
        setTotalRows(data.totalRow);
      })
      .catch((err) => {
        console.error("Fetching order error: " + err);
      });
  };
  //local storage user

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
