import styles from "./Edit.module.css";
import MessageBox from "../../common/MessageBox/MessageBox";
import { useEffect, useState } from "react";
import productService from "../../../services/product.service";
import imageService from "../../../services/imageService";

export default function Edit(props) {
  const [submit, setSubmit] = useState(true);
  const [product, setProduct] = useState({ 
    brand: "",
    code: "",
    description: "",
    displayImage: null,
    displayImageName: "",
    id: null,
    imageNames: [],
    manufacturer: "",
    name: "",
    origin: "",
    originId: null,
    packingMethod: "",
    packingMethodId: null,
    price: null,
    productStatusId: null,
    quantity: null,
    shortDescription: "",
    size: "",
    status: "",
    weight: null,
  });
  const [origins, setOrigins] = useState([]);
  useEffect(() => {
    fetchProduct();
    retreiveOrigin();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function fetchProduct() {
    productService
      .getDetail(props.match.params.id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function retreiveOrigin() {
    productService
      .getOrgin()
      .then((res) => {
        setOrigins(res.data);
        // console.log(res.data[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function onSubmit() {
    // var data = {
    //   code: code,
    //   name: name,
    //   price: price,
    //   size: size,
    //   weight: weight,
    //   manufacturer: manu,
    //   shortDes: short,
    //   images: imageFiles,
    //   des: des,
    //   brand: brand,
    //   originId: originId,
    //   packingMethodId: packingId,
    //   statusId: statusId,
    //   displayImage: imageFile,
    // };
    // productService
    //   .create(data)
    //   .then((res) => {
    //     console.log(res);
    //     setSubmit(false);
    //   })
    //   .catch((err) => {
    //     setSubmit(true);
    //   });
    console.log(product.originId);
    // setSubmit(false);
  }
  function onReturn() {
    props.history.push(props.match.path.split("/edit")[0]);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <h1 className={`title`}>S???a s???n ph???m</h1>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.inputImage} ${styles.span31}`}>
          <input type="file" title="" />
          <img
            src={imageService.get(product.displayImageName)}
            alt="Kh??ng load ???????c ???nh"
          />
        </div>
        <div className={`${styles.span12}`}>
          <h2 className={`label`}>T??n s???n ph???m</h2>
          <input
            className={`input`}
            placeholder="Nh???p t??n s???n ph???m"
            defaultValue={product.name}
            onChange={(e) => (product.name = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>M?? s???n ph???m</h2>
          <input
            className={`input`}
            placeholder="Nh???p m?? s???n ph???m"
            defaultValue={product.code}
            onChange={(e) => (product.code = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Gi??</h2>
          <input
            className={`input`}
            type="number"
            min="0"
            max="999999999"
            step="1000"
            placeholder="Nh???p gi??"
            defaultValue={product.price}
            onChange={(e) => (product.price = e.target.value)}
          />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>C??n n???ng(Kg)</h2>
          <input
            className={`input`}
            type="number"
            min="0"
            max="999999"
            step="1"
            placeholder="Nh???p c??n n???ng"
            defaultValue={product.weight}
            onChange={(e) => (product.weight = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>K??ch th?????c</h2>
          <input
            className={`input`}
            placeholder="Nh???p k??ch th?????c"
            defaultValue={product.size}
            onChange={(e) => (product.size = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.inputImages}`}>
          <h2 className={`label`}>H??nh ???nh s???n ph???m</h2>
          <input className={`input`} type="file" multiple />
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Th????ng hi???u</h2>
          <input
            className={`input`}
            placeholder="Nh???p t??n th????ng hi???u"
            defaultValue={product.brand}
            onChange={(e) => (product.brand = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>N??i s???n xu???t</h2>
          <input
            className={`input`}
            placeholder="Nh???p n??i s???n xu???t"
            defaultValue={product.manufacturer}
            onChange={(e) => (product.manufacturer = e.target.value)}
          ></input>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Xu???t x???</h2>
          <select
            className={`input`}
            onChange={(e) => {
              product.originId = e.target.value;
              e.target.value = 3;
            }}
          >
            {origins.map((origin, index) => (
              <option className={`input`} key={index} value={origin.id}>
                {origin.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Ph????ng th???c ????ng g??i</h2>
          <select className={`input`}>
            {/* {packMethods.map((packing, index) => (
              <option key={index} value={packing.id}>
                {packing.name}
              </option>
            ))} */}
          </select>
        </div>
        <div className={`${styles.span11}`}>
          <h2 className={`label`}>Tr???ng th??i</h2>
          <select className={`input`}>
            {/* {statuses.map((status, index) => (
              <option key={index} value={status.id}>
                {status.name}
              </option>
            ))} */}
          </select>
        </div>
        <div className={`${styles.inputShort}`}>
          <h2 className={`label`}>M?? t??? ng???n g???n</h2>
          <textarea
            className={`input`}
            placeholder="Nh???p m?? t??? ng???n g???n"
            defaultValue={product.shortDescription}
            onChange={(e) => (product.shortDescription = e.target.value)}
          ></textarea>
        </div>
        <div className={`${styles.inputDes}`}>
          <h2 className={`label`}>M?? t??? ?????y ?????</h2>
          <textarea
            className={`input`}
            placeholder="Nh???p m?? t??? chi ti???t v??? s???n ph???m"
            defaultValue={product.description}
            onChange={(e) => (product.description = e.target.value)}
          ></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={`label`} onClick={onSubmit}>
            C???p nh???t
          </button>
          <button className={`label`} onClick={onReturn}>
            Quay l???i
          </button>
        </div>
      </div>
      {!submit ? <MessageBox onClick={onReturn} /> : ""}
    </div>
  );
}
