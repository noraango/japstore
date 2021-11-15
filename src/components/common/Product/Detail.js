import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import "./ProductDetail.css";
import productService from "../../../services/product.service";
import ImageMagnifiers from "./../Image/ImageMagnifiers";
import ProductRate from "./ProductRate";
import ReactStars from "react-rating-stars-component";
import Modal from "react-modal";

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
    displayImageName: ["/images/inke.jpg", ""],
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
    //fetchProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function fetchProduct() {
    productService
      .getDetail(props.match.params.id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        console.log(product);
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

  function onAddCartClick() {
    alert("add cart now");
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  /**
   * View
   */

  return (
    <div className={`container ${styles.container}`}>
      <h3 className={"product-name"}>{product.name}</h3>
      <div className={`row`}>
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 `}>
          <ImageMagnifiers linkImage={"/images/nike.jpg"} />
        </div>
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6`}>
          <div className={"product-infor"}>
            <div>
              <div className="total-rate">
                Đánh Giá : <span className={" red"}>5/5</span>
              </div>
              <p className={"brand"}>
                Thương hiệu: <span className={"name red"}>{product.brand}</span>
              </p>
              <p className={"brand"}>
                Tình trạng: <span className={"name green"}>Còn Hàng</span>
              </p>
            </div>
            <div>
              <h3 className={"price"}>{product.price}</h3>
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
                  <button className="addCart" onClick={onAddCartClick}>
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
          <button className="add-comment" onClick={openModal}>
            Thêm Nhận Xét
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Thêm Nhận Xét</h2>
              <button onClick={closeModal}>X</button>
            </div>
            <form>
              <ReactStars count={5} edit={true} size={24} color={"#b1b148"} />
              <input />
              <button onClick={closeModal}>X</button>
            </form>
          </Modal>
        </div>

        <div className="comment">
          <ProductRate ratingList={RatingList} />
        </div>
      </div>
    </div>
  );
}
