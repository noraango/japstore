import {
  faEnvelope,
  faLock,
  faPhone,
  faUnlock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Register.module.css";
import loading from "../../services/loading.Service";
import authService from "../../services/auth.Service";
export default function Register() {
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  if (user != null) {
    history.push("/");
  }

  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("");
  
  const [errorEmail, setErrorEmail] = useState("Email không hợp lệ");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [errorPass, setError] = useState("Mật Khẩu không chính xác");
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  function validateEmail(email) {
    if (validEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  function checkEmail() {
    return validateEmail(email);
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
      authService
        .checkEmail(email)
        .then((res) => {
         if(res.data){
          authService
          .register(email, password, name)
          .then((res) => {
            loading.HideLoading();
          })
          .catch((e) => {
            console.log(e);
          });
         }else{

         }
        })
        .catch((e) => {
          console.log(e);
        });

        
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
          <div className="invalid-feedback">Email Không hợp lệ</div>
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
          <div className="invalid-feedback">Mật Khẩu hợp lệ</div>
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
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faPhone} />
          <input
            className={`form-control  ${
              isSubmit && !checkName() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Số điện thoại"
          ></input>{" "}
          <div className="invalid-feedback">Số điện thoại không được để trống</div>
        </div>
        <button className={styles.buttonRegister} onClick={submitmm}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}
