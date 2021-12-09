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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [errorPass, setError] = useState("Mật Khẩu không chính xác");
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  function checkEmail() {
    validateEmail(email);
  }
  function checkName() {
    if (name === "") {
      return false;
    } else {
      return true;
    }
  }
  function checkPass() {
    if (password === "") {
      return false;
    } else {
      return true;
    }
  }
  function checkRePass() {
    if (password === "") {
      return false;
    } else {
      return true;
    }
  }
  function submitmm() {
    setIsSubmit(true);
    if (checkName() && checkPass() && checkRePass() && checkEmail()) {
      loading.showLoading();
    }
  }

  return (
    <div>
      <div className={`${styles.container}`}>
        <h1>Đăng ký</h1>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faEnvelope} />
          <input
            type="email"
            placeholder="Email"
            className={`form-control  ${
              isSubmit && !checkEmail() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div className="invalid-feedback">Email Không được để trống</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faLock} />
          <input
            className={`form-control  ${
              isSubmit && !checkPass() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Mật khẩu"
          ></input>{" "}
          <div className="invalid-feedback">Mật Khẩu không được để trống</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUnlock} />
          <input
            className={`form-control  ${
              isSubmit && !checkRePass() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            placeholder="Xác nhận mật khẩu"
          ></input>{" "}
          <div className="invalid-feedback">{errorPass}</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faUser} />
          <input
            className={`form-control  ${
              isSubmit && !checkName() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
