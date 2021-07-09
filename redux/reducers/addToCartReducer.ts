import { AnyAction } from 'redux';
import { IAddToCartReducer } from '../types';

const initialState: IAddToCartReducer = {
  counter: 0,
};

const addToCartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'CART_INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'CART_DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default addToCartReducer;
