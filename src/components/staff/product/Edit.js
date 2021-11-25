import styles from "./Edit.module.css";
import MessageBox from "../../common/MessageBox/MessageBox";
import { useEffect, useState } from "react";
import productService from "../../../services/product.service";
import imageService from "../../../services/imageService";

export default function Edit(props) {
  const [submit, setSubmit] = useState(true);
  const [product, setProduct] = useState({ 
    brand: "",
    code: "",
    description: "",
    displayImage: null,
    displayImageName: "",
    id: null,
    imageNames: [],
    manufacturer: "",
    name: "",
    origin: "",
    originId: null,
    packingMethod: "",
    packingMethodId: null,
    price: null,
    productStatusId: null,
    quantity: null,
    shortDescription: "",
    size: "",
    status: "",
    weight: null,
  });
  const [origins, setOrigins] = useState([]);
  useEffect(() => {
    fetchProduct();
    retreiveOrigin();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function fetchProduct() {
    productService
      .getDetail(props.match.params.id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
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
        // console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onSubmit() {
    // var data = {
    //   code: code,
    //   name: name,
    //   price: price,
    //   size: size,
    //   weight: weight,
    //   manufacturer: manu,
    //   shortDes: short,
    //   images: imageFiles,
    //   des: des,
    //   brand: brand,
    //   originId: originId,
    //   packingMethodId: packingId,
    //   statusId: statusId,
    //   displayImage: imageFile,
    // };
    // productService
    //   .create(data)
    //   .then((res) => {
    //     console.log(res);
    //     setSubmit(false);
    //   })
    //   .catch((err) => {
    //     setSubmit(true);
    //   });
    console.log(product.originId);
    // setSubmit(false);
  }
  function onReturn() {
    props.history.push(props.match.path.split("/edit")[0]);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1 className={`title`}>Sửa sản phẩm</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.inputImage} ${styles.span31}`}>
          <input type="file" title="" />
          <img
            src={imageService.get(product.displayImageName)}
            alt="Không load được ảnh"
          />
        </div>
        <div className={`${styles.span12}`}>
          <h2 className={`label`}>Tên sản phẩm</h2>
          <input
            className={`input`}
            placeholder="Nhập tên sản phẩm"
            defaultValue={product.name}
            onChange={(e) => (product.name = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Mã sản phẩm</h2>
          <input
            className={`input`}
            placeholder="Nhập mã sản phẩm"
            defaultValue={product.code}
            onChange={(e) => (product.code = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Giá</h2>
          <input
            className={`input`}
            type="number"
            min="0"
            max="999999999"
            step="1000"
            placeholder="Nhập giá"
            defaultValue={product.price}
            onChange={(e) => (product.price = e.target.value)}
          />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Cân nặng(Kg)</h2>
          <input
            className={`input`}
            type="number"
            min="0"
            max="999999"
            step="1"
            placeholder="Nhập cân nặng"
            defaultValue={product.weight}
            onChange={(e) => (product.weight = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Kích thước</h2>
          <input
            className={`input`}
            placeholder="Nhập kích thước"
            defaultValue={product.size}
            onChange={(e) => (product.size = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.inputImages}`}>
          <h2 className={`label`}>Hình ảnh sản phẩm</h2>
          <input className={`input`} type="file" multiple />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Thương hiệu</h2>
          <input
            className={`input`}
            placeholder="Nhập tên thương hiệu"
            defaultValue={product.brand}
            onChange={(e) => (product.brand = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Nơi sản xuất</h2>
          <input
            className={`input`}
            placeholder="Nhập nơi sản xuất"
            defaultValue={product.manufacturer}
            onChange={(e) => (product.manufacturer = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Xuất xứ</h2>
          <select
            className={`input`}
            onChange={(e) => {
              product.originId = e.target.value;
              e.target.value = 3;
            }}
          >
            {origins.map((origin, index) => (
              <option className={`input`} key={index} value={origin.id}>
                {origin.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Phương thức đóng gói</h2>
          <select className={`input`}>
            {/* {packMethods.map((packing, index) => (
              <option key={index} value={packing.id}>
                {packing.name}
              </option>
            ))} */}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Trạng thái</h2>
          <select className={`input`}>
            {/* {statuses.map((status, index) => (
              <option key={index} value={status.id}>
                {status.name}
              </option>
            ))} */}
          </select>
        </div>
        <div className={`${styles.inputShort}`}>
          <h2 className={`label`}>Mô tả ngắn gọn</h2>
          <textarea
            className={`input`}
            placeholder="Nhập mô tả ngắn gọn"
            defaultValue={product.shortDescription}
            onChange={(e) => (product.shortDescription = e.target.value)}
          ></textarea>
        </div>
        <div className={`${styles.inputDes}`}>
          <h2 className={`label`}>Mô tả đầy đủ</h2>
          <textarea
            className={`input`}
            placeholder="Nhập mô tả chi tiết về sản phẩm"
            defaultValue={product.description}
            onChange={(e) => (product.description = e.target.value)}
          ></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={`label`} onClick={onSubmit}>
            Cập nhật
          </button>
          <button className={`label`} onClick={onReturn}>
            Quay lại
          </button>
        </div>
      </div>
      {!submit ? <MessageBox onClick={onReturn} /> : ""}
    </div>
  );
}
