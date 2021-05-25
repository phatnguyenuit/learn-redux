import { PayloadAction } from '../types';
import actionTypes from './actionTypes';

type ToggleState = boolean;

const getInitialState = (): ToggleState => false;

const toggleReducer = (
  prevState = getInitialState(),
  action: PayloadAction<any>,
): ToggleState => {
  console.log(`action.type`, action.type);
  switch (action.type) {
    case actionTypes.toggle: {
      return !prevState;
    }
    default:
      return prevState;
  }
};

export default toggleReducer;
