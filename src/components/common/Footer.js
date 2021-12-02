import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  var path = process.env.PUBLIC_URL + "/images";
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.containerMid}`}>
        <div className={`${styles.mid}`}>
          <div className={`${styles.colLeft}`}>
            <a href="/">
              <img src={path + "/logo-2.png"} alt="text" />
            </a>
          </div>
          <div className={`${styles.colMid}`}>
            <h1>HỖ TRỢ KHÁCH HÀNG</h1>
            <h2>Hướng dẫn mua hàng</h2>
            <h2>Hướng dẫn thanh toán</h2>
          </div>
          <div className={`${styles.colMid}`}>
            <h1>CHÍNH SÁCH CHUNG</h1>
            <h2>Chính sách mua bán</h2>
            <h2>Chính sách vận chuyển</h2>
          </div>
          <div className={`${styles.colRight}`}>
            <h1>THÔNG TIN KHUYẾN MÃI</h1>
            <h2>Sản phẩm khuyến mãi</h2>
            <h2>Sản phẩm bán chạy</h2>
          </div>
        </div>
      </div>
      <div className={`${styles.containerBot}`}>
        <div className={`${styles.bot}`}>
          <p className={`colLeft`}>
            ©2021 Công ty Cổ phần đầu tư công nghệ HACOM
          </p>
          <p className={`colRight`}>
            Địa chỉ: Số 129 + 131, phố Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai
            Bà Trưng, Hà Nội
          </p>
          <p className={`colLeft`}>
            GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001
          </p>
          <p className={`colRight`}>
            Email: info@hacom.vn. Điện thoại: 1900 1903
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
