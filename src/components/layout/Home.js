import React, { useEffect, useState } from "react";
import Banner from "../common/Banner";
import Landing from "../common/Landing/Landing";
import app from "../../App.module.css";
import productService from "../../services/product.service";
import styles from "./Home.module.css";
import { connect } from "react-redux";
function Home(props) {
  const categories = [
    {
      id: "1",
      categoryName: "Khuyến mãi",
    },
    {
      id: "2",
      categoryName: "Mẹ - bé",
    },
    {
      id: "3",
      categoryName: "Chăm sóc sắc đẹp",
    },
  ];
  const [data1, setData1] = useState([]);
  useEffect(() => {
    setData1(getProductList(6));
  }, []);
  function getProductList(quantity) {
    productService
      .getList(quantity)
      .then((res) => {
        setData1(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className={`${app.commonContainer}`}>
      {console.log(props.authenticate.isLoginSuccess)}
      {console.log(props.authenticate.user)}
      <Banner />
      <div className={styles.productList}>
        <h1>{categories[0].categoryName}</h1>
        <Landing data={data1} col={6} />
      </div>
      <div className={styles.productList}>
        <h1>{categories[1].categoryName}</h1>
        <Landing data={data1} col={6} />
      </div>
      <div className={styles.productList}>
        <h1>{categories[2].categoryName}</h1>
        <Landing data={data1} col={6} />
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    authenticate: state.authenticate
  }
}
export default connect(mapStateToProps)(Home)