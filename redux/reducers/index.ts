import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import userReducer from './userReducer';
import appReducer from './appReducer';
import { IRootState } from '../types';
import addToCartReducer from './addToCartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  cart: addToCartReducer,
});

export const reducer = (state: IRootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
