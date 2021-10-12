import {
  faEnvelope,
  faLock,
  faPhoneAlt,
  faUnlock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Search from "../common/Search";
import Styles from "./Register.module.css";

export default function Register() {
  return (
    <div>
      <Search />
      <div className={`${Styles.container}`}>
        <h1>Đăng ký</h1>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faEnvelope} />
          <input placeholder="Email"></input>
        </div>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faLock} />
          <input placeholder="Mật khẩu"></input>
        </div>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faUnlock} />
          <input placeholder="Xác nhận mật khẩu"></input>
        </div>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faUser} />
          <input placeholder="Họ và tên"></input>
        </div>
        <div className={`${Styles.divInput}`}>
          <FontAwesomeIcon className={Styles.iconInput} icon={faPhoneAlt} />
          <input placeholder="Số điện thoại"></input>
        </div>
        <button className={Styles.buttonRegister}>Đăng ký</button>
      </div>
    </div>
  );
}
