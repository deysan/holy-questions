import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import OptionsList from '../components/OptionsList';
import Status from '../components/Status';

const Questions = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestion = useSelector((state) => state.quiz.currentQuestion);

  const question = questions[currentQuestion];

  return (
    <div className="question-page">
      <Status
        currentQuestion={currentQuestion}
        allQuestions={questions.length}
      />
      <Title
        questionTitle={question.title}
        questionDescription={question.description}
      />
      <OptionsList
        questionId={question.id}
        optionsList={question.options}
        optionsType={question.type}
        specialType={question.specialType}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default Questions;
