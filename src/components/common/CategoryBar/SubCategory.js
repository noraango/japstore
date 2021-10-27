import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./Styles.module.css";
import SubCategoryList from "./SubCategoryList";

export default function SubCategory(props) {
  const [listState, setListState] = useState(false);
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
      <a href="/">
        {props.category.name}
        {props.category.hasSub ? (
          <FontAwesomeIcon
            className={styles.categoryArrow}
            icon={faAngleRight}
          />
        ) : (
          ""
        )}
      </a>
      {props.category.hasSub && listState ? (
        <SubCategoryList parentId={props.category.id} />
      ) : (
        ""
      )}
    </li>
  );
}
