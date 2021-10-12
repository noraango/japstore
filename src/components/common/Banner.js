import React from "react";
import styles from "./Banner.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  { url: "/images/banner-01.png" },
  { url: "/images/banner-02.png" },
];
const Banner = () => {
  return (
    <div className={`${styles.container}`}>
      <Slide className={`${styles.slideshow} colLeft`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image.url}
            alt="Không load được ảnh"
          />
        ))}
      </Slide>
      <Slide className={`${styles.slideshow} colRight`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image.url}
            alt="Không load được ảnh"
          />
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
