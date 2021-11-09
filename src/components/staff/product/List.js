import React, { Component } from "react";
import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import productService from "../../../services/product.service";
import Pagination from "../../common/Pagination/Pagination";
export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.onClickCreateProduct = this.onClickCreateProduct.bind(this);
    this.onClickReadProduct = this.onClickReadProduct.bind(this);
    this.onClickEditProduct = this.onClickEditProduct.bind(this);
    this.onClickDeleteProduct = this.onClickDeleteProduct.bind(this);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.retrieveProducts();
  }
  retrieveProducts() {
    productService
      .search("", 1, 9)
      .then((res) => {
        this.setState({
          products: res.data.list,
        });
        console.log(res.data.list);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  onClickCreateProduct() {
    this.props.history.push(this.props.match.path + "/create");
  }
  onClickReadProduct(id) {
    this.props.history.push(this.props.match.path + "/detail/" + id);
  }
  onClickEditProduct(id) {
    this.props.history.push(this.props.match.path + "/edit/" + id);
  }
  onClickDeleteProduct() {
    console.log(this.props.match.path + "/delete");
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <h1>Danh sách sản phẩm</h1>
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.searchBox}`}>
            <input
              className={`${styles.searchInput}`}
              placeholder="Tìm kiếm sản phẩm"
            ></input>
            <button className={`${styles.searchButton}`}>
              <FontAwesomeIcon
                className={`${styles.searchIcon}`}
                icon={faSearch}
              ></FontAwesomeIcon>
            </button>
          </div>
          <button
            className={`${styles.btnAdd}`}
            onClick={this.onClickCreateProduct}
          >
            Thêm sản phẩm
          </button>
          <div className={styles.tbbb}>
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Mã</th>
                  <th>Giá(VND)</th>
                  <th>Số lượng</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
                {this.state.products.map((product, index) => (
                  <tr
                    className={`${index % 2 === 1 ? styles.grey : ""}`}
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.status}</td>
                    <td>
                      <div>
                        <button
                          onClick={() => this.onClickReadProduct(product.id)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button
                          onClick={() => this.onClickEditProduct(product.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={this.onClickDeleteProduct}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination className={styles.pagingBox} />
      </div>
    );
  }
}
