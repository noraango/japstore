import React, { useState, useEffect } from 'react'
import styles from './User.module.css'
import DatePicker from "react-datepicker";
import { path } from "../../../controller/constants";
import { Button, Modal } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";

const btn = (content, style) => {
  return (
    <div className={styles.subBtnDiv} style={style}>
      <div style={{
        width: '15rem',
        display: 'flex',
        justifyContent: 'inherit',
        alignContent: 'center'
      }}>
        <button className={styles.subBtn}>{content}</button>
      </div>
    </div>
  )
}

const sellerInfo = (user) => {
  return (
    <>
      <div style={{
        borderTop: '0.0625rem solid #efefef',
        padding: '1.125rem 0.875rem'
      }}>
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
                      value={user.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {btn('Lưu')}
        </form>
      </div>
    </>
  )
}

const shipperInfo = (user) => {
  return (
    <>
      <div style={{
        borderTop: '0.0625rem solid #efefef',
        padding: '1.125rem 0.875rem'
      }}>
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
                      value={user.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {btn('Lưu')}
        </form>
      </div>
    </>
  )
}

const ShipperRegister = (props) => {
  const [data, setData] = useState(2);
  const [id, setID] = useState('');
  const [display, setDisplay] = useState('none');

  const hanldeCheckID = (id) => {
    console.log('CCCD: ' + id)
    fetch('https://localhost:6969/DataRaw/checkCMT?CMTCode=' + id)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.error('Fetching error amount of dopes:' + err)
      })
    if (data === 1) {
      setData(1);
      setDisplay('block')
    }
    if (data === 2) {
      setData(2);
      setDisplay('block')
    }
    else {
      setData(0);
      setDisplay('block')
    };
  }
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
                      className={`form-control ${styles.inputMain}}`}
                      type="text"
                      id="fname"
                      name="fname"
                      required
                      onChange={(e) => { setID(e.target.value) }}
                    />
                    <Button onClick={() => hanldeCheckID(id)}>Kiểm tra</Button>
                  </div>
                </div>

                <p style={{ color: 'red', display: { display } }}>Đã tiêm {data} mũi</p>

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
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal >
  );
}

const SellerRegister = (props) => {
  const [data, setData] = useState();
  const [id, setID] = useState('');

  const hanldeCheckID = (id) => {
    console.log('CCCD: ' + id)
    fetch('https://localhost:6969/DataRaw/checkCMT?CMTCode=' + id)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.error('Fetching error amount of dopes:' + err)
      })
  }
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
                  <div className={styles.input3}>
                    <input
                      className={`form-control ${styles.inputMain}}`}
                      type="text"
                      id="fname"
                      name="fname"
                      required
                      onChange={(e) => { setID(e.target.value) }}
                    />
                    <Button onClick={() => hanldeCheckID(id)}>Kiểm tra</Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.label1}>
            <div className={styles.label2}>
              <div className={styles.label3}>
                <label>Địa chỉ cửa hàng:</label>
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
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal >
  );
}

const User = () => {
  const [user, setUser] = useState({});
  const str = () => {
    let string = user.email.subtr(0, 2) + '****************' + '@gmail.com';
    return string;
  }
  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: 1,
        avatar: "avatar.jpg",
        role: "",
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
  const [startDate, setStartDate] = useState(new Date());
  const [modalShipperShow, setModalShipperShow] = useState(false);
  const [modalSellerShow, setModalSellerShow] = useState(false);

  const displayExtraInfo = (user) => {
    let displayComponent
    switch (user.role) {
      case 'Admin':
        displayComponent =
          (<p>Admin</p>)
        break;
      case 'Shipper':
        displayComponent =
          (shipperInfo(user))
        break;
      case 'Seller':
        displayComponent =
          (sellerInfo(user))
        break;
      default:
        return (
          <>
            <div>
              <Button className={styles.subBtn} style={{ width: 'fit-content' }} variant="primary" onClick={() => setModalShipperShow(true)}>
                Đăng ký trở thành Shipper
              </Button>
              <Button className={styles.subBtn} style={{ width: 'fit-content' }} variant="primary" onClick={() => setModalSellerShow(true)}>
                Đăng ký trở thành Seller
              </Button>
            </div>
            <ShipperRegister
              show={modalShipperShow}
              onHide={() => setModalShipperShow(false)}
            />
            <SellerRegister
              show={modalSellerShow}
              onHide={() => setModalSellerShow(false)}
            />
          </>
        )
    }
    return displayComponent;
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
              <form className={styles.formInfoMain}>
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
                            {user.email}
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

                  <div className={styles.label1}>
                    <div className={styles.label2}>
                      <div className={styles.label3}>
                        <label >ngày sinh</label>
                      </div>
                      <div className={styles.input1}>
                        <div className={styles.input2}>
                          <div className={styles.input3}>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={styles.datePicker} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {btn('Lưu')}

              </form>
            </div>
          </div>
        </div>

        <div className={styles.cardInfo}>
          {displayExtraInfo(user)}
          {/* {displayExtraInfo('Seller')} */}

        </div>

      </div>
    </div>
  );
};



export default User;
