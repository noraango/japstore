import React,{ useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import productService from "../../../services/product.service";
import loadingService from "../../../services/loading.Service";
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

  function updateProduct(value) {
    setProducts(value);
  };
  function onFilter(pri,ra) {
    loadingService.showLoading();
    productService
      .CategoryFilter(props.match.params.search, pri, ra, 1, 10)
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
        setTotalRow(res.data.totalRow);
        setTotalPage(res.data.totalPage);
        loadingService.HideLoading();
      })
      .catch((e) => {
        console.log(e);
        loadingService.HideLoading();
      });
  }
  const [price, setPrice] = useState(1);
  const [rate, setRate] = useState(1);
  const [selectPrice, setSelectPrice] = useState([
    {
      name: "Mặc định",
      id: 1,
    },
    {
      name: "Từ 0-100K",
      id: 2,
    },
    {
      name: "Từ 100K-200K",
      id: 3,
    },
    {
      name: "Từ 200K-300K",
      id: 4,
    },
    {
      name: "Từ 300K-400K",
      id: 5,
    },
    {
      name: "Trên 400k",
      id: 6,
    },
  ]);
  const [selectRate, setSelectRate] = useState([
    {
      name: "Mặc định",
      id: 1,
    },
    {
      name: "Sắp xếp theo tên",
      id: 2,
    },
    {
      name: "Sắp xếp theo giá tăng dần",
      id: 3,
    },
    {
      name: "Sắp xếp theo giá giảm dần",
      id: 4,
    },
    {
      name: "Sắp xếp theo người bán",
      id: 5,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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
      <div className={styles.search} style={{paddingBottom:"0"}}>
        <div className={styles.filterContainer}>
          <div className={styles.filterContainer}>
            <h1>
              Tìm kiếm sản phẩm
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6 sidebar-single">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{
                  margin: "10px 30px",
                  color: "white",
                  background: "#bc8c4e",
                  border: "none",
                  width: "-webkit-fill-available",
                }}
              >
                Sắp kiếm theo giá cả
              </Button>

              <Collapse in={open}>
                <div id="example-collapse-text" style={{ margin: "10px 30px" }}>
                  <div className="form-group">
                    <select
                      className={`form-control`}
                      name="city"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                        onFilter(e.target.value,rate);
                      }}
                    >
                      {selectPrice.map((location) => (
                        <option value={location.id}>{location.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="col-md-6 sidebar-single">
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{
                  margin: "10px 30px",
                  color: "white",
                  background: "#bc8c4e",
                  border: "none",
                  width: "-webkit-fill-available",
                }}
              >
                Sắp xếp theo thứ tự
              </Button>
              <Collapse in={open2}>
                <div className="form-group" style={{ margin: "10px 30px" }}>
                  <select
                    className={`form-control`}
                    name="city"
                    value={rate}
                    onChange={(e) => {
                      setRate(e.target.value);
                      onFilter(price,e.target.value);
                    }}
                  >
                    {selectRate.map((location) => (
                      <option value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>

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
