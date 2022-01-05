import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import FormOptions from '../components/FormOptions';
import Status from '../components/Status';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = useSelector((state) => state.quiz.questions);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;

    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const formPreventDefault = (event) => {
    event.preventDefault();
  };

  const question = questions[currentQuestion];

  return (
    <div className="question-page">
      <Status
        questions={questions}
        currentQuestion={currentQuestion}
        handlePrevQuestion={handlePrevQuestion}
      />
      <Title question={question} />
      <FormOptions
        options={question.options}
        type={question.type}
        specialType={question?.specialType}
        id={currentQuestion + 1}
        handleNextQuestion={handleNextQuestion}
        formPreventDefault={formPreventDefault}
      />
    </div>
  );
};

export default Questions;
