import React from 'react';

const style = {
  fontSize: '20px'
};

const Emoji = ({ label, icon, nospace }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
    style={style}
  >
    {`${icon}`}
    {nospace ? `` : ` `}
  </span>
);
export default Emoji;
