import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import storageService from "../../../services/storageService";
export default function List(props) {
  const [storages, setstorages] = useState([]);



  useEffect(() => {
    setstorages(storageService.getAll());
    console.log(storages);
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
              <th>Địa chỉ</th>
              <th>Xã</th>
              <th>Huyện</th>
              <th>Tỉnh</th>
              <th></th>
            </tr>
            {storages.map((storage) => (
              <tr >
               
                <td>{storage.name}</td>
                <td>{storage.address}</td>
                <td>{storage.ward}</td>
                <td>{storage.distric}</td>
                <td>{storage.province}</td>
                <td>
                  <div>
                    <button
                      onClick={() => onClickReadlEmployee(storages.userid)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      onClick={() => onClickEditEmployee(storages.userid)}
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
