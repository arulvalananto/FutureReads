import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const middleware = [];
if (process.env.NODE_ENV !== 'production') middleware.push(logger);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});

export type State = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;

export default store;
