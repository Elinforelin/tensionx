import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudent = createAsyncThunk(
  'students/fetchApi',
  async function (endpoints) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${endpoints}`
    );

    const data = await response.json();
    return data;
  }
);