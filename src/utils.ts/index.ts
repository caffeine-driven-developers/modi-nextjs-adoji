import { Dispatch } from 'redux';
import { ActionCreator } from 'deox';

type ActionsType = { [key: string]: ActionCreator<string> };
export function wrapWithDispatch<T extends ActionsType>(dispatch: Dispatch, actions: T) {
  const res = {};
  Object.keys(actions).forEach(key => {
    res[key] = function () {
      dispatch(actions[key].apply(null, arguments));
    };
  });
  return res as T;
}
