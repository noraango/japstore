import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { products } from "../../../controller/data";
export default function Cart() {
  useEffect(() => {
      console.log(products);
  }, []);
  return <div></div>;
}
