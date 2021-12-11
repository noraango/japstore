import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import app from "../../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CategoryBar from "./CategoryBar/CategoryBar";
import { useState } from "react";
import { connect } from "react-redux";
function Header(props) {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  let amoutnCart = JSON.parse(localStorage.getItem('cartAmount'));
  let path = process.env.PUBLIC_URL + "/images";
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  function onChangeSearchText(e) {
    setSearchText(e.target.value);
  }
  function onEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmitSearch();
    }
  }
  function onSubmitSearch(e) {
    history.push("/search/" + searchText);
    window.location.reload();
  }
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("User");
    window.location.reload();
    toHome();
  }
  function redirectStaff() {
    history.push("/staff/product");
  }
  function redirectOrder() {
    history.push("/order");
  }
  function onClickCart() {
    history.push("/cart");
  }
  function redirectUser() {
    history.push("/user");
  }
  function toHome() {
    history.push("/");
  }
  function redirectGetOrder() {
    history.push("/getOrder");
  }
  function redirectShipping() {
    history.push("/shipping");
  }
  function redirectShippingH() {
    history.push("/shippingHistory");
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.topContainer}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.navList} ${app.colLeft}`}>
            <button className={`${styles.btnProfile}`} onClick={toHome}>
              <img src={path + "/logo.png"} alt="text" />
              <span>Jap Store</span>
            </button>
          </div>
          <div className={`${styles.navList} ${app.colRight}`}>
            {user === null ? (
              <Link className={`${styles.navItem}`} to="/login">
                ĐĂNG NHẬP
              </Link>
            ) : (
              ""
            )}
            {user === null ? <div className={`${styles.line}`} /> : ""}
            {user === null ? (
              <Link className={`${styles.navItem}`} to="/register">
                ĐĂNG KÝ
              </Link>
            ) : (
              ""
            )}
            {user != null ? (
              <button className={`${styles.btnProfile}`}>
                {user.fullName}
              </button>
            ) : (
              ""
            )}
            <div className={`${styles.profileContainer}`}>
              {user != null ? (
                user.role === "Admin" ? (
                  <button onClick={redirectStaff}>Quản lí</button>
                ) : user.role === "Shipper" ? (
                  <>
                    <button onClick={redirectGetOrder}>Lấy đơn hàng</button>
                    <button onClick={redirectShipping}>
                      Đơn hàng đang giao
                    </button>
                    <button onClick={redirectShippingH}>
                      Lịch sử đơn hàng
                    </button>
                  </>
                ) : user.role === "Seller" ? (
                  <>
                    <button onClick={redirectStaff}>Quản lí</button>
                  </>
                ) : null
              ) : null}
              <button onClick={redirectOrder}>Đơn hàng</button>
              <button onClick={redirectUser}>Thông tin người dùng</button>
              <button onClick={logout}>Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mid}`}>
        <div className={styles.cateContainer}>
          <CategoryBar />
        </div>
        <div className={`${styles.searchBox} ${app.colMid}`}>
          <input
            className={`${styles.searchInput}`}
            placeholder="Tìm kiếm sản phẩm"
            onChange={onChangeSearchText}
            onKeyUp={onEnter}
          ></input>
          <button className={`${styles.searchButton}`} onClick={onSubmitSearch}>
            <FontAwesomeIcon
              className={`${styles.searchIcon}`}
              icon={faSearch}
            ></FontAwesomeIcon>
          </button>
        </div>
        <button onClick={onClickCart} className={`${styles.cartButton}`}>
          <div className={styles.cart1}>
            <p>{props.cart.numberCart!==0? props.cart.numberCart : amoutnCart}</p>
          </div>
          <div className={styles.cart2}>
            <FontAwesomeIcon
              className={`${styles.cartIcon}`}
              icon={faShoppingCart}
            ></FontAwesomeIcon>
          </div>
        </button>
        <button className={`${styles.contactButton} ${app.colRight}`}>
          <h1>Hotline:</h1>
          <h1>0357.467.491</h1>
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(Header);
