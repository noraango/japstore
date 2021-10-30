import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import DropDownButton from "./DropDownButton";
import CategoryList from "./CategoryList";
import categoryService from "../../../services/categoryService";
export default function CategoryBar() {
  const [dropDownContent] = useState("Danh mục sản phẩm");
  const [dropListState, setDropListState] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    retrieveCategory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function showList() {
    setDropListState(true);
  }
  function hideList() {
    setDropListState(false);
  }
  function retrieveCategory() {
    categoryService
      .getLevel(1)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className={styles.container}>
      <DropDownButton
        content={dropDownContent}
        showList={showList}
        hideList={hideList}
        state={dropListState}
      />
      {dropListState && categories.length > 0 ? (
        <CategoryList
          categories={categories}
          showList={showList}
          hideList={hideList}
        />
      ) : (
        ""
      )}
    </div>
  );
}
