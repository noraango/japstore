import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import storeService from "../../../services/storeService";
export default function List(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  const [dbitems, setDbitem] = useState([]);
  function retrieveStores() {
    storeService
      .getStore(user.UserId)
      .then((res) => {
        setDbitem(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    retrieveStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function onClickReadStore(id) {
    props.history.push(props.match.path + "/" + id);
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <h1>Danh sách kho</h1>
      </div>
      <div className={`${styles.content}`}>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Tên kho</th>
              <th>Diện Tích</th>
              <th>Tầng</th>
              <th>Địa chỉ</th>
            </tr>
            {dbitems.map((dbitem, index) => (
              <tr
                className={`${index % 2 === 1 ? styles.grey : ""}`}
                key={index}
              >
                <td>
                  <div>
                    <button onClick={() => onClickReadStore(dbitem.id)}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </div>
                </td>
                <td>{dbitem.name}</td>
                <td>{dbitem.square}</td>
                <td>{dbitem.floor}</td>
                <td>{dbitem.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
