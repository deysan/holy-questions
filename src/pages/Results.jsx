import React from 'react';
import TopBar from 'components/TopBar';
import { Sections } from 'components/Sections';

const Results = () => {
  return (
    <div className="results-page">
      <h1 className="result-title visually-hidden">Quiz results</h1>
      <TopBar />
      <Sections />
    </div>
  );
};

export default Results;
