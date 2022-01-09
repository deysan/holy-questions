import React from 'react';
import Emoji from 'components/Emoji';

const SectionGuarantee = () => {
  return (
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
  );
};

export default SectionGuarantee;
