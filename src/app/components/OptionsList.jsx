import React from 'react';
import Button from './Button';
import OptionItem from './OptionItem';

const OptionsList = ({ optionsList, optionsType, specialType, questionId }) => {
  const formPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className={`question-form question-form-${questionId}`}
      onSubmit={formPreventDefault}
    >
      <ul className={`options-list ${specialType || optionsType}`}>
        {optionsList.map((optionItem, optionIndex) => (
          <OptionItem
            key={`option${optionIndex}`}
            optionsType={optionsType}
            specialType={specialType}
            optionItem={optionItem}
            optionIndex={optionIndex}
            questionId={questionId}
          />
        ))}
      </ul>
      {optionsType === 'checkbox' && (
        <Button classButton={'button-blue'} typeButton={'submit'} />
      )}
    </form>
  );
};

export default OptionsList;
