import React from 'react';

const NavBar = (props) => {
    return (
        <div className={`${styles.categoryContainer}`}>
        
        <button className={`${styles.itemButton}`} href="#/action-1">KHUYẾN MÃI</button>
        <button className={`${styles.itemButton}`} href="#/action-2">MẸ - BÉ</button>
        <button className={`${styles.itemButton}`} href="#/action-3">CHĂM SÓC SẮC ĐẸP</button>
        <button className={`${styles.itemButton}`} href="#/action-4">CHĂM SÓC SỨC KHỎE</button>
        <button className={`${styles.itemButton}`} href="#/action-5">NHÀ CỬA ĐỜI SỐNG</button>
        <button className={`${styles.itemButton}`} href="#/action-6">VĂN PHÒNG PHẨM</button>
      </div>
    );
};

export default NavBar;