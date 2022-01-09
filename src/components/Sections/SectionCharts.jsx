import React from 'react';
import Emoji from 'components/Emoji';

const SectionCharts = () => {
  return (
    <section className="section-charts">
      <h2 className="section-title">
        <span className="text-blue">In 28 days</span> your results will reach...
      </h2>
      <div className="card-group-big">
        <div className="card-item skill">
          <h3 className="card-title">
            <Emoji label={'flexed_biceps'} icon={'💪'} nospace /> Multi-tasking
            skill
          </h3>
        </div>
        <div className="card-item level">
          <h3 className="card-title">
            <Emoji label={'star_struck'} icon={'🤩'} nospace /> Procrastination
            level
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionCharts;
