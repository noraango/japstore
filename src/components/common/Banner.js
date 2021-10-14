import React from "react";
import styles from "./Banner.module.css";
import "react-slideshow-image/dist/styles.css";
import Slider from "./Slider";

const images = [
  { url: "/images/banner-01.png" },
  { url: "/images/banner-02.png" },
];
const Banner = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <Slider data={images} />
        <Slider data={images} />
      </div>
    </div>
  );
};

export default Banner;
