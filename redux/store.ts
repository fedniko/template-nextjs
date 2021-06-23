import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { IRootState } from './types';

// eslint-disable-next-line
const makeStore: MakeStore<IRootState | any> = (context: Context) => createStore(reducer, devToolsEnhancer({}))

export const wrapper = createWrapper<IRootState | any>(makeStore, {
  debug: true,
});
