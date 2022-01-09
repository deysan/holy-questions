import React from 'react';
import PropTypes from 'prop-types';

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

Emoji.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string.isRequired,
  nospace: PropTypes.bool
};

export default Emoji;
