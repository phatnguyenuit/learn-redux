import { Dispatch } from 'redux';
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
