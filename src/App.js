// src/App.js
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import { questions } from "./data/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="App">
      <h1>Quiz Simples em React</h1>
      {quizFinished ? (
        <div>
          <h2>Você completou o quiz!</h2>
          <p>
            Pontuação: {score} de {questions.length}
          </p>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <Quiz question={questions[currentQuestion]} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
