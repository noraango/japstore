import React, { Component } from "react";
import productService from "../../../services/product.service";
import styles from "./Edit.module.css";
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
    this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangePakingMethod = this.onChangePakingMethod.bind(this);
    this.onReturn = this.onReturn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      product: {
        id: null,
        code: "",
        name: "",
        price: null,
        size: null,
        quantity: null,
        brand: null,
        manufacturer: null,
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
  onChangeCode(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        code: value,
      },
    }));
  }
  onChangePrice(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        price: value,
      },
    }));
  }
  onChangeQuantity(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        quantity: value,
      },
    }));
  }

  onChangeBrand(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        brand: value,
      },
    }));
  }
  onChangeManufacturer(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        manufacturer: value,
      },
    }));
  }
  onChangeShortDescription(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        shortDescription: value,
      },
    }));
  }

  onChangeDescription(e) {
    let value = e.target.value;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        description: value,
      },
    }));
  }
  onChangeOrigin(e) {
    this.setState((prev) => ({
      product: {
        ...prev.product,
        originId: e.target.value,
      },
    }));
  }

  onChangePakingMethod(e) {
    this.setState((prev) => ({
      product: {
        ...prev.product,
        packingMethodId: e.target.value,
      },
    }));
  }

  onChangeImage(e) {
    this.setState((prev) => ({
      product: {
        ...prev.product,
        displayImage: URL.createObjectURL(e.target.files[0]),
      },
    }));
  }

  onSubmit() {
    productService.update(this.state.product);
    console.log(this.state.product);
  }
  onReturn() {
    this.props.history.goBack();
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
              onChange={this.onChangeCode}
            ></input>
          </div>
          <div className={`${styles.inputPrice}`}>
            <h2>Giá</h2>
            <input
              defaultValue={this.state.product.price}
              placeholder="Nhập giá"
              type="number"
              min="0"
              max="999999999"
              step="1000"
              onChange={this.onChangePrice}
            ></input>
          </div>
          <div className={`${styles.inputQuantity}`}>
            <h2>Số lượng</h2>

            <input
              defaultValue={this.state.product.quantity}
              placeholder="Nhập số lượng"
              type="number"
              min="0"
              max="999999"
              step="1"
              onChange={this.onChangeQuantity}
            ></input>
          </div>
          <div className={`${styles.inputOrigin}`}>
            <h2>Xuất xứ</h2>
            {this.state.product.originId && (
              <select
                defaultValue={this.state.product.originId}
                onChange={this.onChangeOrigin}
              >
                <option value="1">Nhật Bản</option>
                <option value="2">Trung Quốc</option>
                <option value="3">Việt Nam</option>
              </select>
            )}
          </div>
          <div className={`${styles.inputPacking}`}>
            <h2>Phương thức đóng gói</h2>
            {this.state.product.packingMethodId && (
              <select
                defaultValue={this.state.product.packingMethodId}
                onChange={this.onChangePakingMethod}
              >
                <option value="1">Hộp 250ml</option>
                <option value="2">Thùng 24 lon</option>
                <option value="3">Chai 750ml</option>
                <option value="4">Hộp 30cm x 30cm x 30cm</option>
              </select>
            )}
          </div>
          <div className={`${styles.inputBrand}`}>
            <h2>Thương hiệu</h2>
            <input
              defaultValue={this.state.product.brand}
              placeholder="Nhập tên thương hiệu"
              onChange={this.onChangeBrand}
            ></input>
          </div>
          <div className={`${styles.inputManu}`}>
            <h2>Nơi sản xuất</h2>
            <input
              defaultValue={this.state.product.manufacturer}
              placeholder="Nhập nơi sản xuất"
              onChange={this.onChangeManufacturer}
            ></input>
          </div>
          <div className={`${styles.inputImage}`}>
            <input type="file" title="" onChange={this.onChangeImage} />
            <img
              src={this.state.product.displayImage}
              alt="Không load được ảnh"
            />
          </div>
          <div className={`${styles.inputShort}`}>
            <h2>Mô tả ngắn gọn</h2>
            <textarea
              defaultValue={this.state.product.shortDescription}
              placeholder="Nhập mô tả ngắn gọn"
              onChange={this.onChangeShortDescription}
            ></textarea>
          </div>
          <div className={`${styles.inputDes}`}>
            <h2>Mô tả đầy đủ</h2>
            <textarea
              defaultValue={this.state.product.description}
              placeholder="Nhập mô tả chi tiết về sản phẩm"
              onChange={this.onChangeDescription}
            ></textarea>
          </div>
          <button className={`${styles.btnAdd}`} onClick={this.onSubmit}>
            Chỉnh sửa sản phẩm
          </button>
          <button className={`${styles.btnBack}`} onClick={this.onReturn}>Quay lại</button>
        </div>
      </div>
    );
  }
}
