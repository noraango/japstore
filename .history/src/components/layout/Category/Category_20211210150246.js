import { useEffect, useState } from "react";
import productService from "../../../services/product.service";
import Banner from "../../common/Banner";
import Landing from "../../common/Landing/Landing";
import styles from "../Search.module.css";
export default function Category(props) {
  
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [totalRow, setTotalRow] = useState([]);
  const filterHeader = "Hiển thị "+products.length+" sản phẩm trên "+totalRow+ " kết quả tìm thấy";
  const filterHeader2 = "Không tìm thấy kết quả nào!";
  useEffect(() => {
    searchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function searchProducts() {
    productService
      .Category(props.match.params.search, 1, 10)
      .then((res) => {
        setProducts(res.data.data);
        setTotalRow(res.data.totalRow)
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <Banner />
      {products.length > 0 ? (
        <div className={styles.search}>
          <div className={styles.filterContainer}>
            <h1>
              {filterHeader}({props.match.params.search})
            </h1>
          </div>
          <Landing data={products} col={5} />
        </div>
      ) : (
        <div className={styles.search}>
          <h5>{filterHeader2}</h5>
        </div>
      )}
    </div>
  );
}
