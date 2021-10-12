import React from "react";
import Search from "../common/Search";
import Banner from "../common/Banner";
import Landing from "../common/Landing";
export default function Home() {
  const categories = [
    {
      id: "1",
      categoryName: "Khuyến mãi",
    },
    {
      id: "1",
      categoryName: "Mẹ - bé",
    },
    {
      id: "1",
      categoryName: "Chăm sóc sắc đẹp",
    },
  ];
  return (
    <div>
      <Search />
      <Banner />
      {categories.map((category) => (
        <Landing key={category.id} values={category} />
      ))}
    </div>
  );
}
