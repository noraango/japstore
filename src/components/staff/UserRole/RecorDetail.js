import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import userService from "../../../services/user.service";
export default function RecorDetail(props) {
  const [open, setOpen] = useState(false);
  const statusAccept = 1;
  const statusRefuse = -1;

  const relist = () => {
    userService
      .getRoleReq(1, 10)
      .then((data) => {
        props.relist(data.data.data);
      })
      .catch((err) => {
        console.error("Fetching error user account list:" + err);
      });
  };

  const handleAcceptRes = (requestId) => {
    userService
      .updateRoleReq(statusAccept, requestId)
      .then((data) => {
        if (data.data.status === true) {
          toast.success("Chấp nhận yêu cầu thành công!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          relist();
        }
      })
      .catch((err) => {
        console.log("Post accept requestion err: " + err);
        toast.success("Chấp nhận yêu cầu thành công!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleRefuseRes = (requestId) => {
    console.log("refuse clicked");
    userService
      .updateRoleReq(statusRefuse, requestId)
      .then((data) => {
        if (data.data.status === true) {
          toast.success("Hủy yêu cầu thành công!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          relist();
        }
      })
      .catch((err) => {
        console.log("Post refuse requestion err: " + err);
        toast.error("Hủy yêu cầu thất bại!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <td>{props.record.request.id}</td>
        <td>{props.record.infor.email}</td>
        <td>
          {(props.record.infor.lastName ? props.record.infor.lastName : "") +
            " " +
            (props.record.infor.middleName
              ? props.record.infor.middleName
              : "") +
            " " +
            props.record.infor.firstName}
        </td>
        <td>{props.record.infor.phone}</td>
        {/* Shipper role code ='U5', another is seller role*/}
        <td>
          {props.record.request.role === "U5"
            ? "Đăng ký làm shipper"
            : "Quản lý gian hàng"}
        </td>
      </tr>

      <Collapse in={open}>
        <tr id="example-collapse-text">
          <td>
            <div>Mã CMT: {props.record.request.cmtCode}</div>
          </td>
          <td colSpan="2">
            <div>
              Khu Vực hoạt động: {props.record.district}-{props.record.province}
            </div>
          </td>
          <td className="button" colSpan="2">
            <div>
              <Button onClick={() => handleAcceptRes(props.record.request.id)}>
                Chấp nhận
              </Button>
              <Button onClik={() => handleRefuseRes(props.record.request.id)}>
                Hủy bỏ
              </Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
