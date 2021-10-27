import React from "react";
import styles from "./List.module.css";
export default function List(props) {
  function onClickCreateEmployee() {
    console.log(props);
    props.history.push(props.match.path + "/create");
  }
  return (
    <div className={styles.container}>
      <button className={`${styles.btnAdd}`} onClick={onClickCreateEmployee}>
        Thêm sản phẩm
      </button>
    </div>
  );
}
