import React from 'react';
import Button from 'components/Button';

const SectionTeach = () => {
  return (
    <section className="section-teach">
      <h2 className="section-title">
        Things your personalized plan{' '}
        <span className="text-blue">will teach you</span>
      </h2>
      <div className="card-item teach">
        <ul>
          <li>Build a habit system to get a better result</li>
          <li>Bring life into all your ideas with a boosted motivation</li>
          <li>Make changes with small steps art</li>
        </ul>
        <Button
          textButton={'Get my habit plan'}
          classButton={'button-blue'}
          typeButton={'button'}
        />
      </div>
    </section>
  );
};

export default SectionTeach;
