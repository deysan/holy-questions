import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time = 599 }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  const updateTimeLeft = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
      return () => clearTimeout(timer);
    }, 1000);
  });

  return (
    <>
      <h5>Special offer expires in</h5>
      <b className="timer text-blue">{updateTimeLeft(timeLeft)}</b>
    </>
  );
};

Timer.propTypes = {
  time: PropTypes.number.isRequired
};

export default Timer;
