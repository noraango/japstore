import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import styles from "../store/List.module.css";
import storeService from "../../../services/storeService";
export default function OrderDetail(props) {
  const [open, setOpen] = useState(false);
  const statusAccept = 1;
  const statusRefuse = -1;
  const [listItem, setListItem] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  useEffect(() => {
    storeService
      .getOrderDetail(props.id)
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
  const relist = () => {
    fetch("https://localhost:6969/User/RoleRequest?page=1&size=10")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        props.relist(data.data);
      })
      .catch((err) => {
        console.error("Fetching error user account list:" + err);
      });
  };

  const handleAcceptRes = (requestId) => {
    console.log("accept clicked");
    fetch(
      "https://localhost:6969/User/UpdateRequest?status=" +
        statusAccept +
        "&requestId=" +
        requestId
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        if (data.status === true) {
          alert("Chấp nhận yêu cầu thành công!");
          relist();
        }
      })
      .catch((err) => {
        console.log("Post accept requestion err: " + err);
      });
  };
  const handleRefuseRes = (requestId) => {
    console.log("refuse clicked");
    fetch(
      "https://localhost:6969/User/UpdateRequest?status=" +
        statusRefuse +
        "&requestId=" +
        requestId
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        if (data.status === true) {
          alert("Hủy yêu cầu thành công!");
          relist();
        }
      })
      .catch((err) => {
        console.log("Post refuse requestion err: " + err);
      });
  };
  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={styles.grey}
        style={{ height: "54px", borderBottom: "1px solid" }}
      >
        <td>1</td>
        <td>Ngô thế anh</td>
        <td>30000đ</td>
        <td>số 12, ngõ 23, đường Lê Đức Thắng</td>
        <td>Cầu giấy</td>
        <td>Hà nội</td>
        <td>Đang chờ</td>
      </tr>
      {listItem.map((item, index) => (
        <Collapse in={open}>
          <tr>
            <td></td>
            <td colSpan="2">{item.name}</td>
            <td>số lượng: {item.quantity}</td>
            <td colSpan="2">Mã sản phẩm: {item.code}</td>
            <td></td>
          </tr>
        </Collapse>
      ))}
      <Collapse in={open}>
        <tr>
          <td></td>
          <td colSpan="2">Củ khoai</td>
          <td>số lượng: 2</td>
          <td colSpan="2">thành tiền: 30000đ</td>
          <td></td>
        </tr>
      </Collapse>
      <Collapse in={open}>
        <tr>
          <td className="button" colSpan="3"></td>
          <td className="button" colSpan="4">
            <div>
              <Button onClick={() => handleAcceptRes(props.record.request.id)}>
                Chấp nhận đơn
              </Button>
              <Button onClik={() => handleRefuseRes(props.record.request.id)}>
                Hủy bỏ đơn hàng
              </Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
