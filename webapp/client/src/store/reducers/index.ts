import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/auth.reducer';

export default combineReducers({
  auth: authReducer,
});
