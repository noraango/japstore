import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubCategoryList from "./SubCategoryList";
import categoryService from "../../../services/categoryService";
export default function Category(props) {
  const [listState, setListState] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    retrieveSubategory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function retrieveSubategory() {
    categoryService
      .getAllSubCategory(props.data.id)
      .then((res) => {
        setSubcategories(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onMouseIn() {
    setListState(true);
  }
  function onMouseOut() {
    setListState(false);
  }
  return (
    <li
      className={styles.category}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <input type="hidden" value={props.id} />
      <a href={"/category/"+props.id}>
        {props.data.name}
        {subcategories.length > 0 ? (
          <FontAwesomeIcon
            className={styles.categoryArrow}
            icon={faAngleRight}
          />
        ) : (
          ""
        )}
      </a>
      {subcategories.length > 0 && listState ? (
        <SubCategoryList data={subcategories} />
      ) : (
        ""
      )}
    </li>
  );
}
