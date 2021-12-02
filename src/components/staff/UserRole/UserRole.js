import React, { useEffect, useState } from "react";
import "./UserRole.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Collapse } from "react-bootstrap";
import RoleRecord from "./RoleRecord";
import UserRecord from "./UserRecord";

export default function UserRole() {
  const [tabIndex, setTabIndex] = useState(0, []);
  const [requestList, setRequestList] = useState([]);
  const [userList, setUserList] = useState([]);
  //filter active or unactive
  const [statusID, setStatusID] = useState([]);

  const status = [
    {
      key: 'Admin',
      id: 1
    },
    {
      key: 'Seller',
      id: 2
    },
    {
      key: 'Shipper',
      id: 5
    }
  ]
  const statusActive=[{
    key:'Tất cả',
    value:0
  },
  {
    key:'Đang hoạt động',
    value:1,
  },
  {
    key:'Ngừng hoạt động',
    value:-1
  }
]
  useEffect(() => {
    fetch("https://localhost:6969/User/RoleRequest?page=1&size=10")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setRequestList(data.data)) // sửa thành phàn 'data'->'data.data 'sau khi sửa API
      .catch(err => {
        console.error('Fetching err request list: ' + err)
      })

    fetch("https://localhost:6969/User/UserRequest?page=1&size=10&roleId=1")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setUserList(data);
      })
      .catch((err) => {
        console.error("Fetching error user account list:" + err);
      });

  }, []);

  return (
    <div className="backgound-white">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Yêu Cầu Đăng Ký</Tab>
          <Tab>
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
                {requestList.length > 0 ? <RoleRecord listRequest={requestList} relist={setRequestList} /> : <div>Không thể hiển thị thông tin</div>}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="filter-bar row">
            <div className="form-group col-3">
              <label for="role">Tình trạng</label>
              <select className="form-control" id="role">
                {statusActive.map((item,id)=>
                  <option key={id}>{item.key}</option>
                )}
              </select>
            </div>
            <div className="form-group col-3">
              <label for="role">Loại tài khoản</label>
              <select className="form-control" id="role">
                {status.map((o,key)=>
                  <option key={o.id}>{o.key}</option>
                )}
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
                {userList.length > 0 ? <UserRecord listUser={userList}  relist={setUserList} /> : <div>Không thể hiển thị thông tin</div>}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
