import React from "react";
import { useState, useEffect } from "react";
import styles from "../../../layout/Order/Order.module.css";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";
import { formatVND } from "../../../../controller/constants";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import orderService from "../../../../services/orderService";
import loading from "../../../../services/loading.Service";
import { toast } from "react-toastify";
const OrderDetail = (props) => {
  console.log(props.data);
  const [show, setShow] = useState(false);
  const relist = () => {
    loading.showLoading();
    orderService
      .getOrder(props.userId, 2, 1, 10)
      .then((data) => {
        props.relist(data.data.data);
        loading.HideLoading();
      })
      .catch((err) => {
        console.error("Fetching order error: " + err);
        loading.HideLoading();
      });
  };
  function getOrder() {
    if (window.confirm("Nhận đơn hàng?")) {
      loading.showLoading();
      orderService
        .ReceiveOrder(props.userId, props.data.order.id)
        .then((data) => {
          if (data.data === 1) {
            toast.success("Nhận đơn hàng thành công!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            relist();
            setShow(false);
            loading.HideLoading();
          } else {
            loading.HideLoading();
            toast.error("Nhận đơn hàng thất bại!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          loading.HideLoading();
          toast.error("Nhận đơn hàng thất bại!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.error("Post receive api wrong:" + err);
        });
    }
  }
  const [orderD, setOrderD] = useState([]);
  const listDetailOrder = async (idOrder) => {
    setShow(true);
    orderService
      .getListOrder(idOrder)
      .then((data) => setOrderD(data.data.listPro))
      .catch((err) => {
        console.error("Fetching order detail error: " + err);
      });
  };
  return (
    <div className={styles.container} style={{ margin: "20px 0 20px 0" }}>
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
              props.data.user.firstName}{" "}
          </p>
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
          <p>Giá Đơn Hàng: {formatVND(props.data.order.price)}đ</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => getOrder()}>Nhận Đơn Hàng</button>
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
                props.data.user.firstName}{" "}
            </p>
          </Col>
          <Col>
            <span className={styles.vl}>
              <small style={{ margin: "0 50px" }}>Giá Trị Đơn Hàng</small>
              <h5 style={{ color: "crimson" }}>
                {formatVND(props.data.order.price)}đ
              </h5>
            </span>
            <p style={{ marginRight: "40px ", textAlign: "right" }}>
              Giao hàng trong giờ hành chính
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
function GetOrder(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    props.history.push("/");
  } else if (user.role !== "Shipper") {
    props.history.push("/");
  }
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const [orders, setOrders] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  //local storage user
  const userStr = localStorage.getItem("user");
  const userObject = JSON.parse(userStr);

  useEffect(() => {
    if (userObject)
      if (userObject !== null) {
        loading.showLoading();
        orderService
          .getOrder(userObject.id, 2, 1, 10)
          .then((data) => {
            setOrders(data.data.data);
            setTotalPage(data.data.totalPage);
            setTotalRows(data.data.totalRow);
            loading.HideLoading();
          })
          .catch((err) => {
            console.error("Fetching order error: " + err);
            loading.HideLoading();
          });
      }
  }, []);
  const handlePageClick = (event) => {
    let index = event.selected;
    loading.showLoading();
    orderService
      .getOrder(userObject.id, 2, index + 1, 10)
      .then((data) => {
        console.log(data.data.data);
        setOrders(data.data.data);
        setTotalPage(data.data.totalPage);
        setTotalRows(data.data.totalRow);
        loading.HideLoading();
      })
      .catch((err) => {
        console.error("Fetching order error: " + err);
        loading.HideLoading();
      });
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

      {orders.length > 0 ? (
        <div>
          {orders.map((o, key) => {
            return (
              <OrderDetail data={o} userId={userObject.id} relist={setOrders} />
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
        <div className={styles.container}>Không có data để hiển thị</div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  };
};
export default connect(mapStateToProps, null)(GetOrder);
