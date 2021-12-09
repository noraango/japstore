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

  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Đây là thông báo");
  const [msgStyle, setMsgStyle] = useState(`${styles.hide}`);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function checkEmail() {
    validateEmail(email);
    console.log(validateEmail(email));
  }
  function submitmm() {
    setIsSubmit(true);
    //loading.showLoading();
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
            className={`form-control  ${
              isSubmit && !checkEmail() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
              setMsgStyle(`${styles.hide}`);
            }}
          ></input>
          <div className="invalid-feedback">Email Không được để trống</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faLock} />
          <input
            className={`form-control  ${
              isSubmit && !checkEmail() ? "is-invalid" : ""
            }`}
            placeholder="Mật khẩu"
          ></input>{" "}
          <div className="invalid-feedback">Mật Khẩu không được để trống</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUnlock} />
          <input
            className={`form-control  ${
              isSubmit && !checkEmail() ? "is-invalid" : ""
            }`}
            placeholder="Xác nhận mật khẩu"
          ></input>{" "}
          <div className="invalid-feedback">Mật Khẩu</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUser} />
          <input
            className={`form-control  ${
              isSubmit && !checkEmail() ? "is-invalid" : ""
            }`}
            placeholder="Họ Tên"
          ></input>{" "}
          <div className="invalid-feedback">Tên Không được để trống</div>
        </div>

        <button className={styles.buttonRegister} onClick={submitmm}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}
