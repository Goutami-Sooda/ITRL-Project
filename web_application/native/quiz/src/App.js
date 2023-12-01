import React, { useState } from 'react';
import './App.css';
import { questionsData } from './questions';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray(questionsData));

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShuffledQuestions(shuffleArray(questionsData));
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>ನಿಮ್ಮ ಅಂಕ {shuffledQuestions.length} ರಲ್ಲಿ {score}  </h1>
          <button onClick={restartQuiz}>ಪುನರಾರಂಭ</button>
        </div>
      ) : (
        <div className="question-section">
          <h1>ಪ್ರಶ್ನೆ {currentQuestion + 1}/{shuffledQuestions.length}</h1>
          <div className="question-text">{shuffledQuestions[currentQuestion].question}</div>
          <div className="options">
            {shuffledQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
