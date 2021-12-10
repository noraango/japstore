import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import styles from "../store/List.module.css";
import storeService from "../../../services/storeService";
export default function OrderDetail({ order }) {
  const [open, setOpen] = useState(false);
  const statusAccept = 1;
  const statusRefuse = -1;
  const [listItem, setListItem] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
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
  const relist = () => {};

  const handleAcceptRes = (requestId) => {};
  const handleRefuseRes = (requestId) => {};
  function renderSwitch(param) {
    switch (param) {
      case 1:
        return "Đang chờ xác nhận";
      case 2:
        return "Đang chờ shipper nhận đơn";
      case 3:
        return "Đang giao hàng";
      case 4:
        return "Giao hàng thành công";
      case 5:
        return "Đã hủy bỏ";
      default:
        return "Chưa Rõ";
    }
  }
  return (
    <>
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
        <Collapse in={open}>
          <tr>
            <td></td>
            <td>{item.name}</td>
            <td>số lượng: {item.quantity}</td>
            <td colSpan="2">Mã sản phẩm: {item.code}</td>
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
              <Button onClick={() => handleAcceptRes()}>Chấp nhận đơn</Button>
              <Button onClik={() => handleRefuseRes()}>Hủy bỏ đơn hàng</Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
