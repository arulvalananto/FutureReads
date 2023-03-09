import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './auth.interface';
import { fetchAuthData } from './auth.thunk';
import { State } from '../../index';

const initialState: AuthState = {
  loading: 'idle',
  isLoggedIn: false,
};

// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = 'succeeded';
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.loading = 'succeeded';
      state.isLoggedIn = false;
    },
    login_failed: (state) => {
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

export const { login, login_failed, logout } = authSlice.actions;

export const authSelector = (state: State) => state.auth;
