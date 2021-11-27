import React from "react";
import ProductDetail from "./ProductItem";

export default function ProductOverview(listProduct) {
  return (
    <>
      {listProduct.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </>
  );
}
