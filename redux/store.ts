import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { IRootState } from './types';

// eslint-disable-next-line
const makeStore: MakeStore<IRootState | any> = process.env.NODE_ENV !== 'production' ? (context: Context) => createStore(reducer, devToolsEnhancer({})) : (context: Context) => createStore(reducer)

export const wrapper = createWrapper<IRootState | any>(makeStore, {
  debug: true,
});
