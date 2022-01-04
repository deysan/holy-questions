import React, { useState } from 'react';
import QuestionOptions from '../components/questionOptions';
import { useSelector } from 'react-redux';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = useSelector((state) => state.quiz.questions);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;

    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const question = questions[currentQuestion];

  return (
    <>
      <div className="status-bar">
        <span className="status-questions">
          {currentQuestion + 1}/{questions.length}
        </span>
        {currentQuestion > 0 && (
          <span className="previous" onClick={() => handlePrevQuestion()}>
            Previous step
          </span>
        )}
      </div>
      <h1 className="question-title">{question.title}</h1>
      {question.description && (
        <p className="question-description">{question.description}</p>
      )}
      <QuestionOptions
        options={question.options}
        type={question.type}
        specialType={question?.specialType}
        id={currentQuestion}
      />
      {/* {question.type === 'checkbox' ? ( */}
      <button
        className="button button-blue"
        onClick={() => handleNextQuestion()}
      >
        Next
      </button>
      {/* ) : null} */}
    </>
  );
};

export default Questions;
