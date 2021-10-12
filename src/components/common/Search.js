import {
  faBars,
  faChevronDown,
  faChevronRight,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import styles from "./Search.module.css";
const Search = () => {
  var path = process.env.PUBLIC_URL + "/images";
  const [styler, setStyle] = useState({ display: "none" });
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.searchContainer}`}>
        <a href="/japstore">
          <img
            className={`${styles.logo}`}
            src={path + "/logo-2.PNG"}
            alt="text"
          />
        </a>
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
        <button className={styles.contactButton}>
          <h1>Hotline:</h1>
          <h1>0357.467.491</h1>
        </button>
        <div className={`${styles.navBar}`}>
          <button className={`${styles.navButton}`}>
            <FontAwesomeIcon className={`${styles.navIcon}`} icon={faBars} />
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
    </div>
  );
};

export default Search;
