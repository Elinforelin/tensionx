import { createSlice } from '@reduxjs/toolkit';
import { fetchStudent } from './actions';

const initialState = {
  status: '',
  error: '',
  totalPages: 0,
  perPage: 10,
  page: 1,
  studentsList: [],
  selectedStudents: []
}

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSelectedStudent(state, action) {
      if (!action.payload.length) {
        state.selectedStudents = []
      } else {
        state.selectedStudents = [...state.selectedStudents, ...action.payload];
      }
    },
    setAllSelectedStudents(state, action) {
      state.selectedStudents = []
      state.selectedStudents = [...state.selectedStudents, ...action.payload];
    },
    deleteSelectedStudent(state, action) {
      const filtered = state.selectedStudents.filter(({ id }) => id !== action.payload)
      state.selectedStudents = filtered;
    }
  },
  extraReducers: {
    [fetchStudent.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchStudent.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.studentsList = action.payload.data;
      state.totalPages = action.payload.totalPages;
      state.error = '';
    },
    [fetchStudent.rejected]: (state) => {
      state.status = 'error';
    },
  }
})

export const { setPerPage, setPage, setSelectedStudent, deleteSelectedStudent, setAllSelectedStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
