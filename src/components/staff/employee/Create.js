import React, {  useState } from "react";
import styles from "./Create.module.css";
export default function CreateEmployee(props) {
  const [users, setusers] = useState({});
  console.log(users);
  
  const onSubmit = () => {
    console.log(users);
  }
 

  const onReturn = () => {
    props.history.goBack();
  }

  return (

    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <h1>Thêm nhân viên</h1>
      </div>
      <div className={`${styles.content}`}>

        <div className={`${styles.inputName}`}>
          <h2>Tên nhân viên</h2>
          <input
             onChange={(e) => {
              let tempuser = {...users,name : e.target.value } 
             setusers( tempuser);  
             }}

            placeholder="Nhập tên nhân viên"
          ></input>
        </div>
        <div className={`${styles.inputPhone}`}>
          <h2>Số Điện Thoại</h2>
          <input
            onChange ={(e) =>{
              let tempphone= {...users,phone : e.target.value}
              setusers(tempphone);
            }}
            placeholder="Nhập số điện thoại"></input>
        </div>
        <div className={`${styles.inputUsername}`}>
          <h2>Tên đăng nhập</h2>
          <input
              onChange ={(e) =>{
                let tempusername= {...users,username : e.target.value}
                setusers(tempusername);
              }}
            placeholder="Nhập tên đăng nhập"></input>
        </div>

        <div className={`${styles.inputPassword}`}>
          <h2>Mật khẩu</h2>
          <input
             onChange ={(e) =>{
              let temppass= {...users,password : e.target.value}
              setusers(temppass);
            }}
            placeholder="Nhập mật khẩu"></input>
        </div>

        <div className={`${styles.inputEmail}`}>
          <h2>Email</h2>
          <input
            placeholder="Nhập email"
            onChange ={(e) =>{
              let tempemail= {...users,email : e.target.value}
              setusers(tempemail);
            }}
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
           onChange ={(e) =>{
            let tempward= {...users,wardid : e.target.value}
            setusers(tempward);
            
          }}

          >
            <option value="1">Duy Tân</option>
            <option value="2">TP Việt Trì</option>
            <option value="3">Quận 7</option>
            <option value="4">Hoàng Văn Thụ</option>
          </select>
        </div>

        <div className={`${styles.inputDistrict}`}>
          <h2>Quận/Huyện</h2>
          <select
          onChange ={(e) =>{
            let tempdistrict= {...users,districtid : e.target.value}
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
          onChange ={(e) =>{
            let tempprovince= {...users,provinceid : e.target.value}
            setusers(tempprovince);
            
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
           onChange ={(e) =>{
             
            let imagetemp= {...users,avatar : URL.createObjectURL(e.target.files[0])}
            setusers(imagetemp);
           
          }}
          />
        {users && users.avatar &&
          <  img src={users.avatar} alt="Không load được ảnh" />
          }  
        </div>
        <div className={`${styles.inputAddress}`}>
          <h2>Địa chỉ</h2>
          <textarea
            placeholder="Nhập địa chỉ"
            onChange ={(e) =>{
              let tempaddress= {...users,address : e.target.value}
              setusers(tempaddress);
            }}
          ></textarea>
        </div>

        <button className={`${styles.btnAdd}`}
        onClick = {onSubmit}
        >
          Thêm nhân viên
        </button>

        <button className={`${styles.btnBack}`}
          onClick={onReturn}>Quay lại</button>
      </div>
    </div>
  );
}
