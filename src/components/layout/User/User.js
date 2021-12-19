import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { Button } from "react-bootstrap";
import { path } from "../../../controller/constants";
import ShipperRegister from "./ShipperRegister";
import SellerRegister from "./SellerRegister";
import userService from "../../../services/user.service";
import loadingService from "../../../services/loading.Service";
import { toast } from "react-toastify";
let user = JSON.parse(localStorage.getItem("user"));
const btn = (content, style) => {
  return (
    <div className={styles.subBtnDiv} style={style}>
      <div
        style={{
          width: "15rem",
          display: "flex",
          justifyContent: "inherit",
          alignContent: "center",
        }}
      >
        <button className={styles.subBtn}>{content}</button>
      </div>
    </div>
  );
};

const SellerInfo = ({ user, roleInfo }) => {
  return (
    <>
      <div
        style={{
          borderTop: "0.0625rem solid #efefef",
          padding: "1.125rem 0.875rem",
        }}
      >
        <h1 className={styles.h1}>Thông tin chi tiết</h1>
      </div>
      <div className={styles.formInfo}>
        <form className={styles.formInfoMain}>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Số CCCD</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <div className={styles.input3}>
                    <input
                      className={styles.inputMain}
                      type="text"
                      id="fname"
                      name="fname"
                      value={roleInfo !== null ? roleInfo.cmTcode : ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Địa chỉ cửa hàng</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <div className={styles.input3}>
                    <input
                      className={styles.inputMain}
                      type="text"
                      id="fname"
                      name="fname"
                      value={
                        roleInfo ? roleInfo.district + ", " + roleInfo.city : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const ShipperInfo = ({ user, roleInfo }) => {
  console.log(roleInfo);
  return (
    <>
      <div
        style={{
          borderTop: "0.0625rem solid #efefef",
          padding: "1.125rem 0.875rem",
        }}
      >
        <h1 className={styles.h1}>Thông tin chi tiết</h1>
      </div>
      <div className={styles.formInfo}>
        <form className={styles.formInfoMain}>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Số CCCD</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <div className={styles.input3}>
                    <input
                      className={styles.inputMain}
                      type="text"
                      id="fname"
                      name="fname"
                      value={roleInfo !== null ? roleInfo.cmTcode : ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Địa phận hoạt động</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <div className={styles.input3}>
                    <input
                      className={styles.inputMain}
                      type="text"
                      id="fname"
                      name="fname"
                      value={
                        roleInfo ? roleInfo.district + ", " + roleInfo.city : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {btn("Lưu")}
        </form>
      </div>
    </>
  );
};

const User = (props) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [roleInfo, setRoleInfo] = useState({});
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      props.history.push("/");
    }
    setUser(user);
    let name = user.lastName + " " + user.middleName + " " + user.firstName;
    setPhone(user.phone);
    setName(name);
    userService
      .getRole(user.id)
      .then((data) => {
        if (data.data === "") {
          setRoleInfo({
            notCheck: true,
          });
        } else {
          setRoleInfo({
            status: data.data.status,
            cmTcode: data.data.cmTcode,
            city: data.data.city,
            district: data.data.district,
          });
        }
      })
      .catch((err) => {
        console.error("Fetch Role Information error:" + err);
      });
  }, []);
  const [imageFile, setImageFile] = useState(undefined);
  const [imageURL, setImageURL] = useState(path + "/images/upload.jpg");

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };
  const [modalShipperShow, setModalShipperShow] = useState(false);
  const [modalSellerShow, setModalSellerShow] = useState(false);
  const DisplayExtraInfo = ({ user }) => {
    let displayComponent;
    switch (user.role) {
      case "Admin":
        return <p>Admin</p>;
        break;
      case "Shipper":
        return <ShipperInfo user={user} roleInfo={roleInfo} />;
        break;
      case "Seller":
        return <SellerInfo user={user} roleInfo={roleInfo} />;
        break;
      default:
        return (
          <>
            {roleInfo.notCheck ? (
              <div>
                <Button
                  className={styles.subBtn}
                  style={{ width: "fit-content" }}
                  variant="primary"
                  onClick={() => setModalShipperShow(true)}
                >
                  Đăng ký trở thành Shipper
                </Button>
                <Button
                  className={styles.subBtn}
                  style={{ width: "fit-content" }}
                  variant="primary"
                  onClick={() => setModalSellerShow(true)}
                >
                  Đăng ký trở thành Seller
                </Button>
              </div>
            ) : (
              <div>Đã đăng ký và đang chờ xét duyệt</div>
            )}

            <ShipperRegister
              show={modalShipperShow}
              onHide={() => setModalShipperShow(false)}
              user={user}
            />
            <SellerRegister
              show={modalSellerShow}
              onHide={() => setModalSellerShow(false)}
              user={user}
            />
          </>
        );
        break;
    }
  };

  function changeInfor() {
    loadingService.showLoading();
    userService
      .updateInfor(user.id, name, phone)
      .then((data) => {
        loadingService.HideLoading();
        let userm = JSON.parse(localStorage.getItem("user"));
        userm.firstName = name;
        setUser(userm);
        localStorage.setItem("user", JSON.stringify(userm));
        toast.success("Thay đổi thành công", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        loadingService.HideLoading();
        console.error("Fetch Role Information error:" + err);
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <div className={styles.header}>
            <h1 className={styles.h1}>Hồ sơ của tôi</h1>
            <div className={styles.headerDiv}>
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.imgDiv}>
              <div className={styles.imgDiv2}>
                <div className={styles.img}>
                  <div className={`${styles.inputImage} ${styles.span31}`}>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      title=""
                      onChange={onChangeImage}
                    />
                    <img src={`${imageURL}`} alt="Không load được ảnh" />
                  </div>
                </div>

                <div style={{ marginTop: "0.75rem", display: "block" }}>
                  <div className={styles.scrpitDiv}>
                    Dụng lượng file tối đa 1 MB
                  </div>
                  <div className={styles.scrpitDiv}>Định dạng:.JPEG, .PNG</div>
                </div>
              </div>
            </div>
            <div className={styles.formInfo}>
              <div className={styles.formInfoMain}>
                <div>
                  <div className={styles.label1}>
                    <div className={styles.label2}>
                      <div className={styles.label3}>
                        <label>Tên đăng nhập</label>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.input2}>
                          <div className={styles.input3}>
                            <input
                              className={styles.inputMain}
                              type="text"
                              id="fname"
                              name="fname"
                              value={user.email}
                              disabled
                            />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.label1}>
                    <div className={styles.label2}>
                      <div className={styles.label3}>
                        <label>Họ và Tên</label>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.input2}>
                          <div className={styles.input3}>
                            <input
                              className={styles.inputMain}
                              type="text"
                              id="fname"
                              name="fname"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.label1}>
                    <div className={styles.label2}>
                      <div className={styles.label3}>
                        <label>Email</label>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.email1}>
                          <div className={styles.email2}>{user.email}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.label1}>
                    <div className={styles.label2}>
                      <div className={styles.label3}>
                        <label>Số điện thoại</label>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.input2}>
                          <div className={styles.input3}>
                            <input
                              className={styles.inputMain}
                              type="text"
                              id="fname"
                              name="fname"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.subBtnDiv}>
                  <div
                    style={{
                      width: "15rem",
                      display: "flex",
                      justifyContent: "inherit",
                      alignContent: "center",
                    }}
                  >
                    <button className={styles.subBtn} onClick={changeInfor}>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <DisplayExtraInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default User;
