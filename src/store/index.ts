import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const makeStore = (initialState, options) => {
  const store = createStore(reducer, initialState, applyMiddleware());
  // TODO: apply middleware
  return store;
};

type RootState = ReturnType<typeof reducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
