import React from "react";
import styles from "./MessageBox.module.css";
export default function MessageBox(props) {
  return (
    <div className={styles.msgContainer}>
      <div className={styles.msgBox1}>
        <div className={styles.msgBox2}>
          <div className={styles.msgBox3}>
            <p>Thông báo</p>
            <button className={`label`} onClick={props.onClick}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
