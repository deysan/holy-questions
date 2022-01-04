import React from 'react';

const QuestionButton = ({ handleNextQuestion }) => {
  return (
    <>
      {/* {question.type === 'checkbox' && ( */}
      <button
        className="button button-blue"
        onClick={() => handleNextQuestion()}
      >
        Next
      </button>
    </>
  );
};

export default QuestionButton;
