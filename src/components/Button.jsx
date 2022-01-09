import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ textButton, classButton, typeButton, linkButton }) => {
  return (
    <>
      <button
        className={`button ${classButton}`}
        type={typeButton}
        onClick={linkButton}
      >
        {textButton}
      </button>
    </>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  classButton: PropTypes.string,
  typeButton: PropTypes.string,
  linkButton: PropTypes.func
};

export default Button;
