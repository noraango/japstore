import {
  faEnvelope,
  faLock,
  faUnlock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import loading from "../../services/loading.Service";
export default function Register() {
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  if (user != null) {
    history.push("/");
  }
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Đây là thông báo");
  const [msgStyle, setMsgStyle] = useState(`${styles.hide}`);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function submit() {
    loading.showLoading();
  }
  return (
    <div>
      <div className={`${styles.container}`}>
        <h1>Đăng ký</h1>
        <p className={`${styles.errorMsg} ${msgStyle}`}>*{msg}</p>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faEnvelope} />
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              setMsgStyle(`${styles.hide}`);
            }}
          ></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faLock} />
          <input placeholder="Mật khẩu"></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUnlock} />
          <input placeholder="Xác nhận mật khẩu"></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUser} />
          <input placeholder="Tên"></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUser} />
          <input placeholder="Tên đệm"></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUser} />
          <input placeholder="Họ"></input>
        </div>
        <button className={styles.buttonRegister} onClick={submit()}>Đăng ký</button>
      </div>
    </div>
  );
}
