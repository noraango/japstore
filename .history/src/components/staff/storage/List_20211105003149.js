import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import storeService from "../../../services/storeService";
export default function List(props) {
  const [stores, setStores] = useState([]);



  useEffect(() => {
    setStores(storeService.getAll());
    console.log(stores);
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
          
              <th>Tên kho</th>
              <th>Địa chỉ</th>
              <th>Xã</th>
              <th>Huyện</th>
              <th>Tỉnh</th>
              <th></th>
            </tr>
            {stores.map((storage) => (
              <tr >
               
                <td>{storage.name}</td>
                <td>{storage.address}</td>
                <td>{storage.ward}</td>
                <td>{storage.distric}</td>
                <td>{storage.province}</td>
                <td>
                  <div>
                    <button
                      onClick={() => onClickReadlEmployee(stores.userid)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      onClick={() => onClickEditEmployee(stores.userid)}
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
