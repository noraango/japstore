import styles from "./Styles.module.css";
import ProductCard from "../Product/ProductCard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export default function Landing(props) {
  const [landingCols, setLandingCols] = useState(null);
  useEffect(() => {
    switch (props.col) {
      case 5:
        setLandingCols(styles.landing5);
        break;
      case 3:
        setLandingCols(styles.landing3);
        break;
      case 6:
        setLandingCols(styles.landing6);
        break;
      default:
        break;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={`${styles.landing} ${landingCols}`}>
      {props.data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
}
Landing.propTypes = {
  data: PropTypes.array,
  col: PropTypes.number,
};
Landing.defaultProps = {
  data: [],
  col: 5,
};
