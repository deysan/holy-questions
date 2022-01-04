import { configureStore } from '@reduxjs/toolkit';
import answerSlice from './answerSlice';
import quizSlice from './quizSlice';

export default configureStore({
  reducer: {
    quiz: quizSlice,
    answer: answerSlice
  }
});
