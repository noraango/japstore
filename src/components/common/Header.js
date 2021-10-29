import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import app from "../../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CategoryBar from "./CategoryBar/CategoryBar";
import { useState } from "react";
export default function Header(props) {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  var path = process.env.PUBLIC_URL + "/images";
  let user = JSON.parse(localStorage.getItem("user"));
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
    localStorage.removeItem("token");
    window.location.reload();
  }
  function redirectStaff() {
    history.push("/staff");
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.topContainer}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.navList} ${app.colLeft}`}>
            <Link className={`${styles.navItem}`} to="/contact">
              CHĂM SÓC KHÁCH HÀNG
            </Link>
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
                {user != null ? user.Username : ""}
              </button>
            ) : (
              ""
            )}
            <div className={`${styles.profileContainer}`}>
              {user != null ? (
                user.RoleNames.indexOf("admin") !== -1 ? (
                  <button onClick={redirectStaff}>Quản lí</button>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
              <button>Thông tin người dùng</button>
              <button onClick={logout}>Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mid}`}>
        <div className={`${styles.logoContainer}`}>
          <a href="/japstore">
            <img
              className={`${styles.logo}`}
              src={path + "/logo-2.png"}
              alt="text"
            />
          </a>
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
        <button className={`${styles.cartButton}`}>
          <div className={styles.cart1}>
            <p>0</p>
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
      <div className={`${styles.bot}`}>
        <CategoryBar />
      </div>
    </div>
  );
}
