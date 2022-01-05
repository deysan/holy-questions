import React from 'react';

const Button = ({ handleNextQuestion }) => {
  return (
    <>
      {/* {question.type === 'checkbox' && ( */}
      <button
        className="button button-blue"
        type="submit"
        onClick={() => handleNextQuestion()}
      >
        Next
      </button>
    </>
  );
};

export default Button;
