import React from 'react';

const SectionPlan = () => {
  return (
    <section className="section-plan">
      <h2 className="section-title">
        How your personal habit plan{' '}
        <span className="text-blue">was created:</span>
      </h2>
      <ol>
        <li className="card-item plan partners">
          More than 1500 books and articles analyzed to choose the best
        </li>
        <li className="card-item plan">
          Done and approved by behavioural psychologists
        </li>
        <li className="card-item plan">
          <span className="text-blue">99% of content</span> meets what you chose
          in the quiz{' '}
        </li>
      </ol>
    </section>
  );
};

export default SectionPlan;
