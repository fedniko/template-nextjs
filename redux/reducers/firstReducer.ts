import { AnyAction } from 'redux';
import { IFirstReducer } from '../types';

const initialState: IFirstReducer = {
  counter: 0,
};

const firstReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default firstReducer;
