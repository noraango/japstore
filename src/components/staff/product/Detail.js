import React, { Component } from "react";
import styles from "./Create.module.css";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  render() {
    return <div className={styles.container}></div>;
  }
}
