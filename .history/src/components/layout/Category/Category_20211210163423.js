import { useEffect, useState } from "react";
import productService from "../../../services/product.service";
import Banner from "../../common/Banner";
import Landing from "../../common/Landing/Landing";
import ReactPaginate from "react-paginate";
import styles from "../Search.module.css";
export default function Category(props) {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [totalRow, setTotalRow] = useState([]);
  const filterHeader =
    "Hiển thị " +
    products.length +
    " sản phẩm trên " +
    totalRow +
    " kết quả tìm thấy";
  const filterHeader2 = "Không tìm thấy kết quả nào!";
  useEffect(() => {
    searchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function searchProducts() {
    productService
      .Category(props.match.params.search, 1, 10)
      .then((res) => {
        setProducts(res.data.data);
        setTotalRow(res.data.totalRow);
        setTotalPage(res.data.totalPage);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const handlePageClick = (event) => {
    let index = event.selected;
    productService
      .Category(props.match.params.search, index + 1, 10)
      .then((res) => {
        setProducts(res.data.data);
        setTotalRow(res.data.totalRow);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => {
        console.error("Fetching order error: " + err);
      });
  };
  return (
    <div>
      <Banner />
      {products.length > 0 ? (
        <div className={styles.search}>
          <div className={styles.filterContainer}>
            <h1>
              {filterHeader}
            </h1>
          </div>
          <Landing data={products} col={5} />
          <nav
            aria-label="Page navigation example"
            style={{marginTop:"70px", display: "flex", justifyContent: "center" }}
          >
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={totalPage}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </nav>
        </div>
      ) : (
        <div className={styles.search}>
          <h5>{filterHeader2}</h5>
        </div>
      )}
    </div>
  );
}
