import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import "./ProductDetail.css";
import productService from "../../../services/product.service";
import ImageMagnifiers from "./../Image/ImageMagnifiers";
import ProductRate from "./ProductRate";
import { formatVND } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import { useHistory } from "react-router-dom";
export default function Detail(props) {
  /**
   * Create data
   */
  const [product, setProduct] = useState({
    id: null,
    code: "",
    name: "nike shoes",
    price: 230000,
    size: 14,
    weight: null,
    quantity: 0,
    manufacturer: "",
    shortDescription: "gdgfd dsda dsad",
    description:
      "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    brand: "nike",
    origin: "",
    packingMethod: "",
    imageNames: [],
  });

  const [number, setNumber] = useState(1);

  const [RatingList, setRatingList] = useState([
    {
      id: 1,
      imgLink: "/images/user.png",
      userName: "Vị dfdsfdsf sdfsdf sdfsdfst",
      rate: 5,
      comment:
        "sản phẩm tốt sản phẩm tố sản phẩm tố sản phẩm tốsản phẩm tốsản phẩm tốsản phẩm tốsản phẩm tốsản phẩm tố",
    },
    {
      id: 2,
      userName: "Vịt con",
      imgLink: "/images/user.png",
      rate: 2,
      comment: "sản phẩm tốt",
    },
  ]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  /**
   * Function
   */

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

  function incrementValue(e) {
    setNumber(number + 1);
  }

  function decrementValue(e) {
    if (number > 1) setNumber(number - 1);
  }

  function onBuyNowClick() {
    alert("buy now");
  }
  /**
   * View
   */
   let history = useHistory();
  function onClickAddCart() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      cartService
        .addCart(product.id, user.id, 1)
        .then((res) => {
          history.push("/cart");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log(props.data);
      var item = {
        id: product.id,
        name: product.name,
        displayImageName: "01.jpg",
        quantity: 1,
        price: product.price,
      };
      cartService.addItemToLocalCart(item);
    }
  }
  return (
    <div className={`container ${styles.container}`}>
      <h3 className={"product-name"}>{product.name}</h3>
      <div className={`row`}>
        <div
          className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 product-img`}
        >
          <ImageMagnifiers linkImage={product.imageNames} />
        </div>
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6`}>
          <div className={"product-infor"}>
            <div>
              <div className="total-rate">
                Đánh Giá : <span className={" red"}>{product.displayImageName}/5</span>
              </div>
              <p className={"brand"}>
                Thương hiệu: <span className={"name red"}>{product.brand}</span>
              </p>
              <p className={"brand"}>
                Tình trạng: <span className={"name green"}>Còn Hàng</span>
              </p>
            </div>
            <div>
              <h3 className={"price"}>{formatVND(product.price)}đ</h3>
              <p className={"description"}>Mô tả: {product.description}</p>
            </div>
            <div className="row">
              <h5 className="pb-3">
                Số lượng: hiện còn {product.quantity} sản phẩm
              </h5>
              <div className="col col-md-4 col-12">
                <div className="input-group">
                  <input
                    type="button"
                    value="-"
                    className="button-minus"
                    onClick={decrementValue}
                  />
                  <input
                    type="number"
                    step="1"
                    max=""
                    value={number}
                    className="quantity-field"
                    readOnly={true}
                  />
                  <input
                    type="button"
                    value="+"
                    className="button-plus"
                    onClick={incrementValue}
                  />
                </div>
              </div>
              <div className="col col-md-8 col-12 pt-2">
                <div className="buying-button">
                  <button
                    className="buyNow"
                    onClick={onBuyNowClick}
                    disabled={product.quantity < 1}
                  >
                    Mua ngay
                  </button>
                  <button className="addCart" onClick={onClickAddCart}>
                    thêm giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-rate">
        <div className="rate">
          <h3>Đánh giá của khách hàng</h3>
        </div>

        <div className="comment">
          <ProductRate ratingList={RatingList} />
        </div>
      </div>
    </div>
  );
}
