import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { formatVND } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import locationService from "../../../services/locationService";
import orderService from "../../../services/orderService";
import MessageBox from "../MessageBox/MessageBox";
import "./Payment.css";
import ProductOverview from "./ProductOverview";

export default function Payment(props) {
  const [items, setItems] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetchCartItems();
    fetchProvince();
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProvince(user.provinceId);
      fetchDistrict(user.provinceId);
      setInfor({
        email: user.email,
        name: user.fullName,
        phoneNumber: user.phone,
        location: user.address,
        city: user.provinceId,
        district: user.districtId,
      });
      setDistrictId(user.districtId);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  let user = JSON.parse(localStorage.getItem("user"));
  function fetchCartItems() {
    if (user) {
      cartService
        .getCart(user.id)
        .then((res) => {
          setItems(res.data);
          let sum = 0;
          res.data.forEach((e) => {
            sum += e.price * e.quantity;
          });
          setTotal(sum);
          // console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      let cart = cartService.getLocalCart();
      setItems(cart);
      let sum = 0;
      cart.forEach((e) => {
        sum += e.price * e.quantity;
      });
      setTotal(sum);
    }
  }
  function fetchProvince() {
    locationService
      .getProvinces()
      .then((res) => {
        setProvinces(res.data);
        // console.log(res.data);
      })
      .catch(() => {});
  }
  const [infor, setInfor] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    city: "",
    district: "",
    location: "",
  });
  const [province, setProvince] = useState("initialState");
  const error = {
    email: "Email kh??ng ???????c ????? tr???ng",
    name: "T??n kh??ng ???????c ????? tr???ng",
    phoneNumber: "S??? ??i???n tho???i kh??ng ???????c ????? tr???ng",
    city: "Th??nh ph??? kh??ng ???????c ????? tr???ng",
    district: "Huy???n kh??ng ???????c ????? tr???ng",
    location: "?????a ch??? kh??ng ???????c ????? tr???ng",
  };
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState("");
  const [total, setTotal] = useState(0);
  const shippingFee = 15000;
  const [isSubmit, setIsSubmit] = useState(false);
  function onBack() {
    history.push("/cart");
  }
  function onChangeEmail(event) {
    setInfor({ ...infor, email: event.target.value });
    checkEmail();
  }
  function checkEmail() {
    if (infor.email === "") {
      return true;
    } else {
      return false;
    }
  }
  function onChangeName(event) {
    setInfor({ ...infor, name: event.target.value });
    checkName();
  }
  function checkName() {
    if (infor.name === "") {
      return true;
    } else {
      return false;
    }
  }
  function onChangePhone(event) {
    setInfor({ ...infor, phoneNumber: event.target.value });
    checkDistrict();
  }
  function checkPhone() {
    if (infor.phoneNumber === "") {
      return true;
    } else {
      return false;
    }
  }
  function onChangeCity(event) {
    setInfor({ ...infor, city: event.target.value });
    setProvince(event.target.value);
    fetchDistrict(event.target.value);
    checkCity();
  }
  function fetchDistrict(provinceId) {
    locationService
      .getDistricts(provinceId)
      .then((res) => {
        // console.log(res.data);
        setDistrict(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function checkCity() {
    if (infor.city === "") {
      return true;
    } else {
      return false;
    }
  }
  function onChangeDistrict(event) {
    setInfor({ ...infor, district: event.target.value });
    setDistrictId(event.target.value);
    checkDistrict();
  }
  function checkDistrict() {
    if (infor.district === "" && infor.city === "") {
      return true;
    } else {
      return false;
    }
  }
  function onChangeLocation(event) {
    setInfor({ ...infor, location: event.target.value });
    checkLocation();
  }
  function checkLocation() {
    if (infor.location === "") {
      return true;
    } else {
      return false;
    }
  }
  const [msg, setMsg] = useState("");
  function onSubmit() {
    let user = JSON.parse(localStorage.getItem("user"));
    setIsSubmit(true);
    orderService
      .createOrder(user, infor)
      .then((res) => {
        console.log(res);
        if (res.data === 1) {
          setMsg("T???o ????n h??ng th??nh c??ng");
        } else {
          setMsg("T???o ????n h??ng th???t b???i");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function redirectHome() {
    history.push("/");
  }
  return (
    <div className={`container`}>
      {msg === "" ? "" : <MessageBox onClick={redirectHome}   />}
      <div id="check-out">
        <div className="row m-center">
          <div className=" order-lg-last offset-md-1  col-lg-5 container pt-4 summary">
            <div className="container-input-2">
              <div className="statistical">
                <h4 className="summary-buttom">
                  <span>????n h??ng(6 s???n ph???m)</span>
                </h4>
              </div>
              <div id="view-back">
                <ProductOverview listProducts={items} />
              </div>
              <div className="coupons">
                <form id="coupons-form">
                  <input
                    type="text"
                    className="form-control"
                    id="coupons"
                    name="coupons"
                    placeholder="Nh???p m?? gi???m gi??"
                  />
                </form>
                <button type="submit" className="btn btn-check-coupons">
                  Ki???m Tra
                </button>
                <form id="toSubmit" method="POST"></form>
              </div>

              <div className="summary-second-section">
                <div className="summary-text">
                  <span>T???m t??nh:</span> <span>{formatVND(total)}??</span>
                </div>
                <div className="summary-text">
                  <span>Chi ph?? v???n chuy???n:</span>{" "}
                  <span>{formatVND(shippingFee)}??</span>
                </div>
              </div>
              <div className="summary-section lg-show">
                <div className="summary-text">
                  <span>T???ng c???ng:</span>{" "}
                  <span>{formatVND(total + shippingFee)}??</span>
                </div>
                <div className="summary-buttom">
                  {/* <button
                    className="btn button-back"
                    onclick={() => redirectCart()}
                  >
                    <span>Quay v??? gi??? h??ng</span>
                  </button>
                  <button
                    type="submit"
                    className="btn  button-next"
                    onclick={redirectHome}
                  >
                    <span>?????t h??ng</span>
                  </button> */}
                  <a onClick={onBack}>
                    <button type="submit" className="btn button-back">
                      <span>Quay v??? gi??? h??ng</span>
                    </button>
                  </a>
                  <a onClick={onSubmit}>
                    <button type="submit" className="btn  button-next">
                      <span>?????t h??ng</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 input order-lg-1">
            <div className="container m-center">
              <div className=" pl-4 pr-4 input-infor">
                <h4>Th??ng tin mua h??ng</h4>
                <form id="input">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className={`form-control  ${
                        isSubmit && checkEmail() ? "is-invalid" : ""
                      }`}
                      name="email"
                      value={infor.email}
                      onChange={onChangeEmail}
                      placeholder="?????a Ch??? Email"
                    />
                    <div className="invalid-feedback">{error.email}</div>
                  </div>
                  <div className="row ">
                    <div className="form-group col col-md-6 col-12  double-col">
                      <label>H??? t??n</label>
                      <input
                        type="email"
                        className={`form-control  ${
                          isSubmit && checkName() ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={infor.name}
                        onChange={onChangeName}
                        placeholder="H??? v?? T??n"
                      />
                      <div className="invalid-feedback">{error.name}</div>
                    </div>
                    <div className="form-group  col col-md-6  col-12 pr-none">
                      <label>S??? ??i???n tho???i</label>
                      <input
                        type="email"
                        className={`form-control  ${
                          isSubmit && checkPhone() ? "is-invalid" : ""
                        }`}
                        name="phone"
                        onChange={onChangePhone}
                        value={infor.phoneNumber}
                        placeholder="S??? ??i???n tho???i"
                      />
                      <div className="invalid-feedback">
                        {error.phoneNumber}
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="form-group col col-md-6  col-12  double-col">
                      <label>T???nh,Th??nh ph???</label>
                      <select
                        className={`form-control  ${
                          isSubmit && checkCity() ? "is-invalid" : ""
                        }`}
                        name="city"
                        value={province}
                        onChange={onChangeCity}
                      >
                        <option>Ch???n T???nh</option>
                        {provinces.map((location) => (
                          <option value={location.provinceId}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">{error.city}</div>
                    </div>
                    <div
                      className="form-group col col-md-6  col-12 pr-none"
                      id="other-take-hide"
                    >
                      <label>Qu???n,huy???n</label>
                      <select
                        className={`form-control  ${
                          isSubmit && checkDistrict() ? "is-invalid" : ""
                        }`}
                        name="county"
                        disabled={checkCity}
                        value={districtId}
                        onChange={onChangeDistrict}
                      >
                        <option value="">Ch???n Qu???n</option>
                        {district.map((location) => (
                          <option value={location.districtId}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">{error.district}</div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>?????a Ch???</label>
                    <input
                      type="email"
                      className={`form-control  ${
                        isSubmit && checkLocation() ? "is-invalid" : ""
                      }`}
                      value={infor.location}
                      onChange={onChangeLocation}
                      name="address"
                      placeholder="?????a ch???"
                    />
                    <div className="invalid-feedback">{error.location}</div>
                  </div>
                  <div className="form-group">
                    <label>Ghi Ch??</label>
                    <textarea
                      className={`form-control `}
                      name="note"
                      rows="3"
                      placeholder="Th??m Ghi Ch??"
                    ></textarea>
                  </div>
                </form>
                <div className="">
                  <div className="payment">
                    <div className="way">
                      <div className="radio">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label className="custom-control-label">
                            <span>Giao h??ng trong gi??? h??nh ch??nh</span>
                          </label>
                        </div>
                      </div>
                      <p>H??ng s??? ???????c giao trong khung gi??? h??nh ch??nh 8h-17h</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="payment">
                    <div className="way">
                      <div className="radio">
                        <input
                          className="pay-radio"
                          type="radio"
                          name="optradio"
                          checked
                        />
                        <label>
                          <span>Thanh To??n khi nh???n giao h??ng</span>
                        </label>
                      </div>
                      <p>B???n ch??? ph???i thanh to??n khi nh???n ???????c h??ng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary-section small-case lg-hide">
                <div className="summary-text">
                  <span>T???ng c???ng:</span> <span>10000000??</span>
                </div>
                <div className="summary-buttom ">
                  {/* <button
                    type="submit"
                    className="btn  button-back"
                    onclick={redirectCart}
                  >
                    <span>Quay v??? gi??? h??ng</span>
                  </button>
                  <button type="submit" className="btn  button-next">
                    <span>?????t h??ng</span>
                  </button> */}
                  <a href onClick={onBack}>
                    <button type="submit" className="btn  button-back">
                      <span>Quay v??? gi??? h??ng</span>
                    </button>
                  </a>
                  <a href onClick={onSubmit}>
                    <button type="submit" className="btn  button-next">
                      <span>?????t h??ng</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
