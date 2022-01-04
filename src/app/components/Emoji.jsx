import React from 'react';

const Emoji = ({ label, icon }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {`${icon} `}
  </span>
);
export default Emoji;
