export interface IUserState {
  isLogged: boolean;
  userName: string;
  token: string;
}
export interface IAppReducer {
  isLoading: boolean;
}
export interface IRootState {
  user: IUserState;
  app: IAppReducer;
}
