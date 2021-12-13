import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";

const UserDetail = (props) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const statusAccept = 1;
  const statusRefuse = -1;

  const displayRole = (userRoleId) => {
    let strRole = "";
    switch (userRoleId) {
      case 1:
        strRole = "Admin";
        break;
      case 2:
        strRole = "Seller";
        break;
      case 3:
        strRole = "Staff";
        break;
      case 4:
        strRole = "Customer";
        break;
      case 5:
        strRole = "Shipper";
        break;
      default:
        break;
    }
    return strRole;
  };

  const relist = () => {
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
        props.relist(data.data);
      })
      .catch((err) => {
        console.error("Fetching error user account list:" + err);
      });
  };

  const handleActiveAccount = (userId) => {
    fetch(
      "https://localhost:6969/User/UpdateUserStatus?userId=" +
        userId +
        "&status=" +
        statusAccept
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        if (data.status === true) {
          alert("Mở hoạt động thành công!");
          relist();
        }
      })
      .catch((err) => {
        console.log("Post accept requestion err: " + err);
        alert("Mở hoạt động thất bại!");
      });
  };
  const handleDisactiveAccount = (userId) => {
    fetch(
      "https://localhost:6969/User/UpdateUserStatus?userId=" +
        userId +
        "&status=" +
        statusRefuse
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        if (data.status === true) {
          alert("Ngừng hoạt động thành công!");
          relist();
        }
      })
      .catch((err) => {
        console.log("Post accept requestion err: " + err);
        alert("Ngừng hoạt động thất bại!");
      });
  };
  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        key={props.key}
      >
        <td>{props.record.userId}</td>
        <td>{props.record.email}</td>
        <td>{props.record.status === 1 ? "Hoạt động" : "Ngừng hoạt động"}</td>
        <td>
          {(props.record.lastName ? props.record.lastName : "") +
            " " +
            (props.record.middleName ? props.record.middleName : "") +
            " " +
            props.record.firstName}
        </td>
        <td>{props.record.email}</td>
        <td>{props.record.phone}</td>
        <td>{displayRole(props.record.userRoleId)}</td>
      </tr>
      <Collapse in={open}>
        <tr id="example-collapse-text">
          <td colSpan="5">
            <div>
              Địa Chỉ:{" "}
              {props.record.wardId +
                "-" +
                props.record.districtId +
                "-" +
                props.record.provinceId +
                ", " +
                props.record.address}
            </div>
          </td>
          <td className="button" colSpan="2">
            <div>
              <Button onClick={() => handleActiveAccount(props.record.userId)}>
                Mở hoạt động
              </Button>
              <Button
                onClik={() => handleDisactiveAccount(props.record.userId)}
              >
                Ngừng hoạt động
              </Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
};

export default UserDetail;
