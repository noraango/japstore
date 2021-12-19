import React, { useEffect, useState } from "react";
import storeService from "../../../services/storeService";
import styles from "./Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatVND } from "../../../controller/constants";
import Pagination from "../../common/Pagination/Pagination";

export default function Detail(props) {
  const [store, setStore] = useState({
    address: "",
    districtId: null,
    floor: 0,
    id: 0,
    name: "",
    provinceId: null,
    square: 0,
    villageId: null,
    wardId: null,
  });
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  useEffect(() => {
    fetchStore();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchStore();
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps
  function fetchStore() {
    storeService
      .getStoreDetail(props.match.params.storeId, currentPage, 10)
      .then((res) => {
        setStore(res.data.store);
        setProducts(res.data.products);
        setPages(res.data.totalPage);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onChangeCurrentPage(value) {
    setCurrentPage(value);
  }
  function onClickDeleteProduct() {
    console.log("delete");
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <h1>{store.name}</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={styles.tbbb}>
          {products.length > 0 ? (
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>Số lượng</th>
                  <th>Tên sản phẩm</th>
                  <th>Mã sản phẩm</th>
                </tr>
                {products.map((product, index) => (
                  <tr
                    className={`${index % 2 === 1 ? styles.grey : ""}`}
                    key={index}
                  >
                    <td>
                      <div>
                        <button onClick={onClickDeleteProduct}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                    <td>{product.quanlity}</td>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Không tìm thấy sản phẩm</p>
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
