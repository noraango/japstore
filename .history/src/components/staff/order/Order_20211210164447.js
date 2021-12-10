import React, { useEffect, useState } from "react";
import styles from "../store/List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
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

  function onClickCreateEmployee() {
    props.history.push(props.match.path + "/create");
  }
  function onClickReadlEmployee(id) {
    props.history.push(props.match.path + "/detail/" + id);
  }
  function onClickEditEmployee(id) {
    props.history.push(props.match.path + "/edit/" + id);
  }
  function onClickDeleteEmployee() {
    props.history.push(props.match.path + "/delete");
  }

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
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
