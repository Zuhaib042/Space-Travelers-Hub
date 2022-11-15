import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk, logger),
);

export default store;
