import React from "react";
import RateDetail from "./RateDetail";

export default function ProductRate({ ratingList }) {
  return (
    <>
      {ratingList.map((rating) => (
        <RateDetail key={rating.id} rate={rating} />
      ))}
    </>
  );
}
