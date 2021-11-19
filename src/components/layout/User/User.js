import React, { useState } from 'react'
import styles from './User.module.css'
import { Form, FloatingLabel } from 'react-bootstrap'
const User = () => {
    const radiosGender = [
        { name: 'Nam', value: '1' },
        { name: 'Nữ', value: '2' },
        { name: 'Khác', value: '3' },
    ]
    const pushDate = (start, end, arr) => {
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
        return arr
    }
    const yearCur = new Date().getFullYear();
    let day = [], month = [], year = [];
    pushDate(1, 31, day)
    pushDate(1, 12, month)
    pushDate(1910, yearCur, year);
    const pathz = process.env.PUBLIC_URL + "/images" + "/user-icon.png";
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardInfo}>
                    <div className={styles.header}>
                        <h1 className={styles.h1}>Hồ sơ của tôi</h1>
                        <div className={styles.headerDiv}>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.formInfo}>
                            <form className={styles.formInfoMain}>
                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >Tên đăng nhập</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.input2}>
                                                <div className={styles.input3}>
                                                    <input className={styles.inputMain} type="text" id="fname" name="fname" /><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >Tên</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.input2}>
                                                <div className={styles.input3}>
                                                    <input className={styles.inputMain} type="text" id="fname" name="fname" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >Email</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.email1}>
                                                <div className={styles.email2}>
                                                    wh*************@gmail.com
                                                    <button class={styles.emailBtn}>Thay đổi</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >Số điện thoại</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.input2}>
                                                <div className={styles.input3}>
                                                    <input className={styles.inputMain} type="text" id="fname" name="fname" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >Tên shop</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.input2}>
                                                <div className={styles.input3}>
                                                    <input className={styles.inputMain} type="text" id="fname" name="fname" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >giới tính</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div>
                                                <div className={styles.radioBtnGrp}>
                                                    {radiosGender.map((rad, id) =>
                                                    (
                                                        <div className={styles.radio} tabindex="0" role="radio" aria-checked="false">
                                                            <div className={styles.radioBtn}>
                                                                <div className={styles.radioBtnCirO}>
                                                                    <div class={styles.radioBtnCirI}>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={styles.radioContent}>
                                                                <div className="stardust-radio__label">{rad.name}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.label1}>
                                    <div className={styles.label2}>
                                        <div className={styles.label3}>
                                            <label >ngày sinh</label>
                                        </div>
                                        <div className={styles.input1}>
                                            <div className={styles.select}>
                                                <div className={styles.selection}>
                                                    <FloatingLabel controlId="floatingSelectGrid" label="Ngày" className={styles.selectDiv}>
                                                        <Form.Select aria-label="Floating label select example">
                                                            {day.map((v, id) =>
                                                                <option value={id}>{v}</option>
                                                            )}
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                </div>
                                                <div className={styles.selection}>
                                                    <FloatingLabel controlId="floatingSelectGrid" label="Tháng" className={styles.selectDiv}>
                                                        <Form.Select aria-label="Floating label select example">
                                                            {month.map((v, id) =>
                                                                <option value={id}>{v}</option>
                                                            )}
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                </div>
                                                <div className={styles.selection}>
                                                    <FloatingLabel controlId="floatingSelectGrid" label="Năm" className={styles.selectDiv}>
                                                        <Form.Select aria-label="Floating label select example" htmlSize={1}>
                                                            {year.map((v, id) =>
                                                                <option value={id}>{v}</option>
                                                            )}
                                                        </Form.Select>
                                                    </FloatingLabel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.subBtnDiv}>
                                    <button className={styles.subBtn}>Lưu</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.imgDiv}>
                            <div className={styles.imgDiv2}>
                                <div className={styles.img}>
                                    <div className={styles.img2} style={{ backgroundImage: `url(${pathz})` }}>
                                    </div>
                                </div>
                                <input type="file" accept=".jpg,.jpeg,.png" style={{ display: 'none', lineHeight: 'normal', color: 'inherit', font: 'inherit', margin: 0 }} />
                                {/* <button type="button" className={styles.btnImg}>Chọn ảnh</button> */}
                                <div style={{paddingLeft: '2em'}}>
                                <Form.Control  type="file" accept=".jpg,.jpeg,.png" size="sm" />
                                </div>   
                                <div style={{ marginTop: '0.75rem', display: 'block' }}>
                                    <div className={styles.scrpitDiv}>Dụng lượng file tối đa 1 MB</div>
                                    <div className={styles.scrpitDiv}>Định dạng:.JPEG, .PNG</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
