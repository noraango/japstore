import React, { useEffect, useState } from "react";
import "./UserRole.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Collapse } from "react-bootstrap";

export default function UserRole() {
  const [tabIndex, setTabIndex] = useState(0, [
    (i) => {
      console.log(i);
    },
  ]);
  const [open, setOpen] = useState(false);
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
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Yêu Cầu</th>
                </tr>
              </thead>
              <tbody>
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
        <TabPanel>
          <div className="filter-bar row">
            <div class="form-group col-3">
              <label for="name">Tên Người Dùng</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Tên"
              />
            </div>
            <div class="form-group col-3">
              <label for="role">Loại tài khoản</label>
              <select class="form-control" id="role">
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
