import React from "react";
import styles from "./Banner.module.css";
import "react-slideshow-image/dist/styles.css";
import Slider from "./Slider";
import app from "../../App.module.css";
const images = [
  { url: "/images/banner-01.png" },
  { url: "/images/banner-02.png" },
];
const Banner = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <Slider col={app.colLeft} data={images} />
        <Slider col={app.colRight} data={images} />
      </div>
    </div>
  );
};

export default Banner;
