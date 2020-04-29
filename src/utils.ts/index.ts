import { Dispatch } from 'redux';
import { ActionCreator } from 'deox';

type ActionsType = { [key: string]: ActionCreator<string> };
export function wrapWithDispatch<T extends ActionsType>(dispatch: Dispatch, actions: T) {
  const res = {};
  Object.keys(actions).forEach(key => {
    res[key] = (...params: any[]) => dispatch(actions[key](params));
  });
  return res as T;
}
