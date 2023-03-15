import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={styles.ButtonContainer}
        style={props.ButtonStyle}
        disabled={props.disabled}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
