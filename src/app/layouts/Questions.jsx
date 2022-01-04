import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionTitle from '../components/QuestionTitle';
import QuestionOptions from '../components/QuestionOptions';
import QuestionButton from '../components/QuestionButton';
import QuestionStatus from '../components/QuestionStatus';

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

  const question = questions[currentQuestion];

  return (
    <div className="question-page">
      <QuestionStatus
        questions={questions}
        currentQuestion={currentQuestion}
        handlePrevQuestion={handlePrevQuestion}
      />
      <QuestionTitle question={question} />
      <QuestionOptions
        options={question.options}
        type={question.type}
        specialType={question?.specialType}
        id={currentQuestion}
      />
      <QuestionButton handleNextQuestion={handleNextQuestion} />
    </div>
  );
};

export default Questions;
