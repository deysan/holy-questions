import React from 'react';
import { useDispatch } from 'react-redux';
import { prevQuestion } from 'store/quizSlice';
import PropTypes from 'prop-types';

const Status = ({ currentQuestion, allQuestions }) => {
  const dispatch = useDispatch();

  const progressStatus = {
    '--progress-status': `${((currentQuestion + 1) * 100) / allQuestions}%`
  };

  return (
    <div className="status-bar">
      <span className="status-questions" style={progressStatus}>
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

Status.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  allQuestions: PropTypes.number.isRequired
};

export default Status;
