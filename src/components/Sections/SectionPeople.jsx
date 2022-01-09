import React from 'react';
import Button from 'components/Button';
import mountainPeople from 'images/mountain-people.png';

const SectionPeople = () => {
  return (
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
  );
};

export default SectionPeople;
