import { AsyncState } from '../../types/state';
import { PayloadAction } from '../types';
import actionTypes from './actionTypes';

export interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodosState = AsyncState<TodoData[]>;

const getInitialState = (): TodosState => ({
  loading: false,
});

const todosReducer = (
  prevState = getInitialState(),
  action: PayloadAction<any>,
): TodosState => {
  console.log(`action.type`, action.type);
  switch (action.type) {
    case actionTypes.request: {
      return {
        ...prevState,
        loading: true,
        errorMessage: undefined,
        data: undefined,
      };
    }

    case actionTypes.requestSuccess: {
      const { data } = action.payload;
      return {
        ...prevState,
        data: data,
        loading: false,
      };
    }

    case actionTypes.requestFail: {
      const { errorMessage } = action.payload;
      return {
        ...prevState,
        errorMessage: errorMessage,
        loading: false,
        data: undefined,
      };
    }

    default:
      return prevState;
  }
};

export default todosReducer;
