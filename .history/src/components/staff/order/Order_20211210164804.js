import React, { useEffect, useState } from "react";
import styles from "../store/List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import OrderDetail from "./OrderDetail";
import storeService from "../../../services/storeService";
export default function List(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  const [dbitems, setDbitem] = useState([]);

  function retrieveStores() {
    storeService
      .getStore(user.UserId)
      .then((res) => {
        setDbitem(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <h1>Danh sách đơn hàng</h1>
      </div>
      <div className={`${styles.content}`}>

        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Khách hàng</th>
              <th>Giá tiền</th>
              <th>Địa chỉ</th>
              <th>Gửi trong tuần</th>
              <th></th>
            </tr>
            {dbitems.map((dbitem, index) => (
              <tr
                className={`${index % 2 === 1 ? styles.grey : ""}`}
                key={index}
              >
                <td>{index + 1}</td>
                <td>{dbitem.name}</td>
                <td>{dbitem.square}</td>
                <td>{dbitem.floor}</td>
                <td>{dbitem.address}</td>
                <td>{dbitem.ward}</td>
                <td>{dbitem.distric}</td>
                <td>{dbitem.province}</td>
                <td>
                  <div>
                    <button
                      onClick={() => onClickReadlEmployee(dbitems.userid)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button onClick={() => onClickEditEmployee(dbitems.userid)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={onClickDeleteEmployee}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
