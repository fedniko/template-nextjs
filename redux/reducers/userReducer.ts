import { AnyAction } from 'redux';
import { IUserState } from '../types';

const initialState: IUserState = {
  isLogged: false,
  userName: '',
  token: '',
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        userName: action.name,
        isLogged: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        userName: '',
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
