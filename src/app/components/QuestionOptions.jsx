import React from 'react';

const QuestionOptions = ({ options, type, specialType, id }) => {
  return (
    <ul className={`options-list ${specialType || type}`}>
      {options.map((option, index) => (
        <li key={index} className="options-item">
          <input
            id={`option${index}`}
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
              type === 'radio'
                ? `${option.text.toLowerCase().split(' ').join('-')}`
                : null
            }
          />
          <label htmlFor={`option${index}`}>
            {option.icon && (
              <>
                <span role="img" aria-label={option.label}>
                  {option.icon}
                </span>{' '}
              </>
            )}
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
      ))}
    </ul>
  );
};

export default QuestionOptions;
