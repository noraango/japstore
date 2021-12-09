import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import authService from "../../services/auth.Service";
import styles from "./Login.module.css";
import { toast } from 'react-toastify';
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

  function  forgot() {
    toast.success('Mật khẩu đã được gửi vào email của bạn', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <div>
       <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mã Đơn Hàng : JapStore - {props.data.order.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Tên Khách Hàng:{" "}
            {props.data.user.lastName +
              " " +
              props.data.user.middleName +
              " " +
              props.data.user.firstName}{" "}
          </p>
          <p>
            Số lượng sản phẩm:
            {orderD.length}
          </p>
          <div>
            {orderD.map((pro) => {
              return (
                <div>
                  <p>
                    {pro.name} - số lượng : {pro.quantity}
                  </p>
                </div>
              );
            })}
          </div>
          <p>Giá Đơn Hàng: {orderD.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => getOrder()}>Nhận Đơn Hàng</button>
        </Modal.Footer>
      </Modal>
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
          <p onClick={forgot} style={{cursor:"pointer",marginRight:"10px"}}>Quên mật khẩu</p>
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
