import React from 'react';
import { useDispatch } from 'react-redux';
import { prevQuestion } from '../store/quizSlice';

const Status = ({ currentQuestion, allQuestions }) => {
  const dispatch = useDispatch();

  return (
    <div className="status-bar">
      <span className="status-questions">
        {currentQuestion + 1}/{allQuestions}
      </span>
      {currentQuestion > 0 && (
        <span className="previous" onClick={() => dispatch(prevQuestion())}>
          Previous step
        </span>
      )}
    </div>
  );
};

export default Status;
