import React from 'react';
import Button from './Button';
import OptionItem from './OptionItem';

const FormOptions = ({
  options,
  type,
  specialType,
  id,
  handleNextQuestion,
  formPreventDefault
}) => {
  return (
    <form
      className={`question-form question-form-${id}`}
      onSubmit={formPreventDefault}
    >
      <ul className={`options-list ${specialType || type}`}>
        {options.map((option, index) => (
          <OptionItem
            key={`option${index}`}
            type={type}
            specialType={specialType}
            option={option}
            index={index}
            id={id}
          />
        ))}
      </ul>
      <Button handleNextQuestion={handleNextQuestion} />
    </form>
  );
};

export default FormOptions;
