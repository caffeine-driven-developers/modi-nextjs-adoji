import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const makeStore = (initialState, options) => {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
  // TODO: apply middleware
  return store;
};

type RootState = ReturnType<typeof reducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
