import React from "react";
import ProductDetail from "./ProductItem";

export default function ProductOverview({ listProducts }) {
  return (
    <>
      {listProducts.map((product) => (
        <ProductDetail key={product.id} productItem={product} />
      ))}
    </>
  );
}
