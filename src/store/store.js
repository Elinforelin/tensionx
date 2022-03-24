import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from './students/reducer';

export const store = configureStore({
  reducer: {
    students: studentsSlice
  }
});