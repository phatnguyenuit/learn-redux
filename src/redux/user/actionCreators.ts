import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

const requestLoading = () => ({
  type: actionTypes.request,
});

const requestSuccess = (token: string) => ({
  type: actionTypes.requestSuccess,
  payload: { token },
});

const requestFail = (errorMessage: string) => ({
  type: actionTypes.requestFail,
  payload: { errorMessage },
});

// Async action creator
export const login = () => (dispatch: Dispatch) => {
  dispatch(requestLoading());
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((result) => {
      dispatch(requestSuccess(result.title));
    })
    .catch((error) => {
      dispatch(requestFail(error.message));
    });
};
