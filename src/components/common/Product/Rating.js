import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import imageService from "../../../services/imageService";
import styles from "../../layout/User/User.module.css";
import productService from "../../../services/product.service";
import { Modal, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import loading from "../../../services/loading.Service";

const Rating = (props) => {
  let user = JSON.parse(localStorage.getItem("user"));
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    loading.showLoading();
    productService
      .postComment(user.id,props.productId,rating,comment)
      .then((res) => {
        toast.success('Đánh giá sản phẩm thành công', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        props.setShowCmtF(false);
        loading.HideLoading();
      })
      .catch((e) => {
        loading.HideLoading();
        toast.error('Đánh giá sản phẩm thất bại', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        console.log(e);
      });
  };
  return (
    <>
      <Button
        className={styles.subBtn}
        style={{ width: "fit-content" }}
        variant="primary"
        onClick={() => props.setShowCmtF(true)}
      >
        Thêm nhận xét
      </Button>
      <Modal
        show={props.showCmtF}
        onHide={() => props.setShowCmtF(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Nhận xét của bạn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rate-detail">
            <div className="row">
              <div className="col col-md-2 col-4 rate-img">
                <img
                  style={{ maxWidth: "100px" }}
                  src={imageService.get("user.png")}
                  alt="Không load được ảnh"
                />
              </div>
              <div className="col col-md-10 col-8">
                <div className="rate-content">
                  <h4 className="user-rate">{user.fullName}</h4>
                  <ReactStars
                    onChange={(newRating) => setRating(newRating)}
                    value={rating}
                    count={5}
                    edit={true}
                    size={24}
                    color={"#b1b148"}
                  />
                </div>
              </div>
              <div>
                <textarea
                  style={{
                    backgroundColor: "#343339",
                    width: "-webkit-fill-available",
                    color: "white",
                  }}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              width: "20vw",
            }}
          >
            <Button
              className={styles.subBtn}
              onClick={() => props.setShowCmtF(false)}
            >
              Đóng
            </Button>
            <Button className={styles.subBtn} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Rating;
