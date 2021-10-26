import React, { Component } from "react";
import productService from "../../../services/product.service";
import styles from "./Edit.module.css";
export default class Edit extends Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.header}`}>
          <h1>Sửa sản phẩm</h1>
        </div>
      </div>
    );
  }
}
