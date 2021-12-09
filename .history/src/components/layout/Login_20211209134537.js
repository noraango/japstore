import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import authService from "../../services/auth.Service";
import styles from "./Login.module.css";
export default function Login() {
  let user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  if (user != null) {
    history.push("/");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("Đây là thông báo");
  const [msgStyle, setMsgStyle] = useState(`${styles.hide}`);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function submitForm() {
    if (email === "") {
      setMsg("Hãy nhập email");
      setMsgStyle(`${styles.show}`);
      return;
    }
    if (password === "") {
      setMsg("Hãy nhập mật khẩu");
      setMsgStyle(`${styles.show}`);
      return;
    }
    if (!validateEmail(email)) {
      setMsg("Hãy nhập đúng email");
      setMsgStyle(`${styles.show}`);
      return;
    }
    authService
      .login(email, password)
      .then((res) => {
        if (res.data.status) {
          console.log("success");
          setMsgStyle(`${styles.hide}`);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.reload();
        } else {
          setMsg("Thông tin đăng nhập không chính xác");
          setMsgStyle(`${styles.show}`);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <div className={`${styles.container}`}>
        <h1>Đăng nhập</h1>
        <p className={`${styles.errorMsg} ${msgStyle}`}>*{msg}</p>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faEnvelope} />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setMsgStyle(`${styles.hide}`);
            }}
            placeholder="Email"
          ></input>
        </div>
        <div className={`${styles.divInput}`}>
          <FontAwesomeIcon className={styles.iconInput} icon={faLock} />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setMsgStyle(`${styles.hide}`);
            }}
            type="password"
            placeholder="Mật khẩu"
          ></input>
        </div>
        <div className={`${styles.divCheckBox}`}>
          <p onClick={forgot()}>Quên mật khẩu</p>
          <a href="register">Đăng ký</a>
        </div>
        <button onClick={submitForm} className={styles.buttonLogin}>
          Đăng nhập
        </button>
        <h2>Hoặc đăng nhập với</h2>
        <div className={`${styles.divAlter}`}>
          <button className={styles.buttonFB}>
            <FontAwesomeIcon
              className={`${styles.iconAlter}`}
              icon={faFacebookSquare}
            />
            Facebook
          </button>
          <button className={styles.buttonG}>
            <FontAwesomeIcon
              className={`${styles.iconAlter}`}
              icon={faGoogle}
            />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
