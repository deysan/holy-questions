import React from 'react';
import { useDispatch } from 'react-redux';
import { nextQuestion } from '../store/quizSlice';

const Button = ({ classButton, typeButton }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`button ${classButton}`}
        type={typeButton}
        onClick={() => dispatch(nextQuestion())}
      >
        Next
      </button>
    </>
  );
};

export default Button;
