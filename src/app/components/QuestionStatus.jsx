import React from 'react';

const QuestionStatus = ({ questions, currentQuestion, handlePrevQuestion }) => {
  return (
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
  );
};

export default QuestionStatus;
