import React, { useState } from 'react';
import './App.css';
import { questionsData } from './questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>ನಿಮ್ಮ ಅಂಕ {questionsData.length} ರಲ್ಲಿ {score}  </h1>
          <button onClick={restartQuiz}>ಪುನರಾರಂಭ</button>
        </div>
      ) : (
        <div className="question-section">
            <h1>
              
              ಪ್ರಶ್ನೆ {currentQuestion + 1}/{questionsData.length}
                          </h1>
          <div className="question-text">{questionsData[currentQuestion].question}</div>
          <div className="options">
            {questionsData[currentQuestion].options.map((option, index) => (
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
