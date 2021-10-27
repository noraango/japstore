import {
  faAngleDown,
  faAngleUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";

export default function DropDownButton(props) {
  return (
    <button
      className={`${styles.dropDownButton}`}
      onMouseEnter={props.showList}
      onMouseLeave={props.hideList}
    >
      <FontAwesomeIcon className={`${styles.iconDropDown1}`} icon={faBars} />
      {props.content}
      <FontAwesomeIcon
        className={`${styles.iconDropDown2}`}
        icon={props.state ? faAngleUp : faAngleDown}
      />
    </button>
  );
}
