import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
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
  async function requestLogin(info) {
    let user = {
      UserId: 1,
      Username: "vitcon2000",
      RoleIds: [1],
      RoleNames: ["admin"],
      Name: "Ngô Thế Anh",
      Email: "timer217@gmail.com",
    };
    if (info.email === user.Email && info.password === "admin") {
      return { statusCode: 70, token: "123", user: user };
    } else {
      return { statusCode: 69 };
    }
  }
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  async function submitForm() {
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
    let info = { email, password };
    let result = await requestLogin(info);
    if (result.statusCode === 69) {
      setMsg("Thông tin đăng nhập không chính xác");
      setMsgStyle(`${styles.show}`);
    } else if (result.statusCode === 70) {
      setMsgStyle(`${styles.hide}`);
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);
      window.location.reload();
    }
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
          <input type="checkbox" />
          <p>Lưu mật khẩu</p>
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