import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
export default function OrderDetail(props) {
  const [open, setOpen] = useState(false);
  const statusAccept = 1;
  const statusRefuse = -1;
  return (
    <>
      <tr onClick={() => setOpen(!open)} aria-expanded={open}>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>

      <Collapse in={open}>
        <tr>
          <td>1</td>
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
      <Collapse in={open}>
        <tr>
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
