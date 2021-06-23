import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { firstReducer } from './firstReducer';
import { secondReducer } from './secondReducer';
import { IRootState } from '../types';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
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
