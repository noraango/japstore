import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../layout/Order/Order.module.css";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatVND } from "../../../../controller/constants";
import ReactPaginate from "react-paginate";
const OrderDetail = (props) => {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  //Cancle order
  const [reason, setReason] = useState();
  const cancleId = 5;

  const relist = () => {
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
        props.relist(data.data);
        props.totalPage(data.totalPage);
        props.totalRow(data.totalRow);
      })
      .catch((err) => {
        console.error("Fetching list orders history error: " + err);
      });
  };

  function finishOrder() {
    if (window.confirm("Xác nhận hoàn thành đơn hàng?")) {
      fetch(
        "https://localhost:6969/Order/UpdateOrder?orderId=" +
          props.data.order.id +
          "&status=4"
      )
        .then((res) => {
          if (res.ok) return res.json();
          throw res;
        })
        .then(() => {
          alert("Xác nhận thành công");
          relist();
        })
        .catch((err) => {
          console.error("Fetching list orders history error: " + err);
        });
    }
  }
  function handleCancle(idOrder) {
    if (window.confirm("Xác nhận hủy đơn hàng?")) {
      fetch(
        "https://localhost:6969/Order/CancelOrder?cancelType=" +
          cancleId +
          "&orderId=" +
          idOrder +
          "&reason=" +
          reason
      )
        .then((res) => {
          if (res.ok) return res.json();
          throw res;
        })
        .then((data) => {
          if (data === 1) {
            alert("Hủy nhận thành công");
            relist();
          } else alert("Không thể hủy đơn hàng");
        })
        .catch((err) => {
          console.error("Fetching list orders shipping error: " + err);
        });
    }
  }
  //fetch order detail
  const [orderD, setOrderD] = useState([]);
  const listDetailOrder = async (idOrder) => {
    setShow(true);
    fetch("https://localhost:6969/Order/ViewOrder?orderId=" + idOrder)
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((data) => setOrderD(data.listPro))
      .catch((err) => {
        console.error("Fetching order detail error: " + err);
      });
  };
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
            Hủy Giao Đơn Hàng : JapStore - {props.data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Lý Do Hủy Đơn Hàng:</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setReason(e.target.value)}
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
            onClick={() => handleCancle(props.data.order.id)}
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
            Mã Đơn Hàng : JapStore - {props.data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tên Khách Hàng: {props.data.order.userName}</p>
          <p>
            Số lượng sản phẩm:
            {orderD.length}
          </p>
          <div>
            {orderD.map((pro) => {
              return (
                <div>
                  <p>
                    {pro.name} - số lượng : {pro.quantity}
                  </p>
                </div>
              );
            })}
          </div>
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
                  onClick={() => listDetailOrder(props.data.order.id)}
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
              Tên Khách Hàng:{" "}
              {props.data.user.lastName +
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
            {props.data.order.weekendDelivery === true ? (
              <p style={{ marginRight: "40px ", textAlign: "right" }}>
                Giao Hàng Trong giờ hành chính
              </p>
            ) : (
              ""
            )}
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
    if (user !== null) {
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
    }
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
            return (
              <OrderDetail
                data={o}
                relist={setOrders}
                totalPage={setTotalPage}
                totalRow={setTotalRows}
              />
            );
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
