import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleChecked } from '../store/quizSlice';
import Emoji from './Emoji';

const OptionItem = ({ id, type, specialType, option, index }) => {
  const dispatch = useDispatch();

  return (
    <li key={index} className="options-item">
      <input
        id={`question${id}-option${index}`}
        className={`options-input options-input-${
          specialType || type
        } visually-hidden`}
        name={
          type === 'checkbox'
            ? `${option.text.toLowerCase().split(' ').join('-')}`
            : `question${id}`
        }
        type={type}
        value={
          type === 'radio' &&
          `${option.text.toLowerCase().split(' ').join('-')}`
        }
        checked={option.checked}
        onChange={() => dispatch(toggleChecked({ id, index }))}
      />
      <label htmlFor={`question${id}-option${index}`}>
        {option.icon && <Emoji label={option.label} icon={option.icon} />}
        {option.textOf ? (
          <>
            <span>{option.text} / </span>
            {option.textOf}
          </>
        ) : (
          <>{option.text}</>
        )}
      </label>
    </li>
  );
};

export default OptionItem;
