import { useEffect, useState } from "react";
import productService from "../../services/product.service";
import Banner from "../common/Banner";
import Landing from "../common/Landing/Landing";
import styles from "./Search.module.css";
export default function Search(props) {
  const filterHeader = "Kết quả tìm kiếm cho: ";
  const filterHeader2 = "Không tìm thấy kết quả nào!";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    searchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function searchProducts() {
    productService
      .search(props.match.params.search, 1, 9)
      .then((res) => {
        setProducts(res.data.list);
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
