import React from "react";
import Banner from "../common/Banner";
import Landing from "../common/Landing/Landing";
import app from "../../App.module.css";
import productService from "../../services/product.service";
import styles from "./Home.module.css";
export default function Home() {
  const categories = [
    {
      id: "1",
      categoryName: "Khuyến mãi",
    },
    {
      id: "2",
      categoryName: "Mẹ - bé",
    },
    {
      id: "3",
      categoryName: "Chăm sóc sắc đẹp",
    },
  ];
  return (
    <div className={`${app.commonContainer}`}>
      <Banner />
      {categories.map((category, index) => (
        <div key={index} className={styles.productList}>
          <h1>{category.categoryName}</h1>
          <Landing data={productService.getSome(6)} col={6} />
        </div>
      ))}
    </div>
  );
}
