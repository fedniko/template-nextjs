export interface IFirstReducer {
  counter: number;
}

export interface ISecondReducer {
  id: number;
  name: string;
}

export interface IRootState {
  first: IFirstReducer;
  second: ISecondReducer[];
}
