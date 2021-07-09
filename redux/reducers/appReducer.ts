import { AnyAction } from 'redux';
import { IAppReducer } from '../types';

const initialState: IAppReducer = {
  isLoading: true,
};

const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOADING_ON':
      return { ...state, isLoading: true };
    case 'LOADING_OFF':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default appReducer;
