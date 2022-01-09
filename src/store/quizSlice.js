import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [
      {
        id: 1,
        title: 'The checklist you can’t do without!',
        description:
          'Let’s make your checklist plan. Opt for your goals to get excited:',
        options: [
          {
            text: 'Perform cleaning',
            label: 'sponge',
            icon: '🧽',
            checked: false
          },
          {
            text: 'Keep mental health',
            label: 'relieved_face',
            icon: '😌',
            checked: false
          },
          {
            text: 'Be productive',
            label: 'stopwatch',
            icon: '⏱️',
            checked: false
          },
          {
            text: 'Set useful nutrition',
            label: 'green_salad',
            icon: '🥗',
            checked: false
          },
          {
            text: 'Love & be loved',
            label: 'smiling_face_with_hearts',
            icon: '🥰',
            checked: false
          },
          {
            text: 'Have a healthy body',
            label: 'flexed_biceps',
            icon: '💪',
            checked: false
          },
          {
            text: 'Bring self-care into life',
            label: 'person_tipping_hand',
            icon: '💁',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          }
        ],
        type: 'checkbox'
      },
      {
        id: 5,
        title: 'This is a test question',
        description: 'Just click "Next"',
        options: [
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          }
        ],
        type: 'radio'
      },
      {
        id: 7,
        title: 'What is your temperament type?',
        description:
          'This information will help us to give you the best result',
        options: [
          {
            text: 'Sanguine',
            checked: false
          },
          {
            text: 'Choleric',
            checked: false
          },
          {
            text: 'Melancholic',
            checked: false
          },
          {
            text: 'Phlegmatic',
            checked: false
          },
          {
            text: 'I don’t know',
            checked: false
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
            icon: '🤓',
            checked: false
          },
          {
            text: 'More strength',
            label: 'smirking_face',
            icon: '😏',
            checked: false
          },
          {
            text: 'More calm',
            label: 'relieved_face',
            icon: '😌',
            checked: false
          },
          {
            text: 'More energy',
            label: 'star_struck',
            icon: '🤩',
            checked: false
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
            textOf: 'day',
            checked: false
          },
          {
            text: '10 min',
            textOf: 'day',
            checked: false
          },
          {
            text: '15 min',
            textOf: 'day',
            checked: false
          },
          {
            text: '20+ min',
            textOf: 'day',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
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
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          },
          {
            text: 'Next question',
            checked: false
          }
        ],
        type: 'radio'
      },
      {
        id: 12,
        title: 'Are there any habits you’d like to quit?',
        description: null,
        options: [
          {
            text: 'Procrastination',
            checked: false
          },
          {
            text: 'Drinking',
            checked: false
          },
          {
            text: 'Social media',
            checked: false
          },
          {
            text: 'Fast food',
            checked: false
          },
          {
            text: 'Doubting yourself',
            checked: false
          },
          {
            text: 'Smoking',
            checked: false
          },
          {
            text: 'Lack of sleep',
            checked: false
          },
          {
            text: 'Nail biting',
            checked: false
          }
        ],
        type: 'checkbox',
        specialType: 'bubble'
      }
    ],
    currentQuestion: 0
  },
  reducers: {
    toggleChecked(state, action) {
      const findQuestion = state.questions.find(
        (question) => question.id === action.payload.questionId
      );

      const toggleOption = findQuestion.options[action.payload.optionIndex];

      if (findQuestion.type === 'radio') {
        findQuestion.options.map((option) => (option.checked = false));
      }

      toggleOption.checked = !toggleOption.checked;
    },
    nextQuestion(state) {
      const nextQuestion = state.currentQuestion + 1;

      if (nextQuestion < state.questions.length) {
        state.currentQuestion = nextQuestion;
      }
    },
    prevQuestion(state) {
      const prevQuestion = state.currentQuestion - 1;

      if (prevQuestion >= 0) {
        state.currentQuestion = prevQuestion;
      }
    },
    uncheckedQuestion(state) {
      state.questions[state.currentQuestion].options.map(
        (option) => (option.checked = false)
      );
    }
  }
});

export const { toggleChecked, nextQuestion, prevQuestion, uncheckedQuestion } =
  quizSlice.actions;

export default quizSlice.reducer;
