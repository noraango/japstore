import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import styles from "../store/List.module.css";
import storeService from "../../../services/storeService";
import { Container, Row, Col, Modal, Pagination } from "react-bootstrap";

import { toast } from "react-toastify";
import loading from "../../../services/loading.Service";
export default function OrderDetail({ order }) {
  const [open, setOpen] = useState(false);

  const [listItem, setListItem] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cancel, setCancel] = useState(false);
  const [reason, setReason] = useState();
  useEffect(() => {
    storeService
      .getOrderDetail(order.id)
      .then((res) => {
        setListItem(res.data.list);
        setBuyer(res.data.buyer);
        setCity(res.data.city);
        setDistrict(res.data.district);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  function handleCancle(idOrder) {
    if (window.confirm("Xác nhận hủy đơn hàng?")) {
      if (reason === "" || reason === undefined) {
        toast.warning("Vui lòng điền lý do hủy đơn", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        loading.showLoading();
        storeService
          .Cancel(idOrder, reason)
          .then((data) => {
            if (data.data === 1) {
              toast.success("Hủy đơn hàng thành công", {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              loading.HideLoading();
              setCancel(false);
             order.orderStatusId = 8;
            } else {
              toast.success("Hủy đơn hàng thành công", {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              loading.HideLoading();
            }
          })
          .catch((err) => {
            console.error("Fetching list orders shipping error: " + err);
            loading.HideLoading();
          });
      }
    }
  }
  function handleOk(idOrder) {
    if (window.confirm("Xác nhận giao đơn hàng?")) {
      loading.showLoading();
      storeService
        .checkOrder(idOrder)
        .then((data) => {
          loading.HideLoading();
          if (data.data.data === 1) {
            toast.success("Xác nhận đơn hàng thành công", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            order.orderStatusId = 2;
          } else {
            loading.HideLoading();
            toast.error("Xác nhận đơn hàng thất bại", {
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
          console.error("Fetching list orders shipping error: " + err);
        });
    }
  }
  function renderSwitch(param) {
    switch (param) {
      case 1:
        return "Đang chờ xác nhận";
      case 6:
        return "Đang chờ shipper nhận đơn";
      case 3:
        return "Đang giao hàng";
      case 4:
        return "Giao hàng thành công";
      case 5:
        return "Đã hủy bỏ";
      default:
        return "Đã Hủy";
    }
  }

  return (
    <>
      <Modal
        show={cancel}
        onHide={() => setCancel(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hủy Giao Đơn Hàng : JapStore - {order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Lý Do Hủy Đơn Hàng:</label>
            <textarea
              className="form-control"
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
              padding: "8px 10px",
              fontSize: "24px",
              border: "none",
              borderRadius: "10px",
            }}
            onClick={() => handleCancle(order.id)}
          >
            Hủy Đơn Hàng
          </button>
        </Modal.Footer>
      </Modal>
      <tr
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={styles.grey}
        style={{ height: "54px", borderBottom: "1px solid" }}
      >
        <td>{order.id}</td>
        <td>
          {buyer.lastName + " " + buyer.middleName + " " + buyer.firstName}
        </td>
        <td>{order.price}</td>
        <td>{order.address}</td>
        <td>{district}</td>
        <td>{city}</td>
        <td>{renderSwitch(order.orderStatusId)}</td>
      </tr>
      {listItem.map((item, index) => (
        <Collapse in={open} key={item.id}>
          <tr>
            <td></td>
            <td>{item.name}</td>
            <td>số lượng: {item.quantity}</td>
            <td>Mã sản phẩm: {item.code}</td>
            <td>Thành Tiền: {item.price * item.quantity}</td>
            <td></td>
          </tr>
        </Collapse>
      ))}

      <Collapse in={open}>
        <tr>
          <td className="button" colSpan="3"></td>
          <td className="button" colSpan="4">
            <div>
              {order.orderStatusId == 1 ? (
                <Button onClick={() => handleOk(order.id)}>
                  Chấp nhận đơn
                </Button>
              ) : (
                ""
              )}
              {order.orderStatusId !== 1 ? (
                ""
              ) : (
                <Button onClick={() => setCancel(true)}>Hủy bỏ đơn hàng</Button>
              )}
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
