import React from 'react';
import HabitList from 'components/HabitsList';

const SectionHabits = () => {
  return (
    <section className="section-habits">
      <h2 className="section-title">
        We are what we do <span className="text-blue">every day</span>
      </h2>
      <p className="section-description">
        Habits bring you system to change, either good or bad
      </p>
      <div className="habits-list">
        <HabitList />
      </div>
    </section>
  );
};

export default SectionHabits;
