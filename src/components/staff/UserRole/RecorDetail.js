import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
export default function RecorDetail({ record }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <td>1</td>
        <td>vitcon@gmail.com</td>
        <td>vit con</td>
        <td>03837283792</td>
        <td>Quản lý gian hàng</td>
      </tr>

      <Collapse in={open}>
        <tr id="example-collapse-text">
          <td>
            <div>Mã CMT: 30749823743</div>
          </td>
          <td colSpan="2">
            <div>Khu Vực hoạt động: Nam từ liêm - hà nội</div>
          </td>
          <td colSpan="2">
            <div>
              <Button>Chấp nhận</Button>
              <Button>Hủy bỏ</Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
