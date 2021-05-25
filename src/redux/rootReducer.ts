import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import toggleReducer from './toggle/reducer';
import userReducer from './user/reducer';
import todosReducer from './todos/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  toggle: toggleReducer,
  user: userReducer,
  todos: todosReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
