import styles from "./List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import productService from "../../../services/product.service";
import Pagination from "../../common/Pagination/Pagination";
import { useEffect, useState } from "react";
import { formatVND } from "../../../controller/constants";
export default function ListProduct(props) {
  const [products, setProducts] = useState([
    //example list
    {
      name:'1234',
      code:'45445',
      price:'2344',
      status:'2344'
    }
  ]);
  const [pages, setPages] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const fetchProducts = async () => {
      retrieveProducts();
    };
    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(1);
    retrieveProducts();
  }, [pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    retrieveProducts();
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  function onChangeCurrentPage(value) {
    setCurrentPage(value);
    // console.log(value);
  }
  let user = JSON.parse(localStorage.getItem("user"));
  function retrieveProducts() {
    productService
      .shopProduct(user.id,searchText, currentPage, pageSize)
      .then((res) => {
        setProducts(res.data.list);
        setPages(res.data.numberOfPage);
        console.log(res.data.list);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onChangePageSize(e) {
    setPageSize(e.target.value);
    // console.log(e.target.value);
  }
  function onChangeSearchText(e) {
    setSearchText(e.target.value);
    // console.log(e.target.value);
  }
  function onEnterSearchInput(e) {
    if (e.key === "Enter") {
      // console.log(searchText);
      retrieveProducts();
    }
  }
  function onClickCreateProduct() {
    props.history.push(props.match.path + "/create");
  }
  function onClickReadProduct(id) {
    props.history.push(props.match.path + "/detail/" + id);
  }
  function onClickEditProduct(id) {
    props.history.push(props.match.path + "/edit/" + id);
  }
  function onClickDeleteProduct() {
    console.log(props.match.path + "/delete");
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1>Danh s??ch s???n ph???m</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.searchBox}`}>
          <input
            className={`${styles.searchInput}`}
            placeholder="T??m ki???m s???n ph???m"
            onKeyPress={onEnterSearchInput}
            onChange={onChangeSearchText}
          ></input>
          <button
            className={`${styles.searchButton}`}
            onClick={retrieveProducts}
          >
            <FontAwesomeIcon
              className={`${styles.searchIcon}`}
              icon={faSearch}
            ></FontAwesomeIcon>
          </button>
        </div>
        <select onChange={onChangePageSize}>
          <option value={10}>Hi???n 10 s???n ph???m</option>
          <option value={20}>Hi???n 20 s???n ph???m</option>
          <option value={50}>Hi???n 50 s???n ph???m</option>
        </select>
        <button className={`${styles.btnAdd}`} onClick={onClickCreateProduct}>
          Th??m s???n ph???m
        </button>
        <div className={styles.tbbb}>
          {products.length > 0 ? (
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>T??n s???n ph???m</th>
                  <th>M??</th>
                  <th>Gi??(VND)</th>
                  <th>Tr???ng th??i</th>
                </tr>
                {products.map((product, index) => (
                  <tr
                    className={`${index % 2 === 1 ? styles.grey : ""}`}
                    key={index}
                  >
                    <td>
                      <div>
                        <button onClick={() => onClickReadProduct(product.id)}>
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button onClick={() => onClickEditProduct(product.id)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={onClickDeleteProduct}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{formatVND(product.price)}??</td>
                    <td>{product.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Kh??ng t??m th???y s???n ph???m</p>
          )}
        </div>
      </div>
      {pages > 1 ? (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          setCurrentPage={onChangeCurrentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
}
