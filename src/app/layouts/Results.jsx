import React from 'react';
import { useLocation } from 'react-router-dom';
import Timer from '../components/Timer';
import Button from '../components/Button';

const Results = () => {
  const { pathname } = useLocation();

  return (
    <div className="results-page">
      <main>
        <div className="section-result">
          <div className="top-bar">
            <h1 className="result-title visually-hidden">Quiz results</h1>
            <Timer />
            <Button
              textButton={'Get my plan'}
              classButton={'button-blue button-top-bar'}
              typeButton={'button'}
              linkButton={() => (window.location.href = `${pathname}#pay`)}
            />
          </div>
          <section className="section-forecast">
            <h2 className="section-title">Forecast based on your answers</h2>
            <div className="card-item calendar">
              <h3>
                Super powerful habits{' '}
                <span className="text-blue">In 7 days</span>, you will already
                get
              </h3>
            </div>
            <div className="group-card">
              <div className="card-item bad-habits">
                <p>Old bad habits</p>
                <b>
                  <span className="text-orange">-4 habits</span>
                </b>
              </div>
              <div className="card-item timing-goal">
                <p>Timing goal</p>
                <b>
                  10 min / <span className="text-blue">day</span>
                </b>
              </div>
            </div>
          </section>
          <section className="section-charts">
            <h2 className="section-title">
              <span className="text-blue">In 28 days</span> your results will
              reach...
            </h2>
            <div className="card-item skill">
              <h3>
                Multi-tasking skill <span className="text-blue">In 7 days</span>
                , you will already get
              </h3>
            </div>
            <div className="card-item level">
              <h3>
                Procrastination level{' '}
                <span className="text-blue">In 7 days</span>, you will already
                get
              </h3>
            </div>
          </section>
        </div>
        <section className="section-habits">
          <h2 className="section-title">
            We are what we do <span className="text-blue">every day</span>
          </h2>
          <p className="section-description">
            Habits bring you system to change, either good or bad
          </p>
          <div className="habits-animation">habits-animation</div>
        </section>
        <section className="section-teach">
          <h2 className="section-title">
            Things your personalized plan{' '}
            <span className="text-blue">will teach you</span>
          </h2>
          <div className="card-item teach">newspaper</div>
        </section>
        <section className="section-plan">
          <h2 className="section-title">
            How your personal habit plan{' '}
            <span className="text-blue">was created:</span>
          </h2>
          <div className="card-item plan">1</div>
          <div className="card-item plan">2</div>
          <div className="card-item plan">3</div>
        </section>
        <section className="section-people">
          <h2 className="section-title">
            More <span className="text-blue">than 2 mln</span> people are
            building habits with our plan
          </h2>
          <div className="people-avatars">people-avatars</div>
        </section>
        <section className="section-inside">
          <h2 className="section-title">What’s inside:</h2>
          <div className="card-item inside">1</div>
          <div className="card-item inside">2</div>
          <h3>Get your bonus:</h3>
          <ul>
            <li>The habits cheat sheet</li>
            <li>Bonus guide: how to apply habits to career</li>
            <li>Bonus guide: how to apply habits to relationships</li>
          </ul>
        </section>
        <section className="section-inside">
          <h2 className="section-title">Price</h2>
          <span>Instantly to your inbox • Money-back guarantee</span>
        </section>
      </main>
      <footer>
        <section className="section-guarantee">
          <h3 className="section-title">
            100% money-back <span className="text-blue">guarantee</span>
          </h3>
          <p>
            If you feel that your plan won’t work for you, we guarantee to give
            you money back in 14 days.
          </p>
          <p> But you know, there’s no way it will dissapoint you ;)</p>
        </section>
        <section id="pay" className="section-pay">
          <h4 className="section-title">Pay safe & secure</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
          <span>
            GM Unicorn Corporation Limited Florinis 7, Greg Tower, 2nd Floor,
            1065, Nicosia, Cyprus
          </span>
        </section>
      </footer>
    </div>
  );
};

export default Results;
