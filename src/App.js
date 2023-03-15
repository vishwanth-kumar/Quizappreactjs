import styles from "./App.module.css";
import Banner from "./Componets/UI/Banner/Banner";
import { useState } from "react";
import Button from "./Componets/UI/Button/Button";
import QuizData from "./Data/Data";
import Card from "./Componets/UI/Card/Card";

const resultBanner = {
  backgroundColor: "#FA5F55",
  borderRadius: "2%",
  fontWeight: "bold",
};

const startButtonStyle = {
  backgroundColor: "#FFDBAC",
  textAlign: "center",
  fontWeight:"790",
  width: "100%",
  fontsize: "40px",
};

const optionsButtonStyle = {
  backgroundColor: "#FFDBAC",
  textAlign: "center",
  width: "100%",
};

const showResultButtonStyle = {
  backgroundColor: "green",
  textAlign: "center",
  color: "white",
};

function App() {
  const [showResult, setShowResult] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  

  function onClickHandler() {
    setShowStartBtn(!showStartBtn);
    setShowResult(false);
    setCountCorrectAnswers(0);
  }

  function showResultHandler() {
    setShowStartBtn(!showStartBtn);
    setShowResult(false);
    setShowResult(true);
  }

  return (
    <div className={styles.Wrapper}>
      <h1>Quizz App</h1>

      <ResultBanner showResult={showResult} result={countCorrectAnswers} />

      <div className={styles.StartButton} onClick={onClickHandler}>
        {showStartBtn && (
          <Button buttonText={"Start Quiz"} ButtonStyle={startButtonStyle} />
        )}
      </div>

      {!showStartBtn && (
        <div className={styles.QuizDataContainer}>
          {QuizData.map((value, index) => {
            return (
              <Card
                key={index}
                value={value}
                ButtonStyle={optionsButtonStyle}
                countCorrectAnswers={countCorrectAnswers}
                setCountCorrectAnswers={setCountCorrectAnswers}
              />
            );
          })}
        </div>
      )}
      {!showStartBtn && (
        <div className={styles.ShowResultButton} onClick={showResultHandler}>
          <Button
            buttonText={"Show Result"}
            ButtonStyle={showResultButtonStyle}
          />
        </div>
      )}
    </div>
  );
}

function ResultBanner({ showResult, result }) {
  return (
    <>
      {showResult && (
        <Banner
          styleObject={resultBanner}
          text={`You have answered ${result}/5 correctly`}
        />
      )}
    </>
  );
}

export default App;
