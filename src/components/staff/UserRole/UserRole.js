import React, { useEffect, useState } from "react";
import "./UserRole.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Collapse } from "react-bootstrap";
import RoleRecord from "./RoleRecord";

export default function UserRole() {
  const [tabIndex, setTabIndex] = useState(0, []);
  const [open, setOpen] = useState(false);
  const [requestList, setRequestList] = useState([]);
  const [userAccount, setUserAccount] = useState([]);
  useEffect(() => {
    fetch('https://localhost:6969/User/RoleRequest?page=1&size=10')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res
      })
      .then(data => setRequestList(data.data))
      .catch(err => {
        console.error('Fetching error requestion list:' + err)
      })
  }, []);

  try {
    fetch('https://localhost:6969/User/UserRequest?page=1&size=10&roleId=1')
      .then(res => {
        if (res.ok) {
          return res.json
        }
        throw res
      })
      .then(data => {
        setUserAccount(data)
      }).catch(err => {
        console.log('Fetching error useraccount list:' + err)
      })
  }
  catch(err){
    console.log('Fetching error useraccount list' +err)
  }
  return (
    <div className="backgound-white">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Yêu Cầu Đăng Ký</Tab>
          <Tab
            onClick={() => {
              console.log(111);
            }}
          >
            Danh Sách Người Dùng
          </Tab>
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
                <RoleRecord listRequest={requestList} />
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="filter-bar row">
            <div className="form-group col-3">
              <label for="name">Tên Người Dùng</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Tên"
              />
            </div>
            <div className="form-group col-3">
              <label for="role">Loại tài khoản</label>
              <select className="form-control" id="role">
                <option>Admin</option>
                <option>Seller</option>
                <option>User</option>
              </select>
            </div>
          </div>
          <div className="table-wrap">
            <table className="table myaccordion table-hover" id="accordion">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tài Khoản</th>
                  <th>Tên Người Dùng</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Loại tài khoản</th>
                </tr>
              </thead>
              <tbody>
                { }
                <tr
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <td>1</td>
                  <td>vit con</td>
                  <td>vit con 2k2</td>
                  <td>vitcon@gmail.com</td>
                  <td>03837283792</td>
                  <td>Quản lý gian hàng</td>
                </tr>

                <Collapse in={open}>
                  <tr id="example-collapse-text">
                    <td colSpan="6">
                      <div>đây là thông tin</div>
                    </td>
                  </tr>
                </Collapse>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
