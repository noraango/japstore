import React from "react";
import { useState } from "react";
import styles from "../../../layout/Order/Order.module.css";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatVND } from "../../../../controller/constants";
import ReactPaginate from "react-paginate";
const OrderDetail = (order) => {
  const [show, setShow] = useState(false);

  function getOrder() {
    if (window.confirm("Nhận đơn hàng?")) {
      //   fetch(
      //     "https://localhost:6969/User/ShipperResgister?CMTCode=" +
      //       CMTCode +
      //       "&UserId=" +
      //       UserId +
      //       "&provideId=" +
      //       provinceId +
      //       "&districtId=" +
      //       districtId,
      //     {
      //       method: "POST",
      //       body: JSON.stringify(request),
      //       headers: {
      //         "Content-Type": "application/json",
      //         Accept: "*/*",
      //       },
      //     }
      //   )
      //     .then((res) => {
      //       if (res.ok) {
      //         return res.json();
      //       }
      //       throw res;
      //     })
      //     .then((data) => {
      //       console.log("Status:" + data.status);
      //       if (data.status == true) alert("Đăng ký thành công!");
      //       else alert("Đăng ký không thành công!");
      //     })
      //     .catch((err) => {
      //       console.error("Fetching error amount of dopes:" + err);
      //     });
      alert("Nhận đơn thành công");
    }

    // res= res.json();
    // if(res.status==='true'){
    //   alert('Gửi đăng ký thành công')
    // }
    // else {
    //   alert('Gửi đăng ký thất bại')
    // }
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
            Mã Đơn Hàng : JapStore - {order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tên Khách Hàng: {order.userName}</p>
          <p>Số lượng sản phẩm: {order.product.length}</p>
          <p>
            {order.product.map((pro) => {
              return (
                <div>
                  <p>
                    {pro.name} - số lượng : {pro.quanity}
                  </p>
                </div>
              );
            })}
          </p>
          <p>Giá Đơn Hàng: {order.orderPrice}</p>
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
                  {"Mã Đơn Hàng: JapStore - " + order.id}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ borderTop: "2px solid red" }}>
          <Col>
            <p style={{ margin: "12px 30px" }}>
              Địa chỉ giao hàng: {order.district} - {order.province}
            </p>
            <p style={{ margin: "12px 30px" }}>
              Tên Khách Hàng: {order.userName}
            </p>
          </Col>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Giá Trị Đơn Hàng</small>
              <h5 style={{ color: "crimson" }}>
                {formatVND(order.orderPrice)}
              </h5>
            </span>
            <p style={{ marginRight: "40px ", textAlign: "right" }}>
              Giao Hàng Trong giờ hành chính
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default function GetOrder() {
  const [key, setKey] = useState(1);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
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
  const [orders, setOrders] = useState([ordersRaw]);
  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
  };
  return (
    <div>
      <div className={styles.container} style={{ margin: "0" }}>
        <div className="form-group container">
          <select className="form-control" id="role" style={{ width: "80%" }}>
            <option>Đơn hàng trong khu vực</option>
            <option>Đơn hàng trong thành phố</option>
          </select>
        </div>
      </div>

      {ordersRaw.map((o, key) => {
        return OrderDetail(o);
      })}
      <nav aria-label="Page navigation example">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={4}
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
  );
}
