import { AnyAction } from 'redux';
import { ISecondReducer } from '../types';

const initialState: ISecondReducer[] = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
];

export const secondReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: 3, name: 'third' }];
    default:
      return state;
  }
};
