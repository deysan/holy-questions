import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { nextQuestion } from '../store/quizSlice';
import Button from './Button';
import OptionsList from './OptionsList';

const FormQuestions = ({
  optionsList,
  optionsType,
  specialType,
  questionId,
  currentQuestion
}) => {
  const questions = useSelector((state) => state.quiz.questions);
  const optionsQuestion = questions[currentQuestion].options;
  const checkedOptions = optionsQuestion.filter((option) => option.checked);
  const dispatch = useDispatch();
  const history = useHistory();

  let classButton = 'button-blue';

  const getClassButton = () => {
    if (!checkedOptions.length) {
      return (classButton += ' disabled');
    }
    return classButton;
  };

  return (
    <form
      className={`question-form question-form-${questionId}`}
      onSubmit={(event) => event.preventDefault()}
    >
      <ul className={`options-list ${specialType || optionsType}`}>
        {optionsList.map((optionItem, optionIndex) => (
          <OptionsList
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
            textButton={'Next'}
            classButton={getClassButton()}
            typeButton={'submit'}
            linkButton={() => {
              !getClassButton().includes('disabled') &&
                (currentQuestion === questions.length - 1
                  ? history.replace('/results')
                  : dispatch(nextQuestion()));
            }}
          />
          {specialType && (
            <Link
              className="button-skip"
              to="#"
              onClick={() => history.replace('/results')}
            >
              Skip
            </Link>
          )}
        </div>
      )}
    </form>
  );
};

export default FormQuestions;
