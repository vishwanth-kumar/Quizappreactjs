import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = (props) => {
  const [disabled, setDisabled] = useState(false);

  const getSelectedValue = (option) => {
    setDisabled(true);
    if (props.value.correctAnswer === option) {
      props.setCountCorrectAnswers(props.countCorrectAnswers + 1);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.question}>{props.value.Question}</div>
      <div className={styles.options}>
        {props.value.options.map((option, index) => {
          return (
            <div key={index} onClick={() => getSelectedValue(option)}>
              <Button
                buttonText={option}
                ButtonStyle={props.ButtonStyle}
                disabled={disabled}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
