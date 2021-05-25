import { PayloadAction } from '../types';
import actionTypes from './actionTypes';

export interface UserState {
  token: string;
  errorMessage: string;
  loading: boolean;
}

const getInitialState = (): UserState => ({
  token: '',
  errorMessage: '',
  loading: false,
});

// request
// request_success
// request_fail

const userReducer = (
  prevState = getInitialState(),
  action: PayloadAction<any>,
): UserState => {
  console.log(`action.type`, action.type);
  switch (action.type) {
    case actionTypes.request: {
      return {
        ...prevState,
        loading: true,
        errorMessage: '',
      };
    }

    case actionTypes.requestSuccess: {
      const { token } = action.payload;
      return {
        ...prevState,
        token: token,
        loading: false,
      };
    }

    case actionTypes.requestFail: {
      const { errorMessage } = action.payload;
      return {
        ...prevState,
        errorMessage: errorMessage,
        loading: false,
        token: '',
      };
    }

    default:
      return prevState;
  }
};

export default userReducer;
