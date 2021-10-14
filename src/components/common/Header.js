import React, { useState } from "react";
import styles from "./Header.module.css";
import app from "../../App.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronRight,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  var path = process.env.PUBLIC_URL + "/images";
  const [styler, setStyle] = useState({ display: "none" });
  return (
    <div>
      <div className={`${styles.container} ${styles.topContainer}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles.navList} ${app.colLeft}`}>
            <Link className={`${styles.navItem}`} to="/contact">
              CHĂM SÓC KHÁCH HÀNG
            </Link>
          </div>
          <div className={`${styles.navList} ${app.colRight}`}>
            <Link className={`${styles.navItem}`} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Link>
            <div className={`${styles.line}`} />
            <Link className={`${styles.navItem}`} to="/login">
              ĐĂNG NHẬP
            </Link>
            <div className={`${styles.line}`} />
            <Link className={`${styles.navItem}`} to="/register">
              ĐĂNG KÝ
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.midContainer}`}>
        <div className={`${styles.mid}`}>
          <div className={`${styles.logoContainer}`}>
            <a href="/japstore">
              <img
                className={`${styles.logo}`}
                src={path + "/logo-2.png"}
                alt="text"
              />
            </a>
            <div className={`${styles.navBarM}`}>
              <button className={`${styles.buttonNavM}`}>
                <FontAwesomeIcon
                  className={`${styles.iconNavM}`}
                  icon={faBars}
                />
              </button>
            </div>
            <div className={`${styles.navBar}`}>
              <button className={`${styles.navButton}`}>
                <FontAwesomeIcon
                  className={`${styles.navIcon}`}
                  icon={faBars}
                />
                Danh mục sản phẩm
                <FontAwesomeIcon
                  className={`${styles.navIconArrow}`}
                  icon={faChevronDown}
                />
              </button>
              <div className={`${styles.itemList}`}>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Khuyến mãi
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Mẹ - Bé
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
                <button
                  className={`${styles.itemButton}`}
                  onMouseEnter={(e) => {
                    setStyle({ display: "grid" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                >
                  Chăm sóc sắc đẹp
                  <FontAwesomeIcon
                    className={`${styles.navIconArrow}`}
                    icon={faChevronRight}
                  />
                </button>
              </div>
              <div className={`${styles.detailList}`} style={styler}>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
                <div className={`${styles.detailItem}`}>
                  <h1>Subcategory 1</h1>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                  <h2>Subcategory 2</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.searchBox} ${app.colMid}`}>
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
      </div>
    </div>
  );
};

export default Header;
