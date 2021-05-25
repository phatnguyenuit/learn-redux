import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];

export interface RootState {
  counter: {
    count: number;
  };
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
