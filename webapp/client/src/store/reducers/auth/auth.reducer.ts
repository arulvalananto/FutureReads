import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './auth.interface';
import { fetchAuthData } from './auth.thunk';

const initialState: AuthState = {
  entities: [],
  loading: 'idle',
};

// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = 'failed';
    },
    logout: (state) => {
      state.loading = 'failed';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthData.fulfilled, (state, _action) => {
      state.loading = 'succeeded';
    });
  },
});

export default authSlice.reducer;

export const { login } = authSlice.actions;
