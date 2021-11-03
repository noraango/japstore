import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import userService from "../../../services/user.service";
export default function List(props) {
  const [users, setusers] = useState([]);



  useEffect(() => {
    setusers(userService.getAll());
    console.log(users);
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
        <h1>Danh sách nhân viên</h1>
      </div>
      <div className={`${styles.content}`}>
        <button className={`${styles.btnAdd}`} onClick={onClickCreateEmployee}>
          Thêm nhân viên
        </button>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Mã</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </tr>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <div>
                    <button
                      onClick={() => onClickReadlEmployee(user.userid)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      onClick={() => onClickEditEmployee(user.userid)}
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
