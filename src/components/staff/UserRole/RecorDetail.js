import React, { useEffect, useState } from "react";
import { Collapse, Button } from "react-bootstrap";
export default function RecorDetail(props) {
  const [open, setOpen] = useState(false);
  const statusAccept=1;
  const statusRefuse=-1;

  const handleAcceptRes=(requestId)=>{
    try{
      fetch('https://localhost:6969/User/UpdateRequest?status='+statusAccept+'&requestId='+requestId)
      .then(res=>{
        if(res.ok){
          return res.json()
        }
        throw res
      })
      .then(data=>{
        if(data.status==='true') alert('Chấp nhận yêu cầu thành công!')
      })
      .catch(err=>{
        console.log('Post accept requestion err: '+err)
      })
      }
      catch(err){
        alert('Chấp nhận yêu cầu thất bại!')
        console.log('Handle Accept:' +err)
      }
  }
  const handleRefuseRes=(requestId)=>{
    try{
    fetch('https://localhost:6969/User/UpdateRequest?status='+statusRefuse+'&requestId='+requestId)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
      throw res
    })
    .then(data=>{
      if(data.status==='true') alert('Hủy yêu cầu thành công!')
    })
    .catch(err=>{
      console.log('Post refuse requestion err: '+err)
    })
    }
    catch(err){
      alert('Hủy yêu cầu thất bại!')
      console.log('Handle Refuse:' +err)
    }
  }
  return (
    <>
      <tr
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <td>{props.key}</td>
        <td>{props.record.infor.email}</td>
        <td>{props.record.infor.lastName+props.record.middleName+props.record.firstName}</td>
        <td>{props.record.infor.phone}</td>
        {/* Shipper role code ='U5', another is seller role*/}
        <td>{props.record.request.role==='U5'? 'Đăng ký làm shipper' : 'Quản lý gian hàng'}</td>
      </tr>

      <Collapse in={open}>
        <tr id="example-collapse-text">
          <td>
            <div>Mã CMT: {props.record.request.cmtCode}</div>
          </td>
          <td colSpan="2">
            <div>Khu Vực hoạt động: {props.record.district}-{props.record.province}</div>
          </td>
          <td colSpan="2">
            <div>
              <Button onclick={handleAcceptRes(props.record.request.id)}>Chấp nhận</Button>
              <Button onclik={handleRefuseRes(props.record.request.id)}>Hủy bỏ</Button>
            </div>
          </td>
        </tr>
      </Collapse>
    </>
  );
}
