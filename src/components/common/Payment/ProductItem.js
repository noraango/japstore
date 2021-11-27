import React from "react";

export default function ProductItem(product) {
  return (
    <div className="row cart-product">
      <div className="col-2">
        <img src={process.env.PUBLIC_URL + "/images/user.png"} alt="" />
      </div>
      <div className="col-6 cart-body">
        <span>{product.name}</span>
      </div>
      <div className="col-4 cart-body">
        <p>Số lượng : {product.quantity}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
