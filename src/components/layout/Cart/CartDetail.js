import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { formatVND } from "../../../controller/constants";
import cartService from "../../../services/cartService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import imageService from "../../../services/imageService";
import { useHistory } from "react-router";
import authService from "../../../services/auth.Service";
import { connect } from "react-redux";
import { GetNumberCart } from "../../../actions";
function CartDetail(props) {
  let user = authService.getUser();
  const minQuantity = 1,
    maxQuantity = 99;
  const [cartitems, setCartitems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  useEffect(() => {
    retrieveCartItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function onSubQuantity(cartItem) {
    let productId = cartItem.id;
    let quantity = cartItem.quantity;
    quantity = quantity > minQuantity ? quantity - 1 : quantity;
    if (!user) {
      cartService.updateLocalCartItem(cartItem, quantity);
      retrieveCartItems();
      let cartAmount = cartService.updateCartAmount(-1);
      props.getCartAmount(cartAmount);
    } else {
      updateQuantity(productId, quantity, true);
    }
  }
  function onAddQuantity(cartItem) {
    let productId = cartItem.id;
    let quantity = cartItem.quantity;
    quantity = quantity < maxQuantity ? quantity + 1 : quantity;
    if (!user) {
      cartService.updateLocalCartItem(cartItem, quantity);
      retrieveCartItems();
      let cartAmount = cartService.updateCartAmount(1);
      props.getCartAmount(cartAmount);
    } else {
      updateQuantity(productId, quantity, false);
    }
  }
  function retrieveCartItems() {
    if (user) {
      cartService
        .getCartDetail(props.cart.id)
        .then((res) => {
          setCartitems(res.data);
          let sum = 0;
          res.data.forEach((e) => {
            sum += e.price * e.quantity;

            console.log(e);
          });
          setTotalPrice(sum);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      let cartData = JSON.parse(localStorage.getItem("cart" + props.cart));
      setCartitems(cartData);
      let sum = 0;
      cartData.forEach((e) => {
        sum += e.price * e.quantity;
      });
      setTotalPrice(sum);
    }
  }
  function updateQuantity(productId, quantity, up) {
    if (user) {
      cartService
        .updateCartItem(productId, user.id, quantity)
        .then((res) => {
          retrieveCartItems();
          if (up) {
            let cartAmount = cartService.updateCartAmount(-1);
            props.getCartAmount(cartAmount);
          } else {
            let cartAmount = cartService.updateCartAmount(1);
            props.getCartAmount(cartAmount);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  function onClickDeleteCartItem(cartItem) {
    let cartAmount = localStorage.getItem("cartAmount");
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      cartService
        .deleteCartItem(cartItem.id, props.cart.id, user.id)
        .then((res) => {
          retrieveCartItems();
          localStorage.setItem(
            "cartAmount",
            parseInt(cartAmount) - cartItem.quantity
          );
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      cartService.deleteLocalCartItem(cartItem);
      cartAmount = cartService.updateCartAmount(-cartItem.quantity);
      props.getCartAmount(cartAmount);
      retrieveCartItems();
    }
  }
  function redirectPayment() {
    history.push("/payment/" + props.cart.id);
  }
  return (
    <div>
      {cartitems.length > 0 ? (
        <div
          className={`${styles.content}`}
          style={{ borderBottom: "1px solid", paddingBottom: "30px" }}
        >
          <p className={`${styles.totalPrice}`}>
            Tổng tiền:{" "}
            <span className={styles.price}>{formatVND(totalPrice)}đ</span>
          </p>
          <button className={`${styles.btnAdd}`} onClick={redirectPayment}>
            Thanh toán
          </button>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Giá bán lẻ</th>
                <th>Số lượng </th>
                <th>Tổng tiền</th>
                <th>Xóa</th>
              </tr>
              {cartitems.map((cartitem, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.imgContainer}>
                      <img
                        src={imageService.get(cartitem.displayImageName)}
                        alt="Hình ảnh"
                      />
                    </div>
                  </td>
                  <td>{cartitem.name}</td>
                  <td className={styles.price}>{formatVND(cartitem.price)}đ</td>
                  <td>
                    <div className={styles.quantityContainer}>
                      <button
                        className={styles.btnSub}
                        onClick={() => onSubQuantity(cartitem)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <button className={styles.btnDisplay}>
                        {cartitem.quantity}
                      </button>
                      <button
                        className={styles.btnAdd}
                        onClick={() => onAddQuantity(cartitem)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className={styles.price}>
                    {formatVND(cartitem.quantity * cartitem.price)}đ
                  </td>
                  <td>
                    <button onClick={() => onClickDeleteCartItem(cartitem)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCartAmount: (cartAmount) => dispatch(GetNumberCart(cartAmount)),
  };
};
export default connect(null, mapDispatchToProps)(CartDetail);
