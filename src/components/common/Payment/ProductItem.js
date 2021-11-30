import React from "react";
import imageService from "../../../services/imageService";

export default function ProductItem({ productItem }) {
  return (
    <div className="row cart-product">
      <div className={`imgContainer col-2`}>
        <img
          src={imageService.get(productItem.displayImageName)}
          alt="Hình ảnh"
        />
      </div>
      <div className="col-6 cart-body">
        <span>{productItem.name}</span>
      </div>
      <div className="col-4 cart-body">
        <p>Số lượng : {productItem.quantity}</p>
        <p>{productItem.price}</p>
      </div>
    </div>
  );
}
