import React, { useEffect, useState } from "react";
import "./UserRole.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Collapse, Button } from "react-bootstrap";
import RoleRecord from "./RoleRecord";
import UserRecord from "./UserRecord";
import ReactPaginate from "react-paginate";
import styles from "../../layout/Order/Order.module.css";

export default function UserRole() {
  const [tabIndex, setTabIndex] = useState(0, []);
  const [requestList, setRequestList] = useState([]);
  const [userList, setUserList] = useState([]);
  //filter active or unactive
  const [statusID, setStatusID] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [totalPage1, setTotalPage1] = useState(0);
  const [totalPage2, setTotalPage2] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  const [stsActive, setStsActive] = useState();
  const [sts, setSts]= useState()
  const status = [
    {
      key: "Admin",
      id: 1,
    },
    {
      key: "Seller",
      id: 2,
    },
    {
      key: "Shipper",
      id: 5,
    },
  ];
  const statusActive = [
    {
      key: "Tất cả",
      value: 0,
    },
    {
      key: "Đang hoạt động",
      value: 1,
    },
    {
      key: "Ngừng hoạt động",
      value: -1,
    },
  ];
  
  useEffect(() => {
    fetch("https://localhost:6969/User/RoleRequest?page=1&size=10")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setRequestList(data.data);
        setTotalPage1(data.totalPage);
      })
      .catch((err) => {
        console.error("Fetching err request list: " + err);
      });

    fetch(
      "https://localhost:6969/User/UserRequest?page=1&size=10&roleId=0&status=99"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setUserList(data.data);
        setTotalPage2(data.totalPage);
      })
      .catch((err) => {
        console.error("Fetching error user account list:" + err);
      });
  }, []);

  const handleSearch = (strSearch) => {
    const listUser = userList;
    setUserList(listUser.filter((u) => u.email === strSearch));
  };
  const handlePageClick = (event, tabNo) => {
    let index = event.selected;
    if (tabNo === 1) {
      fetch(
        "https://localhost:6969/User/RoleRequest?page=" +
          (index + 1) +
          "&size=10"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setRequestList(data.data);
          setTotalPage1(data.totalPage);
        })
        .catch((err) => {
          console.error("Fetching err request list: " + err);
        });
    } else {
      fetch(
        "https://localhost:6969/User/UserRequest?page=" +
          (index + 1) +
          "&size=10&roleId=0&status=99"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setUserList(data.data);
          setTotalPage2(data.totalPage);
        })
        .catch((err) => {
          console.error("Fetching error user account list:" + err);
        });
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="backgound-white">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Yêu Cầu Đăng Ký</Tab>
          <Tab>Danh Sách Người Dùng</Tab>
        </TabList>
        <TabPanel>
          <div className="table-wrap">
            <table className="table myaccordion table-hover" id="accordion">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tài Khoản</th>
                  <th>Tên Người Dùng</th>
                  <th>Số điện thoại</th>
                  <th>Yêu Cầu</th>
                </tr>
              </thead>
              <tbody>
                {requestList.length > 0 ? (
                  <RoleRecord
                    listRequest={requestList}
                    relist={setRequestList}
                  />
                ) : (
                  <div>Không có data để hiển thị</div>
                )}
              </tbody>
              <nav
                aria-label="Page navigation example"
                className={styles.navigation}
              >
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={(e) => handlePageClick(e, 1)}
                  pageRangeDisplayed={3}
                  pageCount={totalPage1}
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
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="filter-bar row">
            <div className="form-group col-3">
              <label for="role">Tình trạng</label>
              <select className="form-control" id="role" >
                {statusActive.map((item, id) => (
                  <option key={id}>{item.key}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-3">
              <label for="role">Loại tài khoản</label>
              <select className="form-control" id="role" >
                {status.map((o, key) => (
                  <option key={o.id}>{o.key}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-7">
              <div style={{ display: "flex", margin: "20px 0" }}>
                <input
                  className="form-control"
                  onChange={(e) => setStrSearch(e.target.value)}
                />
                <Button
                  className="button"
                  onClick={() => handleSearch(strSearch)}
                >
                  Tìm
                </Button>
              </div>
            </div>
            <div className="form-group col-4">
              <Button
                className="button"
                style={{ margin: "20px 0 20px 10px" }}
                onClick={refreshPage}
              >
                Làm mới
              </Button>
            </div>
          </div>
          <div className="table-wrap">
            <table className="table myaccordion table-hover" id="accordion">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tài Khoản</th>
                  <th>Trạng thái</th>
                  <th>Tên Người Dùng</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Loại tài khoản</th>
                </tr>
              </thead>
              <tbody>
                {userList.length > 0 ? (
                  <UserRecord listUser={userList} relist={setUserList} />
                ) : (
                  <div>Không có data để hiển thị</div>
                )}
              </tbody>
            </table>
            <nav
              aria-label="Page navigation example"
              className={styles.navigation}
            >
              <ReactPaginate
                nextLabel="next >"
                onPageChange={(e) => handlePageClick(e, 2)}
                pageRangeDisplayed={3}
                pageCount={totalPage2}
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
        </TabPanel>
      </Tabs>
    </div>
  );
}
