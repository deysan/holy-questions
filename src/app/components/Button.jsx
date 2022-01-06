import React from 'react';

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

export default Button;
