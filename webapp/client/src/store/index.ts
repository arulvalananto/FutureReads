import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = [];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});

export default store;
