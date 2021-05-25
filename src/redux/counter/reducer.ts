import { PayloadAction } from '../types';
import actionTypes from './actionTypes';

interface CounterState {
  count: number;
}

const getInitialState = (): CounterState => ({
  count: 0,
});

const counterReducer = (
  prevState = getInitialState(),
  action: PayloadAction<any>,
): CounterState => {
  console.log(`action.type`, action.type);
  switch (action.type) {
    case actionTypes.increase: {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    }

    case actionTypes.decrease: {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    }

    case actionTypes.increaseWithPayload: {
      const { payload = 1 } = action as PayloadAction<number>;
      return {
        ...prevState,
        count: prevState.count + payload,
      };
    }

    default:
      return prevState;
  }
};

export default counterReducer;
