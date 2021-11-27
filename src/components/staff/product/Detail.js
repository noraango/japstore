import { useEffect, useState } from "react";
import imageService from "../../../services/imageService";
import productService from "../../../services/product.service";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const [product, setProduct] = useState({
    id: null,
    code: "",
    name: "",
    price: null,
    size: "",
    weight: null,
    manufacturer: "",
    shortDescription: "",
    description: "",
    brand: "",
    origin: "",
    packingMethod: "",
    displayImageName: "",
  });
  useEffect(() => {
    fetchProduct();
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
  function onReturn() {
    props.history.push(props.match.path.split("/detail")[0]);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1 className={`title`}>Xem sản phẩm</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.inputImage} ${styles.span31}`}>
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
            value={product.name}
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Mã sản phẩm</h2>
          <input
            className={`input`}
            disabled
            value={product.code}
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
            value={product.price ? product.price : 0}
            step="1000"
            disabled
          />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Cân nặng</h2>
          <input
            className={`input`}
            placeholder="Nhập cân nặng"
            type="number"
            min="0"
            value={product.weight ? product.weight : 0}
            max="999999"
            step="1"
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Kích thước</h2>
          <input
            className={`input`}
            value={product.size}
            placeholder="Nhập kích thước"
            disabled
          ></input>
        </div>
        <div className={`${styles.inputImages}`}>
          <h2 className={`label`}>Hình ảnh sản phẩm</h2>
          <input className={`input`} type="file" multiple disabled />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Thương hiệu</h2>
          <input
            className={`input`}
            value={product.brand}
            placeholder="Nhập tên thương hiệu"
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Nơi sản xuất</h2>
          <input
            className={`input`}
            value={product.manufacturer}
            placeholder="Nhập nơi sản xuất"
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Xuất xứ</h2>
          <input
            className={`input`}
            placeholder="Xuất xứ"
            value={product.origin}
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Phương thức đóng gói</h2>
          <input
            className={`input`}
            placeholder="đóng gói"
            value={product.packingMethod}
            disabled
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Trạng thái</h2>
          <input
            className={`input`}
            placeholder="trạng thái"
            value={product.status}
            disabled
          ></input>
        </div>
        <div className={`${styles.inputShort}`}>
          <h2 className={`label`}>Mô tả ngắn gọn</h2>
          <textarea
            className={`input`}
            value={product.shortDescription}
            placeholder="Nhập mô tả ngắn gọn"
            disabled
          ></textarea>
        </div>
        <div className={`${styles.inputDes}`}>
          <h2 className={`label`}>Mô tả đầy đủ</h2>
          <textarea
            className={`input`}
            value={product.description}
            placeholder="Nhập mô tả chi tiết về sản phẩm"
            disabled
          ></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={`label`} onClick={onReturn}>
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
}
