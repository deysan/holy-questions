import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';
import OptionItem from './OptionItem';

const OptionsList = ({
  optionsList,
  optionsType,
  specialType,
  questionId,
  currentQuestion
}) => {
  const optionsQuestion = useSelector(
    (state) => state.quiz.questions[currentQuestion].options
  );

  const checkedOptions = optionsQuestion.filter((option) => option.checked);

  let classButton = 'button-blue';

  const getClassButton = () => {
    if (!checkedOptions.length) {
      return (classButton += ' disabled');
    }
    return classButton;
  };

  const getPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className={`question-form question-form-${questionId}`}
      onSubmit={getPreventDefault}
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
        <div className="button-group">
          <Button
            classButton={getClassButton()}
            typeButton={'submit'}
            currentQuestion={currentQuestion}
          />
          {specialType && (
            <Link className="button-skip" to="/result">
              Skip
            </Link>
          )}
        </div>
      )}
    </form>
  );
};

export default OptionsList;
