import React, { useEffect, useState } from "react";
import styles from "../store/List.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faSearch, faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import OrderDetail from "./OrderDetail";
import storeService from "../../../services/storeService";
import ReactPaginate from "react-paginate";
export default function List(props) {
  let user = JSON.parse(localStorage.getItem("user"));
  const [dbitems, setDbitem] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [totalRow, setTotalRow] = useState([]);
  const filterHeader =
  "Hiển thị " +
  dbitems.length +
  " sản phẩm trên " +
  totalRow +
  " kết quả tìm thấy";
  function retrieveStores() {
    storeService
      .getOrder(user.id, 1, 4)
      .then((res) => {
        setDbitem(res.data.order);
        setTotalRow(res.data.totalRow);
        setTotalPage(res.data.totalPage);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const handlePageClick = (event) => {
    let index = event.selected;
    storeService
      .getOrder(user.id, index + 1, 4)
      .then((res) => {
        setDbitem(res.data.order);
        setTotalRow(res.data.totalRow);
        setTotalPage(res.data.totalPage);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <h1>Danh sách đơn hàng</h1>
      </div>
      {dbitems.length > 0 ? (
        <div className={styles.search}>
          <div>{filterHeader}</div>
          <div className={`${styles.content}`}>
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Khách hàng</th>
                  <th>Giá tiền</th>
                  <th>Địa chỉ</th>
                  <th>Xã</th>
                  <th>Tỉnh</th>
                  <th>Tình Trạng</th>
                </tr>
                {dbitems.map((dbitem, index) => (
                  <OrderDetail order={dbitem} />
                ))}
              </tbody>
            </table>
          </div>
          <nav
            aria-label="Page navigation example"
            style={{
              marginTop: "70px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={totalPage}
              previousLabel="Previous"
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
        <div>
          <h5>Không có đơn hàng nào</h5>
        </div>
      )}
    </div>
  );
}
