import { AnyAction } from 'redux';
import { IAddToCartReducer } from '../types';

const initialState: IAddToCartReducer[] = [];

const addToCartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'CART_INCREMENT': {
      return [...state, {}];
    }
    case 'CART_DECREMENT':
      return [...state, {}];
    default:
      return state;
  }
};

export default addToCartReducer;
