import React from 'react';

const SectionInside = () => {
  return (
    <section className="section-inside">
      <h2 className="section-title">What’s inside:</h2>
      <div className="card-group-big">
        <div className="card-item inside-1">
          Personalized plan on habits transformation: tools & strategies
        </div>
        <div className="card-item inside-2">
          Habit tracker with challenges set for topics you choose
        </div>
      </div>
      <h3 className="section-subtitle">
        <span className="text-blue">Get your bonus:</span>
      </h3>
      <ul>
        <li>The habits cheat sheet</li>
        <li>
          <span className="text-bold">Bonus guide:</span> how to apply habits to
          career
        </li>
        <li>
          <span className="text-bold">Bonus guide:</span> how to apply habits to
          relationships
        </li>
      </ul>
    </section>
  );
};

export default SectionInside;
