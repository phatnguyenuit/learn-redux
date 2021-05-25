import { RootState } from '../redux/rootReducer';

export const selectTodosState = (rootState: RootState) => {
  return rootState.todos;
};
