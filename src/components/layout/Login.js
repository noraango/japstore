import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Search from "../common/Search";
import Styles from "./Login.module.css";
export default function Login() {
  return (
    <div>
      <Search />
      <div className={`${Styles.container}`}>
        <h1>Đăng nhập</h1>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faEnvelope} />
          <input placeholder="Email"></input>
        </div>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faLock} />
          <input placeholder="Mật khẩu"></input>
        </div>
        <div className={`${Styles.divCheckBox}`}>
          <input type="checkbox" />
          <p>Lưu mật khẩu</p>
          <a href="register">Đăng ký</a>
        </div>
        <button className={Styles.buttonLogin}>Đăng nhập</button>
        <h2>Hoặc đăng nhập với</h2>
        <div className={`${Styles.divAlter}`}>
          <button className={Styles.buttonFB}>
            <FontAwesomeIcon
              className={`${Styles.iconAlter}`}
              icon={faFacebookSquare}
            />
            Facebook
          </button>
          <button className={Styles.buttonG}>
            <FontAwesomeIcon
              className={`${Styles.iconAlter}`}
              icon={faGoogle}
            />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
