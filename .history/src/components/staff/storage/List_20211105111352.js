import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import storageService from "../../../services/storageService";
export default function List(props) {

  let user = JSON.parse(localStorage.getItem("user"));
  const[dbitems, setDbitem] = useState([]);

  function retrieveStorageitems() {
    storageService
    .getStorage(user.UserId)
    .then((res) => {
      setDbitem(res.data)
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
   retrieveStorageitems();
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
        <h1>Danh sách kho</h1>
      </div>
      <div className={`${styles.content}`}>
        <button className={`${styles.btnAdd}`} onClick={onClickCreateEmployee}>
          Thêm kho
        </button>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Tên kho</th>
              <th>Diện Tích</th>
              <th>Tầng</th>
              <th>Địa chỉ</th>
              <th>Xã</th>
              <th>Huyện</th>
              <th>Tỉnh</th>
              <th></th>
            </tr>
            {dbitems.map((dbitem,index) => (
              <tr className={`${index % 2 === 1 ? styles.grey : ""}`}
               key={index}>
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
                    <button
                      onClick={() => onClickEditEmployee(dbitems.userid)}
                    >
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
