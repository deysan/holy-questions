import React from 'react';
import PropTypes from 'prop-types';

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

Title.propTypes = {
  questionTitle: PropTypes.string.isRequired,
  questionDescription: PropTypes.string
};

export default Title;
