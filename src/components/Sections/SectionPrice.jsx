import React from 'react';
import Button from 'components/Button';

const SectionPrice = () => {
  return (
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
  );
};

export default SectionPrice;
