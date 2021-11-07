import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import productService from "../../../services/product.service";

export default function Detail(props) {
  const [product, setProduct] = useState({
    id: null,
    code: "",
    name: "",
    price: null,
    size: null,
    weight: null,
    quantity: null,
    manufacturer: "",
    shortDescription: "",
    description: "",
    brand: "",
    origin: "",
    packingMethod: "",
    displayImageName: "",
  });
  useEffect(() => {
    fetchProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function fetchProduct() {
    productService
      .getDetail(props.match.params.id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className={`row`}>
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ${styles.imageContainer}`}></div>
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ${styles.infoContainer}`}></div>
      </div>
    </div>
  );
}
