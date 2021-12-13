import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { path } from "../../../controller/constants";
import { Button, Modal } from "react-bootstrap";

const ShipperRegister = (props) => {
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
    // if( type === '')
  };

  const FormError = (props) => {
    /* nếu isHidden = true, return null ngay từ đầu */
    if (props.isHidden) {
      return null;
    }

    return <div style={{ color: "red" }}>{props.errorMessage}</div>;
  };
  const FormNoti = (props) => {
    /* nếu isHidden = true, return null ngay từ đầu */
    if (!props.isHidden) {
      return null;
    } else {
      return <div style={{ color: props.color }}>Đã tiêm {props.data} mũi</div>;
    }
  };
  const [data, setData] = useState(1);
  const [id, setID] = useState("");
  const [display, setDisplay] = useState(false);

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
  const [color, setColor] = useState("black");

  const hanldeCheckID = (id) => {
    console.log("CCCD: " + id);
    fetch("https://localhost:6969/DataRaw/checkCMT?CMTCode=" + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Fetching error amount of dopes:" + err);
      });

    if (data === 1) {
      setData(1);
      setDisplay(true);
      setColor("darkgoldenrod");
    } else if (data === 2) {
      setData(2);
      setDisplay(true);
      setColor("green");
    } else if (data === 0) {
      setData(0);
      setDisplay(true);
      setColor("red");
    } else {
      setData(-1);
      setDisplay(false);
    }
  };
  useEffect(() => {}, [color]);
  const [CMTCode, setCMTCode] = useState("");
  const [UserId, setUserId] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [districtId, setDistrictId] = useState("");

  const handleChangeP = (e) => {
    setProvinceId(e.target.value);
  };
  const handleChangeD = (e) => {
    setDistrictId(e.target.value);
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
    console.log(request);
    if (
      CMTCode !== '' &&
      user.id !== null &&
      provinceId !== '' &&
      districtId !== ''
    ) {
      fetch(
        "https://localhost:6969/User/ShipperResgister?CMTCode=" +
          CMTCode +
          "&UserId=" +
          UserId +
          "&provideId=" +
          provinceId +
          "&districtId=" +
          districtId,
        {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          console.log("Status:" + data.status);
          if (data.status == true) {
            alert("Đăng ký thành công!");
            window.location.reload();
          } else alert("Đăng ký không thành công!");
        })
        .catch((err) => {
          console.error("Fetching error of senting register requestion:" + err);
        });
    } else {
        alert('Chưa đủ thông tin')
        // e.preventDefault();
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
                  <label for="fname">
                    Bạn phải tiêm đủ 2 mũi vắc xin để đăng ký
                  </label>
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
                    <Button
                      className={styles.subBtn}
                      onClick={() => hanldeCheckID(id)}
                    >
                      Kiểm tra
                    </Button>
                  </div>
                </div>
                <FormError
                  isHidden={isValid["CCCD"].isInputValid}
                  errorMessage={isValid["CCCD"].errorMessage}
                />
                <FormNoti isHidden={display} data={data} color={color} />
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Khu Vực Hoạt Động</label>
              </div>
              <div className={styles.input1}>
                <div className="row">
                  <div className="col col-md-6">
                    <label for="city">Tỉnh,Thành phố</label>
                    <select
                      className={`form-control }`}
                      name="city"
                      onChange={(e) => handleChangeP(e)}
                      required
                    >
                      <option value="" selected disabled>
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
                      className={`form-control }`}
                      name="district"
                      onChange={(e) => handleChangeD(e)}
                      required
                    >
                      <option value="" selected disabled>
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
export default ShipperRegister;
