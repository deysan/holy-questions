import React from 'react';

const QuestionOptions = ({ options, type, name }) => {
  return (
    <ul className={`options-list ${type}`}>
      {options.map((option, index) => (
        <li key={index} className="options-item">
          <input
            id={`option${index}`}
            className={`options-input options-input-${type} visually-hidden`}
            name={type === 'checkbox' ? `option${index}` : 'option'}
            type={type}
          />
          <label htmlFor={`option${index}`}>
            {option.symbol && (
              <>
                <span role="img" aria-label={option.label}>
                  {option.symbol}
                </span>{' '}
              </>
            )}
            {option.textOf ? (
              <>
                <span>{option.text}</span>
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
