import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text, onClick, fontSize}){
    return <button className={styles.btn} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string,
    fontSize : PropTypes.number
}

export default Button