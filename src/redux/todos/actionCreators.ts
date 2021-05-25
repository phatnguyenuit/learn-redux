import { Dispatch } from 'redux';
import { RootState } from '../rootReducer';
import actionTypes from './actionTypes';
import { TodoData } from './reducer';

const requestLoading = () => ({
  type: actionTypes.request,
});

const requestSuccess = (data: TodoData[]) => ({
  type: actionTypes.requestSuccess,
  payload: { data },
});

const requestFail = (errorMessage: string) => ({
  type: actionTypes.requestFail,
  payload: { errorMessage },
});

// Async action creator
export const requestTodos = () => (dispatch: Dispatch) => {
  dispatch(requestLoading());
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((result) => {
      dispatch(requestSuccess(result));
    })
    .catch((error) => {
      dispatch(requestFail(error.message));
    });
};

// Async action creator
// write in async/wait style
export const requestTodosAsyncAwait = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestLoading());
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    dispatch(requestSuccess(result));
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

// Async action creator
// write in async/wait style
// use root state
export const requestTodosAsyncAwaitUseState =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const {
        user: { token },
      } = getState();
      console.log(`got token form store`, token);
      dispatch(requestLoading());
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const result = await response.json();
      dispatch(requestSuccess(result));
    } catch (error) {
      dispatch(requestFail(error.message));
    }
  };
