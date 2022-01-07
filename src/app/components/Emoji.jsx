import React from 'react';

const Emoji = ({ label, icon, nospace }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {`${icon}`}
    {nospace ? `` : ` `}
  </span>
);
export default Emoji;
