import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import imageService from "../../../services/imageService";
import styles from "../../layout/User/User.module.css";
import { Modal, Button } from 'react-bootstrap';
const Rating = (props) => {
    let user= JSON.parse(localStorage.getItem('user'));
    const [rating, setRating] = useState();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        let rateOfU = {
            UserId: user.id,
            ProductId: 3,
            StarRate: 0,
            Comment: ''
        }
    }
    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }
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
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nhận xét của bạn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="rate-detail">
                        <div className="row">
                            <div className="col col-md-2 col-4 rate-img">
                                <img src={imageService.get("user.png")} alt="Không load được ảnh" />
                            </div>
                            <div className="col col-md-10 col-8">
                                <div className="rate-content">
                                    <h4 className="user-rate">4444</h4>
                                    <p style={{ margin: "0" }}>23/24/2345</p>

                                    <ReactStars
                                        onChange={newRating => setRating(newRating)}
                                        count={5}
                                        edit={true}
                                        size={24}
                                        color={"#b1b148"}
                                    />

                                </div>
                            </div>
                            <div>
                                <textarea style={{ backgroundColor: '#343339', width: '-webkit-fill-available', color: 'white' }} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div style={{
                        display: 'flex',
                        width: '20vw'
                    }}>
                        <Button className={styles.subBtn} onClick={() => props.setShowCmtF(false)}>Đóng</Button>
                        <Button className={styles.subBtn} onClick={handleSubmit}>Submit</Button>
                    </div>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default Rating
