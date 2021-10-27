import React from "react";
import styles from "./Create.module.css";
export default function Create(props) {
  function onReturn() {
    props.history.goBack();
  }
  return (
    <div className={styles.container}>
      <button onClick={onReturn}>Quay ve</button>
    </div>
  );
}
