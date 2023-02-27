// First, create the thunk
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAuthData = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    return {
      id: 1,
      name: 'Arul Valan Anto S',
    };
  }
);
