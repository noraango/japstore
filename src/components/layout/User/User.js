import React, { useState } from 'react'
import styles from './User.module.css'
import DatePicker from "react-datepicker";
import { path } from "../../../controller/constants";
import "react-datepicker/dist/react-datepicker.css";
const User = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: 1,
        avatar: "avatar.jpg",
        role: "Admin",
        firstName: "Anh",
        middleName: "Thế",
        lastName: "Ngô",
        fullName: "Ngô Thế Anh",
        phone: "0357467491",
        email: "timer217@gmail.com",
        address: "Son La",
        ward: "Phường Mỹ Đình 1",
        district: "Quận Nam Từ Liêm",
        province: "Thành phố Hà Nội",
      })
    );
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
  }, []);
  const radiosGender = [
    { name: "Nam", value: "1" },
    { name: "Nữ", value: "2" },
    { name: "Khác", value: "3" },
  ];
  const [imageFile, setImageFile] = useState(undefined);
  const [imageURL, setImageURL] = useState(path + "/images/upload.jpg");
  const pushDate = (start, end, arr) => {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };
  const yearCur = new Date().getFullYear();
  let day = [],
    month = [],
    year = [];
  pushDate(1, 31, day);
  pushDate(1, 12, month);
  pushDate(1910, yearCur, year);
  const pathz = process.env.PUBLIC_URL + "/images" + "/user-icon.png";

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };
  const [modalShow, setModalShow] = React.useState(false);
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
                <div>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Đăng Kí Làm Chủ Shipper
                  </Button>
                  <button>Đăng Kí Làm Chủ Shipper</button>
                </div>
                <ShipperRegister
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <div className={styles.formInfo}>
              <form className={styles.formInfoMain}>
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
                      <label>Tên</label>
                    </div>
                    <div className={styles.input1}>
                      <div className={styles.input2}>
                        <div className={styles.input3}>
                          <input
                            className={styles.inputMain}
                            type="text"
                            id="fname"
                            name="fname"
                            value={user.lastName}
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
                        <div className={styles.email2}>
                          wh*************@gmail.com
                          <button class={styles.emailBtn}>Thay đổi</button>
                        </div>
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
                            value={user.phone}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.label1}>
                  <div className={styles.label2}>
                    <div className={styles.label3}>
                      <label>Tên shop</label>
                    </div>
                    <div className={styles.input1}>
                      <div className={styles.input2}>
                        <div className={styles.input3}>
                          <input
                            className={styles.inputMain}
                            type="text"
                            id="fname"
                            name="fname"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className={styles.label1}>
                  <div className={styles.label2}>
                    <div className={styles.label3}>
                      <label>giới tính</label>
                    </div>
                    <div className={styles.input1}>
                      <div>
                        <div className={styles.radioBtnGrp}>
                          {radiosGender.map((rad, id) => (
                            <div
                              className={styles.radio}
                              tabindex="0"
                              role="radio"
                              aria-checked="false"
                            >
                              <div className={styles.radioBtn}>
                                <div className={styles.radioBtnCirO}>
                                  <div class={styles.radioBtnCirI}></div>
                                </div>
                              </div>
                              <div className={styles.radioContent}>
                                <div className="stardust-radio__label">
                                  {rad.name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className={styles.label1}>
                  <div className={styles.label2}>
                    <div className={styles.label3}>
                      <label>ngày sinh</label>
                    </div>
                    <div className={styles.input1}>
                      <div className={styles.select}>
                        <div className={styles.selection}>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Ngày"
                            className={styles.selectDiv}
                          >
                            <Form.Select aria-label="Floating label select example">
                              {day.map((v, id) => (
                                <option value={id}>{v}</option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </div>
                        <div className={styles.selection}>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Tháng"
                            className={styles.selectDiv}
                          >
                            <Form.Select aria-label="Floating label select example">
                              {month.map((v, id) => (
                                <option value={id}>{v}</option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </div>
                        <div className={styles.selection}>
                          <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Năm"
                            className={styles.selectDiv}
                          >
                            <Form.Select
                              aria-label="Floating label select example"
                              htmlSize={1}
                            >
                              {year.map((v, id) => (
                                <option value={id}>{v}</option>
                              ))}
                            </Form.Select>
                          </FloatingLabel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {user.role !== "Admin"}
                {<p>hello</p>}
                <div className={styles.subBtnDiv}>
                  <button className={styles.subBtn}>Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ShipperRegister(props) {
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
                <label>Số CMT:</label>
              </div>
              <div className={styles.input1}>
                <div className={styles.input2}>
                  <label for="fname">
                    Bạn phải tiêm đủ 2 mũi vắc xin để đăng ký
                  </label>
                  <div className={styles.input3}>
                    <input
                      className={`form-control ${styles.inputMain}
                  }`}
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <Button>Kiểm tra</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Khu Vực Hoạt Động:</label>
              </div>
              <div className={styles.input1}>
                <div className="row">
                  <div className="col col-md-6">
                    <label for="city">Tỉnh,Thành phố</label>
                    <select
                      className={`form-control 
                  }`}
                      name="city"
                    >
                      <option value="">Chọn Tỉnh</option>
                    </select>
                  </div>
                  <div className="col col-md-6">
                    <label for="city">Quận,huyện</label>
                    <select
                      className={`form-control 
                  }`}
                      name="city"
                    >
                      <option value="">Chọn Quận</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đăng Ký</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default User;
