import React from 'react';

const Title = ({ questionTitle, questionDescription }) => {
  return (
    <>
      <h1 className="question-title">{questionTitle}</h1>
      {questionDescription && (
        <p className="question-description">{questionDescription}</p>
      )}
    </>
  );
};

export default Title;
