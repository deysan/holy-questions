import React from 'react';
import { useDispatch } from 'react-redux';
import { nextQuestion, toggleChecked } from '../store/quizSlice';
import Emoji from './Emoji';

const OptionsList = ({
  questionId,
  optionsType,
  specialType,
  optionItem,
  optionIndex
}) => {
  const dispatch = useDispatch();

  const optionName = optionItem.text.toLowerCase().split(' ').join('-');

  return (
    <li key={optionIndex} className="options-item">
      <input
        id={`question${questionId}-option${optionIndex}`}
        className={`options-input options-input-${
          specialType || optionsType
        } visually-hidden`}
        name={optionsType === 'checkbox' ? optionName : `question${questionId}`}
        type={optionsType}
        value={optionsType === 'radio' && optionName}
        checked={optionItem.checked}
        onChange={() => dispatch(toggleChecked({ questionId, optionIndex }))}
        onClick={() => {
          optionsType === 'radio' && dispatch(nextQuestion());
        }}
      />
      <label htmlFor={`question${questionId}-option${optionIndex}`}>
        {optionItem.icon && (
          <Emoji label={optionItem.label} icon={optionItem.icon} />
        )}
        {optionItem.textOf ? (
          <span className="text-bold">
            <span className="text-blue">{optionItem.text} / </span>
            {optionItem.textOf}
          </span>
        ) : (
          <>{optionItem.text}</>
        )}
      </label>
    </li>
  );
};

export default OptionsList;
