import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import categoryService from "../../../services/categoryService";
import styles from "./Styles.module.css";
import SubCategoryList from "./SubCategoryList";

export default function SubCategory(props) {
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
      className={styles.subCategory}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <input type="hidden" value={props.id} />
      <a href={"/category/"+props.data.id}>
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
        <SubCategoryList parentId={props.data.id} />
      ) : (
        ""
      )}
    </li>
  );
}
