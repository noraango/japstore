import React, { useEffect, useState } from "react";
import categoryService from "../../../services/categoryService";
import styles from "./Styles.module.css";
import SubCategory from "./SubCategory";

export default function SubCategoryList(props) {
  const [subCates, setSubCates] = useState([]);
  useEffect(() => {
    setSubCates(categoryService.getAllSubCategory(props.parentId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ul className={styles.subCategoryList}>
      {subCates.map((cate, index) => (
        <SubCategory key={index} category={cate} />
      ))}
    </ul>
  );
}
