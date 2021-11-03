import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Styles.css";

export default function Pagination() {
  return (
    <nav className={`paginationContainer`} aria-label="...">
      <ul className={`pagination`}>
        <li className={`page-item disabled`}>
          <button className={`page-link`} tabIndex="-1">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
        </li>
        <li className={`page-item`}>
          <button className={`page-link`}>1</button>
        </li>
        <li className={`page-item active`}>
          <button className={`page-link`}>2</button>
        </li>
        <li className={`page-item`}>
          <button className={`page-link`}>3</button>
        </li>
        <li className={`page-item`}>
          <button className={`page-link`}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
