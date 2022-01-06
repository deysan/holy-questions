import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nextQuestion } from '../store/quizSlice';

const Button = ({ classButton, typeButton, currentQuestion }) => {
  const questions = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <button
        className={`button ${classButton}`}
        type={typeButton}
        onClick={() => {
          currentQuestion === questions.length - 1
            ? history.replace('/result')
            : !classButton.includes('disabled') && dispatch(nextQuestion());
        }}
      >
        Next
      </button>
    </>
  );
};

export default Button;
