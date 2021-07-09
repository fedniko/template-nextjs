export interface IUserState {
  isLogged: boolean;
  userName: string;
  token: string;
}
export interface ISecondReducer {
  id: number;
  name: string;
}
export interface IRootState {
  user: IUserState;
  second: ISecondReducer[];
}
