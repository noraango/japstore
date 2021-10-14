import React from "react";
import Banner from "../common/Banner";
import Landing from "../common/Landing";
import app from "../../App.module.css";
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
      {categories.map((category) => (
        <Landing key={category.id} values={category} />
      ))}
    </div>
  );
}
