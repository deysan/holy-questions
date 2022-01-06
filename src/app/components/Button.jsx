import React from 'react';

const Button = ({ classButton, typeButton, linkButton }) => {
  return (
    <>
      <button
        className={`button ${classButton}`}
        type={typeButton}
        onClick={linkButton}
      >
        Next
      </button>
    </>
  );
};

export default Button;
