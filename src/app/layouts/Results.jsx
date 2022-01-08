import React from 'react';
import { useLocation } from 'react-router-dom';
import Timer from '../components/Timer';
import Button from '../components/Button';
import Emoji from '../components/Emoji';
import logoApplepay from '../../img/logo-applepay.png';
import logoDinersclub from '../../img/logo-dinersclub.png';
import logoDiscover from '../../img/logo-discover.png';
import logoGpay from '../../img/logo-gpay.png';
import logoMastercard from '../../img/logo-mastercard.png';
import logoPaypal from '../../img/logo-paypal.png';
import logoVisa from '../../img/logo-visa.png';
import mountainPeople from '../../img/mountain-people.png';

const Results = () => {
  const { pathname } = useLocation();

  return (
    <div className="results-page">
      <div className="section-result">
        <div className="top-bar">
          <h1 className="result-title visually-hidden">Quiz results</h1>
          <Timer time={60} />
          <Button
            textButton={'Get my plan'}
            classButton={'button-blue button-top-bar'}
            typeButton={'button'}
            linkButton={() => (window.location.href = `${pathname}#price`)}
          />
        </div>
        <section className="section-forecast">
          <h2 className="section-title">Forecast based on your answers</h2>
          <div className="card-item calendar">
            <h3 className="card-title">
              Super powerful habits <span className="text-blue">In 7 days</span>
              , you will already get
            </h3>
          </div>
          <div className="card-group-small">
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
          <div className="card-group-big">
            <div className="card-item skill">
              <h3 className="card-title">
                <Emoji label={'flexed_biceps'} icon={'💪'} nospace />{' '}
                Multi-tasking skill
              </h3>
            </div>
            <div className="card-item level">
              <h3 className="card-title">
                <Emoji label={'star_struck'} icon={'🤩'} nospace />{' '}
                Procrastination level
              </h3>
            </div>
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
            <span className="text-blue">99% of content</span> meets what you
            chose in the quiz{' '}
          </li>
        </ol>
      </section>
      <section className="section-people">
        <h2 className="section-title">
          More <span className="text-blue">than 2 mln</span> people are building
          habits with our plan
        </h2>
        <img src={mountainPeople} alt="Mountain People" />
        <Button
          textButton={'Get my habit plan'}
          classButton={'button-blue'}
          typeButton={'button'}
        />
      </section>
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
            <span className="text-bold">Bonus guide:</span> how to apply habits
            to career
          </li>
          <li>
            <span className="text-bold">Bonus guide:</span> how to apply habits
            to relationships
          </li>
        </ul>
      </section>
      <section id="price" className="section-price">
        <h2 className="section-title">
          <span className="text-blue">$19.99</span>
          <sup>$29,99</sup>
        </h2>
        <Button
          textButton={'Get my habit plan'}
          classButton={'button-blue'}
          typeButton={'button'}
        />
        <span className="text-opacity">
          Instantly to your inbox • Money-back guarantee
        </span>
      </section>
      <section className="section-guarantee">
        <h3 className="section-title">
          100% money-back <span className="text-blue">guarantee </span>
          <Emoji label={'money_with_wings'} icon={'💸'} nospace />
        </h3>
        <div className="section-description">
          <p>
            If you feel that your plan won’t work for you, we guarantee to give
            you money back in <span className="text-blue">14 days</span>.
          </p>
          <p> But you know, there’s no way it will dissapoint you ;)</p>
        </div>
      </section>
      <section className="section-pay">
        <h4 className="section-title">Pay safe & secure</h4>
        <ul className="logos-list">
          <li>
            <img src={logoMastercard} alt="Mastercard" />
          </li>
          <li>
            <img src={logoVisa} alt="Visa" />
          </li>
          <li>
            <img src={logoPaypal} alt="Paypal" />
          </li>
          <li>
            <img src={logoDiscover} alt="Discover" />
          </li>
          <li>
            <img src={logoDinersclub} alt="Dinersclub" />
          </li>
          <li>
            <img src={logoApplepay} alt="Applepay" />
          </li>
          <li>
            <img src={logoGpay} alt="Gpay" />
          </li>
        </ul>
        <ul className="links-list">
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <span className="text-opacity">
          GM Unicorn Corporation Limited Florinis 7, Greg Tower, 2nd Floor,
          1065, Nicosia, Cyprus
        </span>
      </section>
    </div>
  );
};

export default Results;
