export interface IFirstReducer {
  counter: number;
}

export interface ISecondReducer {
  id: number;
  name: string;
}

export interface IAddToCartReducer {
  counter: number;
}

export interface IRootState {
  first: IFirstReducer;
  second: ISecondReducer[];
  cart: IAddToCartReducer;
}
