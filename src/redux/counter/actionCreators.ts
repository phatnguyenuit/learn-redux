import actionTypes from './actionTypes';

export const increase = () => ({
  type: actionTypes.increase,
});

export const decrease = () => ({
  type: actionTypes.decrease,
});

export const increaseWithPayload = (payload: number) => ({
  payload,
  type: actionTypes.increaseWithPayload,
});
