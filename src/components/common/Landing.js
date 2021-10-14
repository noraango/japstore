import React from "react";
import styles from "./Landing.module.css";
import Product from "./Product";
export default function Landing(category) {
  const products = [
    {
      id: "1",
      code: "P001",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    },
    {
      id: "2",
      code: "P002",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/organic-seedless-lime_456e3363df7240c0a755876157124fde_grande.jpg",
    },
    {
      id: "3",
      code: "P003",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/axaxaxax_16a5c0f690e74144b2f0889fff05621e_grande.jpg",
    },
    {
      id: "4",
      code: "P004",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    },
    {
      id: "5",
      code: "P005",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    },
    {
      id: "6",
      code: "P006",
      productName: "Máy sấy cực mạnh",
      price: 200000,
      quanntity: 20,
      origin: "Nhật Bổn",
      displayImage:
        "https://product.hstatic.net/1000282430/product/57_7a69cce04b0040cdb238cca78f2064c4_grande.jpg",
    },
  ];
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.top}`}>
          <h1>{category.values.categoryName}</h1>
        </div>
        <div className={`${styles.bot}`}>
          {products.map((product) => (
            <Product key={product.id} values={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
