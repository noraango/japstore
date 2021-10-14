import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./Slider.module.css";
export default function Slider(images) {
  const [index, setIndex] = useState(0);
  function prev() {
    setIndex(index === 0 ? images.data.length - 1 : index - 1);
  }
  function next() {
    setIndex(index === images.data.length - 1 ? 0 : index + 1);
  }
  React.useEffect(() => {
    var timer = setInterval(next, 3000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className={`${styles.container}`}>
      <img
        className={`${styles.background}`}
        src={process.env.PUBLIC_URL + images.data[0].url}
        alt="Không load được ảnh"
      />
      {images.data.map((image, i) => (
        <div
          key={i}
          className={`${styles.slide} ${
            i === index ? styles.show : styles.hide
          }`}
        >
          <img
            src={process.env.PUBLIC_URL + image.url}
            alt="Không load được ảnh"
          />
        </div>
      ))}
      <div className={`${styles.btnContainer}`}>
        <button onClick={prev}>
          <FontAwesomeIcon
            className={`${styles.btnIcon}`}
            icon={faChevronLeft}
          />
        </button>
        <button onClick={next}>
          <FontAwesomeIcon
            className={`${styles.btnIcon}`}
            icon={faChevronRight}
          />
        </button>
      </div>
    </div>
  );
}
