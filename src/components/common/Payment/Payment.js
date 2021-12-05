import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { formatVND } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import locationService from "../../../services/locationService";
import orderService from "../../../services/orderService";
import "./Payment.css";
import ProductOverview from "./ProductOverview";

export default function Payment(props) {
  const [items, setItems] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetchCartItems();
    fetchProvince();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  let user = JSON.parse(localStorage.getItem("user"));
  function fetchCartItems() {
    if (user) {
      cartService
        .getCart(user)
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
  const [error, setError] = useState({
    email: "Email không được để trống",
    name: "Tên không được để trống",
    phoneNumber: "Số điện thoại không được để trống",
    city: "Thành phố không được để trống",
    district: "Huyện không được để trống",
    location: "Địa chỉ không được để trống",
  });
  const [district, setDistrict] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(15000);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isHasCity, setIsHasCity] = useState(true);
  /*
    Funtion
  */
  function onCityChange(event) {
    if (event.target.value !== "") {
      setIsHasCity(false);
    }
    //load data city
  }
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
    fetchDistrict(event.target.value);
    checkCity();
  }
  function fetchDistrict(provinceId) {
    locationService
      .getDistricts(provinceId)
      .then((res) => {
        console.log(res.data);
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
  function onSubmit() {
    setIsSubmit(true);
    orderService
      .createOrder(user,infor)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className={`container`}>
      <div id="check-out">
        <div className="row m-center">
          <div className=" order-lg-last offset-md-1  col-lg-5 container pt-4 summary">
            <div className="container-input-2">
              <div className="statistical">
                <h4 className="summary-buttom">
                  <span>Đơn hàng(6 sản phẩm)</span>
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
                    placeholder="Nhập mã giảm giá"
                  />
                </form>
                <button type="submit" className="btn btn-check-coupons">
                  Kiểm Tra
                </button>
                <form id="toSubmit" method="POST"></form>
              </div>

              <div className="summary-second-section">
                <div className="summary-text">
                  <span>Tạm tính:</span> <span>{formatVND(total)}đ</span>
                </div>
                <div className="summary-text">
                  <span>Chi phí vận chuyển:</span>{" "}
                  <span>{formatVND(shippingFee)}đ</span>
                </div>
              </div>
              <div className="summary-section lg-show">
                <div className="summary-text">
                  <span>Tổng cộng:</span>{" "}
                  <span>{formatVND(total + shippingFee)}đ</span>
                </div>
                <div className="summary-buttom">
                  {/* <button
                    className="btn button-back"
                    onclick={() => redirectCart()}
                  >
                    <span>Quay về giỏ hàng</span>
                  </button>
                  <button
                    type="submit"
                    className="btn  button-next"
                    onclick={redirectHome}
                  >
                    <span>Đặt hàng</span>
                  </button> */}
                  <a onClick={onBack}>
                    <button type="submit" className="btn button-back">
                      <span>Quay về giỏ hàng</span>
                    </button>
                  </a>
                  <a onClick={onSubmit}>
                    <button type="submit" className="btn  button-next">
                      <span>Đặt hàng</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 input order-lg-1">
            <div className="container m-center">
              <div className=" pl-4 pr-4 input-infor">
                <h4>Thông tin mua hàng</h4>
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
                      placeholder="Địa Chỉ Email"
                    />
                    <div className="invalid-feedback">{error.email}</div>
                  </div>
                  <div className="row ">
                    <div className="form-group col col-md-6 col-12  double-col">
                      <label>Họ tên</label>
                      <input
                        type="email"
                        className={`form-control  ${
                          isSubmit && checkName() ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={infor.name}
                        onChange={onChangeName}
                        placeholder="Họ và Tên"
                      />
                      <div className="invalid-feedback">{error.name}</div>
                    </div>
                    <div className="form-group  col col-md-6  col-12 pr-none">
                      <label>Số điện thoại</label>
                      <input
                        type="email"
                        className={`form-control  ${
                          isSubmit && checkPhone() ? "is-invalid" : ""
                        }`}
                        name="phone"
                        onChange={onChangePhone}
                        value={infor.phoneNumber}
                        placeholder="Số điện thoại"
                      />
                      <div className="invalid-feedback">
                        {error.phoneNumber}
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="form-group col col-md-6  col-12  double-col">
                      <label>Tỉnh,Thành phố</label>
                      <select
                        className={`form-control  ${
                          isSubmit && checkCity() ? "is-invalid" : ""
                        }`}
                        name="city"
                        value={infor.city}
                        onChange={onChangeCity}
                      >
                        <option value="">Chọn Tỉnh</option>
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
                      <label>Quận,huyện</label>
                      <select
                        className={`form-control  ${
                          isSubmit && checkDistrict() ? "is-invalid" : ""
                        }`}
                        name="county"
                        disabled={checkCity}
                        onChange={onChangeDistrict}
                      >
                        <option value="">Chọn Quận</option>
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
                    <label>Địa Chỉ</label>
                    <input
                      type="email"
                      className={`form-control  ${
                        isSubmit && checkLocation() ? "is-invalid" : ""
                      }`}
                      value={infor.location}
                      onChange={onChangeLocation}
                      name="address"
                      placeholder="Địa chỉ"
                    />
                    <div className="invalid-feedback">{error.location}</div>
                  </div>
                  <div className="form-group">
                    <label>Ghi Chú</label>
                    <textarea
                      className={`form-control `}
                      name="note"
                      rows="3"
                      placeholder="Thêm Ghi Chú"
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
                            <span>Giao hàng trong giờ hành chính</span>
                          </label>
                        </div>
                      </div>
                      <p>Hàng sẽ được giao trong khung giờ hành chính 8h-17h</p>
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
                          <span>Thanh Toán khi nhận giao hàng</span>
                        </label>
                      </div>
                      <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary-section small-case lg-hide">
                <div className="summary-text">
                  <span>Tổng cộng:</span> <span>10000000đ</span>
                </div>
                <div className="summary-buttom ">
                  {/* <button
                    type="submit"
                    className="btn  button-back"
                    onclick={redirectCart}
                  >
                    <span>Quay về giỏ hàng</span>
                  </button>
                  <button type="submit" className="btn  button-next">
                    <span>Đặt hàng</span>
                  </button> */}
                  <a href onClick={onBack}>
                    <button type="submit" className="btn  button-back">
                      <span>Quay về giỏ hàng</span>
                    </button>
                  </a>
                  <a href onClick={onSubmit}>
                    <button type="submit" className="btn  button-next">
                      <span>Đặt hàng</span>
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
