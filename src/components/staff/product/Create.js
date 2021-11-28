import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Create.module.css";
import { isFileImage, path } from "../../../controller/constants";
import productService from "../../../services/product.service";
import MessageBox from "../../common/MessageBox/MessageBox";
export default function CreateProduct(prop) {
  let history = useHistory();
  const [statuses, setStatuses] = useState([]);
  const [packMethods, setPackMethods] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [imageFile, setImageFile] = useState(undefined);
  const [imageURL, setImageURL] = useState(path + "/images/upload.jpg");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [originId, setOriginId] = useState(null);
  const [packingId, setPackingId] = useState(null);
  const [statusId, setStatusId] = useState(null);
  const [brand, setBrand] = useState("");
  const [manu, setManu] = useState("");
  const [short, setShort] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [des, setDes] = useState("");
  const [submit, setSubmit] = useState(true);
  useEffect(() => {
    retreiveStatus();
    retreivePacking();
    retreiveOrigin();
  }, []);
  function onChangeImage(e) {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeCode(e) {
    setCode(e.target.value);
  }
  function onChangePrice(e) {
    setPrice(e.target.value);
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
  function onChangeShort(e) {
    setShort(e.target.value);
  }
  function onChangeImages(e) {
    if (e.target.files) {
      let files = Array.from(e.target.files);
      if (isFileImage(files)) {
        setImageFiles(files);
        // console.log("Input images ngon");
      } else {
        console.log("Input images fail");
      }
    }
  }
  function onChangeDes(e) {
    setDes(e.target.value);
  }
  function onReturn() {
    history.push(prop.match.path.replace("/create", ""));
  }
  function retreiveStatus() {
    productService
      .getStatus()
      .then((res) => {
        setStatuses(res.data);
        setStatusId(res.data[0].id);
        // console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function retreivePacking() {
    productService
      .getPacking()
      .then((res) => {
        setPackMethods(res.data);
        setPackingId(res.data[0].id);
        // console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function retreiveOrigin() {
    productService
      .getOrgin()
      .then((res) => {
        setOrigins(res.data);
        setOriginId(res.data[0].id);
        // console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onSubmit() {
    var data = {
      code: code,
      name: name,
      price: price,
      size: size,
      weight: weight,
      manufacturer: manu,
      shortDes: short,
      images: imageFiles,
      des: des,
      brand: brand,
      originId: originId,
      packingMethodId: packingId,
      statusId: statusId,
      displayImage: imageFile,
    };

    productService
      .create(data)
      .then((res) => {
        console.log(res);
        setSubmit(false);
      })
      .catch((err) => {
        setSubmit(true);
      });
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1 className={`title`}>Thêm sản phẩm</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.inputImage} ${styles.span31}`}>
          <input type="file" title="" onChange={onChangeImage} />
          <img src={`${imageURL}`} alt="Không load được ảnh" />
        </div>
        <div className={`${styles.span12}`}>
          <h2 className={`label`}>
            Tên sản phẩm <span className={`error`}>*</span>
          </h2>
          <input
            className={`input`}
            onChange={onChangeName}
            placeholder="Nhập tên sản phẩm"
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Mã sản phẩm</h2>
          <input
            className={`input`}
            onChange={onChangeCode}
            placeholder="Nhập mã sản phẩm"
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Giá</h2>
          <input
            className={`input`}
            placeholder="Nhập giá"
            type="number"
            min="0"
            max="999999999"
            step="1000"
            onChange={onChangePrice}
          />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Cân nặng</h2>
          <input
            className={`input`}
            placeholder="Nhập cân nặng"
            type="number"
            min="0"
            max="999999"
            step="1"
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Kích thước</h2>
          <input
            className={`input`}
            placeholder="Nhập kích thước"
            onChange={(e) => setSize(e.target.value)}
          ></input>
        </div>
        <div className={`${styles.inputImages}`}>
          <h2 className={`label`}>Hình ảnh sản phẩm</h2>
          <input
            className={`input`}
            type="file"
            multiple
            onChange={onChangeImages}
          />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Thương hiệu</h2>
          <input
            className={`input`}
            placeholder="Nhập tên thương hiệu"
            onChange={onChangeBrand}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Nơi sản xuất</h2>
          <input
            className={`input`}
            placeholder="Nhập nơi sản xuất"
            onChange={onChangeManu}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Xuất xứ</h2>
          <select className={`input`} onChange={onChangeOrigin}>
            {origins.map((origin, index) => (
              <option className={`input`} key={index} value={origin.id}>
                {origin.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Phương thức đóng gói</h2>
          <select className={`input`} onChange={onChangePacking}>
            {packMethods.map((packing, index) => (
              <option key={index} value={packing.id}>
                {packing.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Trạng thái</h2>
          <select
            className={`input`}
            onChange={(e) => setStatusId(e.target.value)}
          >
            {statuses.map((status, index) => (
              <option key={index} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.inputShort}`}>
          <h2 className={`label`}>Mô tả ngắn gọn</h2>
          <textarea
            className={`input`}
            placeholder="Nhập mô tả ngắn gọn"
            onChange={onChangeShort}
          ></textarea>
        </div>
        <div className={`${styles.inputDes}`}>
          <h2 className={`label`}>Mô tả đầy đủ</h2>
          <textarea
            className={`input`}
            placeholder="Nhập mô tả chi tiết về sản phẩm"
            onChange={onChangeDes}
          ></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={`label`} onClick={onSubmit}>
            Thêm sản phẩm
          </button>
          <button className={`label`} onClick={onReturn}>
            Quay lại
          </button>
        </div>
      </div>
      {!submit ? <MessageBox content={`Thêm đơn hàng thành công`} onClick={onReturn} /> : ""}
    </div>
  );
}
