import React from 'react';

const Questions = () => {
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
          symbol: '🧽'
        },
        {
          text: 'Keep mental health',
          label: 'relieved_face',
          symbol: '😌'
        },
        {
          text: 'Be productive',
          label: 'stopwatch',
          symbol: '⏱️'
        },
        {
          text: 'Set useful nutrition',
          label: 'green_salad',
          symbol: '🥗'
        },
        {
          text: 'Love & be loved',
          label: 'smiling_face_with_hearts',
          symbol: '🥰'
        },
        {
          text: 'Have a healthy body',
          label: 'flexed_biceps',
          symbol: '💪'
        },
        {
          text: 'Bring self-care into life',
          label: 'person_tipping_hand',
          symbol: '💁'
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
      type: 'button'
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
      type: 'button'
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
      type: 'button'
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
      type: 'button'
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
      type: 'button'
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
      type: 'button'
    },
    {
      id: 8,
      title: 'What would you like to have?',
      description: 'What are you missing for a fulfilling life?',
      options: [
        {
          text: 'More focus',
          label: 'nerd_face',
          symbol: '🤓'
        },
        {
          text: 'More strength',
          label: 'smirking_face',
          symbol: '😏'
        },
        {
          text: 'More calm',
          label: 'relieved_face',
          symbol: '😌'
        },
        {
          text: 'More energy',
          label: 'star_struck',
          symbol: '🤩'
        }
      ],
      type: 'button'
    },
    {
      id: 9,
      title: 'What is your timing goal?',
      description:
        'How much time do you want to spend on self-development every day?',
      options: [
        {
          text: '5 min / ',
          textOf: 'day'
        },
        {
          text: '10 min / ',
          textOf: 'day'
        },
        {
          text: '15 min / ',
          textOf: 'day'
        },
        {
          text: '20+ min / ',
          textOf: 'day'
        }
      ],
      type: 'button'
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
      type: 'button'
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
      type: 'button'
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
      type: 'circle'
    }
  ];

  return (
    <>
      {questions.map((question) => (
        <>
          <h1>{question.title}</h1>
          {question.description && <p>{question.description}</p>}
          <ul>
            {question.options.map((option) => (
              <li>
                {option.symbol && (
                  <>
                    <span role="img" aria-label={option.label}>
                      {option.symbol}
                    </span>{' '}
                  </>
                )}
                {}
                {option.textOf ? (
                  <>
                    <span>{option.text}</span>
                    {option.textOf}
                  </>
                ) : (
                  <>{option.text}</>
                )}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default Questions;
