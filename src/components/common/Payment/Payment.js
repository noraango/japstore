import React, { useEffect, useState } from "react";
import "./Payment.css";

export default function Payment(props) {
  return (
    <div className={`container`}>
      <div id="check-out">
        <div className="row m-center">
          <div className=" order-lg-last col-lg-5 container pt-4 summary">
            <div className="container-input-2">
              <div className="statistical">
                <h4 className="summary-buttom">
                  <span>Đơn hàng(6 sản phẩm)</span>
                </h4>
              </div>
              <div id="view-back">
                <div className="cart-view">
                  <div className="row cart-product">
                    <div className="col-2">
                      <img
                        src={process.env.PUBLIC_URL + "/images/user.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-6 cart-body">
                      <span>sniky</span>
                    </div>
                    <div className="col-4 cart-body">
                      <p>Số lượng : 3</p>
                      <p>2000000d</p>
                    </div>
                  </div>
                  <div className="row cart-product">
                    <div className="col-2">
                      <img
                        src={process.env.PUBLIC_URL + "/images/user.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-6 cart-body">
                      <span>sniky</span>
                    </div>
                    <div className="col-4 cart-body">
                      <p>Số lượng : 3</p>
                      <p>2000000d</p>
                    </div>
                  </div>
                  <div className="row cart-product">
                    <div className="col-2">
                      <img
                        src={process.env.PUBLIC_URL + "/images/user.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-6 cart-body">
                      <span>sniky</span>
                    </div>
                    <div className="col-4 cart-body">
                      <p>Số lượng : 3</p>
                      <p>2000000d</p>
                    </div>
                  </div>
                </div>
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
                <button
                  type="submit"
                  className="btn btn-primary btn-check-coupons"
                  onclick="fnSubmit()"
                >
                  Kiểm Tra
                </button>
                <form id="toSubmit" method="POST"></form>
              </div>
              <div className="summary-second-section">
                <div className="summary-text">
                  <span>Tạm tính:</span> <span>10000000đ</span>
                </div>
                <div className="summary-text">
                  <span>Chi phí vận chuyển:</span> <span>10000000đ</span>
                </div>
              </div>
              <div className="summary-section lg-show">
                <div className="summary-text">
                  <span>Tổng cộng:</span> <span>10000000đ</span>
                </div>
                <div className="summary-buttom">
                  <a href="ds">
                    <button
                      type="submit"
                      className="btn btn-primary button-back"
                    >
                      <span>Quay về giỏ hàng</span>
                    </button>
                  </a>
                  <a href="ds">
                    <button
                      type="submit"
                      className="btn btn-primary  button-next"
                    >
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
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col col-md-6 col-12">
                      <label for="name">Họ tên</label>
                      <input
                        type="email"
                        className="form-control"
                        name="name"
                        placeholder="Họ và Tên"
                      />
                    </div>
                    <div className="form-group  col col-md-6  col-12">
                      <label for="phone">Số điện thoại</label>
                      <input
                        type="email"
                        className="form-control"
                        name="phone"
                        placeholder="số điện thoại"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col col-md-6  col-12">
                      <label for="city">Tỉnh,Thành phố</label>
                      <select className="form-control" name="city">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div
                      className="form-group col col-md-6  col-12"
                      id="other-take-hide"
                    >
                      <label for="county">Quận,huyện</label>
                      <select className="form-control" name="county">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="address">Địa Chỉ</label>
                    <input
                      type="email"
                      className="form-control"
                      name="address"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div className="form-group">
                    <label for="note">Ghi Chú</label>
                    <textarea
                      className="form-control"
                      name="note"
                      rows="3"
                    ></textarea>
                  </div>
                </form>

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
                  <a href="ds">
                    <button
                      type="submit"
                      className="btn btn-primary button-back"
                    >
                      <span>Quay về giỏ hàng</span>
                    </button>
                  </a>
                  <a href="ds">
                    <button
                      type="submit"
                      className="btn btn-primary  button-next"
                    >
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
