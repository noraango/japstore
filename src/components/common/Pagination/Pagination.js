import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Styles.css";

export default function Pagination(props) {
  function onChangePage(e) {
    var currentPage = e.target.value;
    props.setCurrentPage(currentPage);
  }
  function onClickPrevious() {
    let currentPage = Number(props.currentPage) - 1;
    if (currentPage < 1) {
      return;
    }
    props.setCurrentPage(currentPage);
  }
  function onClickNext() {
    let currentPage = Number(props.currentPage) + 1;
    if (currentPage > Number(props.pages)) {
      return;
    }
    props.setCurrentPage(currentPage);
  }
  const pages = [];
  for (let i = 1; i <= props.pages; i++) {
    pages.push(
      <li
        key={i}
        className={`page-item ${
          i === Number(props.currentPage) ? "active" : ""
        }`}
      >
        <button className={`page-link`} value={i} onClick={onChangePage}>
          {i}
        </button>
      </li>
    );
  }
  return (
    <nav className={`paginationContainer`} aria-label="...">
      <ul className={`pagination`}>
        <li
          className={`page-item ${
            Number(props.currentPage) <= 1 ? "disabled" : ""
          }`}
        >
          <button className={`page-link`} onClick={onClickPrevious}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
        </li>
        {pages}
        <li
          className={`page-item ${
            Number(props.currentPage) >= Number(props.pages) ? "disabled" : ""
          }
        `}
        >
          <button className={`page-link`} onClick={onClickNext}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
