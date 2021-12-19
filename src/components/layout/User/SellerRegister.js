import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { Button, Modal } from "react-bootstrap";
import userService from "../../../services/user.service";

const SellerRegister = (props) => {
  const [data, setData] = useState(1);
  const [id, setID] = useState("");
  const [CMTCode, setCMTCode] = useState("");
  const [UserId, setUserId] = useState("");
  const [provinceId, setProvinceId] = useState("01TTT");
  const [districtId, setDistrictId] = useState("00001");

  const provinceRaw = [
    {
      id: 1,
      provinceId: "01TTT",
      name: "Thành phố Hà Nội",
    },
    {
      id: 2,
      provinceId: "79TTT",
      name: "Thành Phố Hồ Chí Minh",
    },
  ];
  const [province, setProvince] = useState(provinceRaw);

  const districtRaw = [
    {
      id: 1,
      wardId: "00001",
      name: "Phường Phúc Xá",
      districtId: "001HH",
    },
    {
      id: 2,
      wardId: "00004",
      name: "Phường Trúc Bạch",
      districtId: "002HH",
    },
  ];
  const [district, setDistrict] = useState(districtRaw);

  const handleChangeP = (e) => {
    setProvinceId(e.target.value);
  };
  const handleChangeD = (e) => {
    setDistrictId(e.target.value);
  };

  //post request register
  const postRequest = (request) => {
    userService
      .ShopResgister(
        request.CMTCode,
        request.UserId,
        request.provinceId,
        request.districtId
      )
      .then((data) => {
        console.log("Status:" + data.status);
        if (data.data.status === true) alert("Đăng ký thành công!");
        else alert("Đăng ký không thành công!");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Fetching error of senting register requestion:" + err);
      });
  };

  let user = JSON.parse(localStorage.getItem("user")); //local user
  const handleRequest = (user, e) => {
    setUserId(user.id);

    let request = {
      CMTCode: CMTCode,
      UserId: user.id,
      provinceId: provinceId,
      districtId: districtId,
    };
    console.log("request: " + request);
    if (
      CMTCode !== null &&
      user.id !== null &&
      provinceId !== null &&
      districtId != null
    )
      postRequest(request);
    else {
      alert("Chưa đủ thông tin");
      e.preventDefault();
    }
  };
  //validate
  const validateInput = (type, checkingText) => {
    /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 12 chữ số hay không */
    if (type == "CCCD") {
      const regexp = /^\d{12}$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {
          isInputValid: true,
          errorMessage: "",
        };
      } else {
        return {
          isInputValid: false,
          errorMessage: "CCCD phải đủ 12 chữ số.",
        };
      }
    }
  };
  const [isValid, setIsValid] = useState({
    CCCD: {
      value: "",
      isInputValid: true,
      errorMessage: "",
    },
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...isValid[name] };
    newState.value = value;
    setIsValid({ [name]: newState });
  };
  const handleInputValidation = (event) => {
    const { name } = event.target;
    const { isInputValid, errorMessage } = validateInput(
      name,
      isValid[name].value
    );
    const newState = { ...isValid[name] };
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    setIsValid({ [name]: newState });
  };
  const FormError = (props) => {
    /* nếu isHidden = true, return null ngay từ đầu */
    if (props.isHidden) {
      return null;
    }

    return <div style={{ color: "red" }}>{props.errorMessage}</div>;
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông Tin Đăng Ký
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Số CCCD</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <div style={{ display: "flex" }}>
                    <input
                      className={`form-control ${styles.inputMain}}`}
                      type="number"
                      id="fname"
                      name="CCCD"
                      required
                      onChange={(e) => {
                        setID(e.target.value);
                        setCMTCode(e.target.value);
                        handleInput(e);
                      }}
                      onBlur={(e) => handleInputValidation(e)}
                    />
                  </div>
                </div>
                <FormError
                  isHidden={isValid["CCCD"].isInputValid}
                  errorMessage={isValid["CCCD"].errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Địa chỉ cửa hàng</label>
              </div>
              <div className={styles.input1}>
                <div className="row">
                  <div className="col col-md-6">
                    <label for="city">Tỉnh,Thành phố</label>
                    <select
                      className={`form-control 
                    }`}
                      name="city"
                      onChange={(e) => handleChangeP(e)}
                      onClick={() => setProvinceId(province[0].id)}
                    >
                      <option value="" disabled>
                        Chọn Tỉnh
                      </option>
                      {province.length > 0
                        ? province.map((p, key) => (
                            <option key={p.id} value={p.provinceId}>
                              {p.name}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                  <div className="col col-md-6">
                    <label for="city">Quận,huyện</label>
                    <select
                      className={`form-control 
                    }`}
                      name="district"
                      onChange={(e) => handleChangeD(e)}
                      onClick={() => setDistrictId(district[0].id)}
                    >
                      <option value="" disabled>
                        Chọn Quận
                      </option>
                      {district.length > 0
                        ? district.map((d, key) => (
                            <option key={d.id} value={d.districtId}>
                              {d.name}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          onClick={(e) => {
            handleRequest(user, e);
          }}
        >
          Đăng Ký
        </Button>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default SellerRegister;
