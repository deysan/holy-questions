import React from 'react';

const QuestionTitle = ({ question }) => {
  return (
    <>
      <h1 className="question-title">{question.title}</h1>
      {question.description && (
        <p className="question-description">{question.description}</p>
      )}
    </>
  );
};

export default QuestionTitle;
