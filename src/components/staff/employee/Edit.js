import React, { useEffect } from "react";
import styles from "./Edit.module.css";
import { useState } from "react";
import userService from "../../../services/user.service";

export default function CreateEmployee(props) {
    const [users, setusers] = useState({});




    const onSubmit = () => {
        console.log(users);
    }


    useEffect(() => {

        setusers(userService.get(parseInt(props.match.params.userid)));

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function onReturn() {
        props.history.goBack();
    }
    return (

        <div className={styles.container}>
            <div className={`${styles.header}`}>
                <h1>Sửa nhân viên</h1>
            </div>
            <div className={`${styles.content}`}>

                <div className={`${styles.inputName}`}>

                    <h2>Tên nhân viên</h2>
                    <input
                        defaultValue={users.name}
                        onChange={(e) => {
                            let tempuser = { ...users, name: e.target.value }
                            setusers(tempuser);
                        }}
                        placeholder="Nhập tên nhân viên"
                    ></input>
                </div>
                <div className={`${styles.inputPhone}`}>
                    <h2>Số Điện Thoại</h2>
                    <input
                        defaultValue={users.phone}
                        onChange={(e) => {
                            let tempphone = { ...users, phone: e.target.value }
                            setusers(tempphone);
                        }}

                        placeholder="Nhập số điện thoại"></input>
                </div>
                <div className={`${styles.inputUsername}`}>
                    <h2>Tên đăng nhập</h2>
                    <input
                        defaultValue={users.username}
                        onChange={(e) => {
                            let tempusername = { ...users, username: e.target.value }
                            setusers(tempusername);
                        }}

                        placeholder="Nhập tên đăng nhập"></input>
                </div>

                <div className={`${styles.inputPassword}`}>
                    <h2>Mật khẩu</h2>
                    <input
                        defaultValue={users.password}
                        onChange={(e) => {
                            let temppass = { ...users, password: e.target.value }
                            setusers(temppass);
                        }}
                        placeholder="Nhập mật khẩu"></input>
                </div>

                <div className={`${styles.inputEmail}`}>
                    <h2>Email</h2>
                    <input
                        defaultValue={users.email}
                        onChange={(e) => {
                            let tempemail = { ...users, email: e.target.value }
                            setusers(tempemail);
                        }}
                        placeholder="Nhập email"

                    ></input>
                </div>

                <div className={`${styles.inputVilage}`}>
          <h2>Khu/Phường</h2>
          <select
           onChange ={(e) =>{
            let tempvillage= {...users,village : e.target.value}
            setusers(tempvillage);
            
          }}

          >
            <option value="1">Duy Tân123</option>
            <option value="2">Gia Cẩm</option>
            <option value="3">Quận 734</option>
            <option value="4">Hoàng Văn Thụ1</option>
          </select>
        </div>

                <div className={`${styles.inputWard}`}>
                    <h2>Xã/Thị trấn</h2>
                    <select
                        defaultValue={users.ward}
                        onChange={(e) => {
                            let tempward = { ...users, ward: e.target.value }
                            setusers(tempward);
                        }}
                    >
                        <option value="1">Duy Tân</option>
                        <option value="2">Gia Cẩm</option>
                        <option value="3">Quận 7</option>
                        <option value="3">Hoàng Văn Thụ</option>
                    </select>
                </div>
                <div className={`${styles.inputDistrict}`}>
                    <h2>Quận/Huyện</h2>
                    <select
                        defaultValue={users.district}
                        onChange={(e) => {
                            let tempdistrict = { ...users, district: e.target.value }
                            setusers(tempdistrict);
                        }}
                    >
                        <option value="1">Cầu Giấy</option>
                        <option value="2">Việt Trì</option>
                        <option value="3">Quận 7 2</option>
                        <option value="4">Hồng Bàng</option>
                    </select>
                </div>

                <div className={`${styles.inputProvince}`}>
                    <h2>Tỉnh/Thành phố</h2>
                    <select
                        defaultValue={users.province}
                        onChange={(e) => {
                            let temppovince = { ...users, province: e.target.value }
                            setusers(temppovince);
                        }}
                    >
                        <option value="1">Hà Nội</option>
                        <option value="2">Phú Thọ</option>
                        <option value="3">TPHCM</option>
                        <option value="4">Hải Phòng</option>
                    </select>
                </div>

                <div className={`${styles.inputImage}`}>
                    <input type="file" title=""
                        onChange={(e) => {

                            let imagetemp = { ...users, avatar: URL.createObjectURL(e.target.files[0]) }
                            setusers(imagetemp);


                        }}
                    />
                    < img src={users.avatar} alt="Không load được ảnh" />
                </div>
                <div className={`${styles.inputAddress}`}>
                    <h2>Địa chỉ</h2>
                    <textarea
                        defaultValue={users.address}
                        onChange={(e) => {
                            let tempaddress = { ...users, address: e.target.value }
                            setusers(tempaddress);
                        }}

                        placeholder="Nhập địa chỉ"

                    ></textarea>
                </div>

                <button className={`${styles.btnAdd}`}
                    onClick={onSubmit}
                >
                    Sửa nhân viên
                </button>

                <button className={`${styles.btnBack}`} onClick={onReturn}>Quay lại</button>
            </div>
        </div>
    );
}
