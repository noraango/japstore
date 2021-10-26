import React, { Component } from "react";
import productService from "../../../services/product.service";
import styles from "./Edit.module.css";
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      product: {
        id: null,
        code: "",
        name: "",
        price: null,
        size: null,
        quantity: null,
        originId: null,
        packingMethodId: null,
        shortDescription: "",
        description: "",
        displayImage: "",
      },
    };
  }
  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    let product = productService.get(id);
    this.setState({
      product: product,
    });
  }
  onChangeName(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        name: value,
      },
    }));
  }
  onSubmit() {
    productService.update(this.state.product);
    console.log(this.state.product);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.header}`}>
          <h1>Sửa sản phẩm</h1>
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.inputName}`}>
            <h2>Tên sản phẩm</h2>
            <input
              defaultValue={this.state.product.name}
              placeholder="Nhập tên sản phẩm"
              onChange={this.onChangeName}
            ></input>
          </div>
          <div className={`${styles.inputCode}`}>
            <h2>Mã sản phẩm</h2>
            <input
              defaultValue={this.state.product.code}
              placeholder="Nhập mã sản phẩm"
            ></input>
          </div>
          <div className={`${styles.inputPrice}`}>
            <h2>Giá</h2>
            <input
              placeholder="Nhập giá"
              type="number"
              min="0"
              max="999999999"
              step="1000"
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
            ></input>
          </div>
          <div className={`${styles.inputOrigin}`}>
            <h2>Xuất xứ</h2>
            <select defaultValue={2}>
              <option value="1">Nhật Bản</option>
              <option value="2">Trung Quốc</option>
              <option value="3">Việt Nam</option>
            </select>
          </div>
          <div className={`${styles.inputPacking}`}>
            <h2>Phương thức đóng gói</h2>
            <select>
              <option value="1">Hộp 250ml</option>
              <option value="2">Thùng 24 lon</option>
              <option value="3">Chai 750ml</option>
              <option value="4">Hộp 30cm x 30cm x 30cm</option>
            </select>
          </div>
          <div className={`${styles.inputBrand}`}>
            <h2>Thương hiệu</h2>
            <input placeholder="Nhập tên thương hiệu"></input>
          </div>
          <div className={`${styles.inputManu}`}>
            <h2>Nơi sản xuất</h2>
            <input placeholder="Nhập nơi sản xuất"></input>
          </div>
          <div className={`${styles.inputImage}`}>
            <input type="file" title="" />
            <img
              src={this.state.product.displayImage}
              alt="Không load được ảnh"
            />
          </div>
          <div className={`${styles.inputShort}`}>
            <h2>Mô tả ngắn gọn</h2>
            <textarea placeholder="Nhập mô tả ngắn gọn"></textarea>
          </div>
          <div className={`${styles.inputDes}`}>
            <h2>Mô tả đầy đủ</h2>
            <textarea placeholder="Nhập mô tả chi tiết về sản phẩm"></textarea>
          </div>
          <button className={`${styles.btnAdd}`} onClick={this.onSubmit}>
            Chỉnh sửa sản phẩm
          </button>
          <button className={`${styles.btnBack}`}>Quay lại</button>
        </div>
      </div>
    );
  }
}
