import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Create.module.css";
import { path } from "../../../controller/constants";
import productService from "../../../services/product.service";
export default function CreateProduct(prop) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [originId, setOriginId] = useState(null);
  const [packingId, setPackingId] = useState(null);
  const [brand, setBrand] = useState("");
  const [manu, setManu] = useState("");
  const [imageURL, setImageURL] = useState(path + "/images/upload.jpg");
  const [short, setShort] = useState("");
  const [des, setDes] = useState("");
  const [submit, setSubmit] = useState(true);
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeCode(e) {
    setCode(e.target.value);
  }
  function onChangePrice(e) {
    setPrice(e.target.value);
  }
  function onChangeQuantity(e) {
    setQuantity(e.target.value);
  }
  function onChangeOrigin(e) {
    setOriginId(e.target.value);
  }
  function onChangePacking(e) {
    setPackingId(e.target.value);
  }
  function onChangeBrand(e) {
    setBrand(e.target.value);
  }
  function onChangeManu(e) {
    setManu(e.target.value);
  }
  function onChangeImage(e) {
    if (e.target.files && e.target.files[0]) {
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  }
  function onChangeShort(e) {
    setShort(e.target.value);
  }
  function onChangeDes(e) {
    setDes(e.target.value);
  }
  function onReturn() {
    history.push(prop.match.path.replace("/create", ""));
  }
  function onSubmit() {
    var data = {
      code: code,
      name: name,
      price: price,
      quantity: quantity,
      originId: originId,
      packingMethodId: packingId,
      shortDescription: short,
      description: des,
      manufacturer: manu,
      brand: brand,
      displayImage: imageURL,
    };
    productService
      .create(data)
      .then((res) => {
        console.log(res);
        setSubmit(true);
      })
      .catch((err) => {
        console.log(submit);
      });
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1>Thêm sản phẩm</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.inputName}`}>
          <h2>Tên sản phẩm</h2>
          <input
            onChange={onChangeName}
            placeholder="Nhập tên sản phẩm"
          ></input>
        </div>
        <div className={`${styles.inputCode}`}>
          <h2>Mã sản phẩm</h2>
          <input onChange={onChangeCode} placeholder="Nhập mã sản phẩm"></input>
        </div>
        <div className={`${styles.inputPrice}`}>
          <h2>Giá</h2>
          <input
            placeholder="Nhập giá"
            type="number"
            min="0"
            max="999999999"
            step="1000"
            onChange={onChangePrice}
          />
        </div>
        <div className={`${styles.inputQuantity}`}>
          <h2>Số lượng</h2>
          <input
            placeholder="Nhập số lượng"
            type="number"
            min="0"
            max="999999"
            step="1"
            onChange={onChangeQuantity}
          ></input>
        </div>
        <div className={`${styles.inputOrigin}`}>
          <h2>Xuất xứ</h2>
          <select onChange={onChangeOrigin}>
            <option value="1">Nhật Bản</option>
            <option value="2">Trung Quốc</option>
            <option value="3">Việt Nam</option>
          </select>
        </div>
        <div className={`${styles.inputPacking}`}>
          <h2>Phương thức đóng gói</h2>
          <select onChange={onChangePacking}>
            <option value="1">Hộp 250ml</option>
            <option value="2">Thùng 24 lon</option>
            <option value="3">Chai 750ml</option>
            <option value="4">Hộp 30cm x 30cm x 30cm</option>
          </select>
        </div>
        <div className={`${styles.inputBrand}`}>
          <h2>Thương hiệu</h2>
          <input
            placeholder="Nhập tên thương hiệu"
            onChange={onChangeBrand}
          ></input>
        </div>
        <div className={`${styles.inputManu}`}>
          <h2>Nơi sản xuất</h2>
          <input
            placeholder="Nhập nơi sản xuất"
            onChange={onChangeManu}
          ></input>
        </div>
        <div className={`${styles.inputImage}`}>
          <input type="file" title="" onChange={onChangeImage} />
          <img src={`${imageURL}`} alt="Không load được ảnh" />
        </div>
        <div className={`${styles.inputShort}`}>
          <h2>Mô tả ngắn gọn</h2>
          <textarea
            placeholder="Nhập mô tả ngắn gọn"
            onChange={onChangeShort}
          ></textarea>
        </div>
        <div className={`${styles.inputDes}`}>
          <h2>Mô tả đầy đủ</h2>
          <textarea
            placeholder="Nhập mô tả chi tiết về sản phẩm"
            onChange={onChangeDes}
          ></textarea>
        </div>
        <button className={`${styles.btnAdd}`} onClick={onSubmit}>
          Thêm sản phẩm
        </button>
        <button className={`${styles.btnBack}`} onClick={onReturn}>
          Quay lại
        </button>
      </div>
    </div>
  );
}
