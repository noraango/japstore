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
import { ToastContainer, toast } from 'react-toastify';
export default function Register() {
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  if (user != null) {
    history.push("/");
  }
  const [isExsitEmail, setIsExsitEmail] = useState(false);
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
  const validPhone = new RegExp(
    "^[0][1-9][0-9]{8}$"
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
    if (password !== repassword) {
      return false;
    } else {
      return true;
    }
  }
  function checkPhone(){
    if (phone === "") {
      return false;
    } else {
      if(validPhone.test(phone)){
        return true;
      }else{
        return false;
      }
      
    }
  }
  function submitmm() {
    
    setIsSubmit(true);
    if (checkName() && checkPass() && checkRePass() && checkEmail()) {
      loading.showLoading();
      authService
        .checkEmail(email)
        .then((res) => {
          if (res.data) {
            authService
              .register(email, password, name, phone)
              .then((res) => {
                
                loading.HideLoading();
                toast.success('Tạo tài khoản Thành Công', {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                  history.push("/login");
              })
              .catch((e) => {
                console.log(e);
              });
          } else {
            loading.HideLoading();
            setErrorEmail("Email Đã Tồn Tại");
            setIsExsitEmail(true);
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
              (isSubmit && !checkEmail() || isExsitEmail)? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("Email không đúng định dạng");
              setIsExsitEmail(false);
            }}
          ></input>
          <div className="invalid-feedback">{errorEmail}</div>
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
          ></input>
          <div className="invalid-feedback">Tên Không được để trống</div>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faPhone} />
          <input
            className={`form-control  ${
              isSubmit && !checkPhone() ? "is-invalid" : ""
            }`}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Số điện thoại"
          ></input>
          <div className="invalid-feedback">
            Số điện thoại không được để trống
          </div>
        </div>
        <button className={styles.buttonRegister} onClick={submitmm}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}
