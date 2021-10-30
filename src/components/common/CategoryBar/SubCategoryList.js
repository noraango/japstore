import styles from "./Styles.module.css";
import SubCategory from "./SubCategory";

export default function SubCategoryList(props) {
  return (
    <ul className={styles.subCategoryList}>
      {props.data.map((cate, index) => (
        <SubCategory key={index} data={cate} />
      ))}
    </ul>
  );
}
