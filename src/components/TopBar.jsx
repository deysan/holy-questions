import React from 'react';
import { useLocation } from 'react-router-dom';
import Timer from './Timer';
import Button from './Button';

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <div id="top-bar" className="top-bar">
      <div className="section-timer">
        <Timer time={60} />
      </div>
      <div className="section-button">
        <Button
          textButton={'Get my plan'}
          classButton={'button-blue'}
          typeButton={'button'}
          linkButton={() => (window.location.href = `${pathname}#price`)}
        />
      </div>
    </div>
  );
};

export default TopBar;
