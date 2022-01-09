import React from 'react';
import { useSelector } from 'react-redux';

const SectionForecast = () => {
  const question = useSelector((state) => state.quiz.questions);

  const getOption = (numberQuestion) => {
    const indexOption = question[numberQuestion - 1].options.findIndex(
      (option) => option.checked
    );

    return question[numberQuestion - 1].options[indexOption].text;
  };

  const getCountOptions = (numberQuestion) => {
    let countOptions = 1;

    const filterOptions = question[numberQuestion - 1].options.filter(
      (option) => option.checked
    );

    if (filterOptions.length > 0) {
      countOptions = filterOptions.length;
    }

    return countOptions;
  };

  return (
    <section className="section-forecast">
      <h2 className="section-title">Forecast based on your answers</h2>
      <div className="card-item calendar">
        <ol className="calendar-week">
          <li className="calendar-day">Mon</li>
          <li className="calendar-day">Thu</li>
          <li className="calendar-day">Wed</li>
          <li className="calendar-day">Thu</li>
          <li className="calendar-day">Fri</li>
          <li className="calendar-day">Sat</li>
          <li className="calendar-day selected">Sun</li>
        </ol>
        <b className="question-answer">{getCountOptions(12)}</b>
        <h3 className="card-title">
          Super powerful habits <span className="text-blue">In 7 days</span>,
          you will already get
        </h3>
      </div>
      <div className="card-group-small">
        <div className="card-item bad-habits">
          <p>Old bad habits</p>
          <b>
            <span className="text-orange">-{getCountOptions(12)} habits</span>
          </b>
        </div>
        <div className="card-item timing-goal">
          <p>Timing goal</p>
          <b>
            {getOption(9)} / <span className="text-blue">day</span>
          </b>
        </div>
      </div>
    </section>
  );
};

export default SectionForecast;
