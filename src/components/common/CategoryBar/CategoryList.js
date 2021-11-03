import Category from "./Category";
import styles from "./Styles.module.css";
export default function CategoryList(props) {
  return (
    <ul
      className={styles.categoryList}
      onMouseEnter={props.showList}
      onMouseLeave={props.hideList}
    >
      {props.categories.map((category, index) => (
        <Category key={index} data={category}/>
      ))}
    </ul>
  );
}
