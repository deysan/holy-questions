import React, { useState } from 'react';
import QuestionOptions from '../components/QuestionOptions';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      title: "The checklist you can't do without!",
      description:
        "Let's make your checklist plan. Opt for your goals to get excited:",
      options: [
        {
          text: 'Perform cleaning',
          label: 'sponge',
          icon: '🧽'
        },
        {
          text: 'Keep mental health',
          label: 'relieved_face',
          icon: '😌'
        },
        {
          text: 'Be productive',
          label: 'stopwatch',
          icon: '⏱️'
        },
        {
          text: 'Set useful nutrition',
          label: 'green_salad',
          icon: '🥗'
        },
        {
          text: 'Love & be loved',
          label: 'smiling_face_with_hearts',
          icon: '🥰'
        },
        {
          text: 'Have a healthy body',
          label: 'flexed_biceps',
          icon: '💪'
        },
        {
          text: 'Bring self-care into life',
          label: 'person_tipping_hand',
          icon: '💁'
        }
      ],
      type: 'checkbox'
    },
    {
      id: 2,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 3,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 4,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 5,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 6,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 7,
      title: 'What is your temperament type?',
      description: 'This information will help us to give you the best result',
      options: [
        {
          text: 'Sanguine'
        },
        {
          text: 'Choleric'
        },
        {
          text: 'Melancholic'
        },
        {
          text: 'Phlegmatic'
        },
        {
          text: "I don't know"
        }
      ],
      type: 'radio'
    },
    {
      id: 8,
      title: 'What would you like to have?',
      description: 'What are you missing for a fulfilling life?',
      options: [
        {
          text: 'More focus',
          label: 'nerd_face',
          icon: '🤓'
        },
        {
          text: 'More strength',
          label: 'smirking_face',
          icon: '😏'
        },
        {
          text: 'More calm',
          label: 'relieved_face',
          icon: '😌'
        },
        {
          text: 'More energy',
          label: 'star_struck',
          icon: '🤩'
        }
      ],
      type: 'radio'
    },
    {
      id: 9,
      title: 'What is your timing goal?',
      description:
        'How much time do you want to spend on self-development every day?',
      options: [
        {
          text: '5 min',
          textOf: 'day'
        },
        {
          text: '10 min',
          textOf: 'day'
        },
        {
          text: '15 min',
          textOf: 'day'
        },
        {
          text: '20+ min',
          textOf: 'day'
        }
      ],
      type: 'radio'
    },
    {
      id: 10,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 11,
      title: 'This is a test question',
      description: 'Just click "Next"',
      options: [
        {
          text: 'Next question'
        }
      ],
      type: 'radio'
    },
    {
      id: 12,
      title: "Are there any habits you'd like to quit?",
      description: null,
      options: [
        {
          text: 'Procrastination'
        },
        {
          text: 'Drinking'
        },
        {
          text: 'Social media'
        },
        {
          text: 'Fast food'
        },
        {
          text: 'Doubting yourself'
        },
        {
          text: 'Smoking'
        },
        {
          text: 'Lack of sleep'
        },
        {
          text: 'Nail biting'
        }
      ],
      type: 'checkbox',
      specialType: 'bubble'
    }
  ];

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;

    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const question = questions[currentQuestion];

  return (
    <>
      <div className="status-bar">
        <span className="status-questions">
          {currentQuestion + 1}/{questions.length}
        </span>
        {currentQuestion > 0 && (
          <span className="previous" onClick={() => handlePreviousQuestion()}>
            Previous step
          </span>
        )}
      </div>
      <h1 className="question-title">{question.title}</h1>
      {question.description && (
        <p className="question-description">{question.description}</p>
      )}
      <QuestionOptions
        options={question.options}
        type={question.type}
        specialType={question?.specialType}
        id={currentQuestion}
      />
      {/* {question.type === 'checkbox' ? ( */}
      <button
        className="button button-blue"
        onClick={() => handleNextQuestion()}
      >
        Next
      </button>
      {/* ) : null} */}
    </>
  );
};

export default Questions;
