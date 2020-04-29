import { createActionCreator, createReducer } from 'deox';

export const counterActions = {
  increment: createActionCreator('INCREMENT'),
  decrement: createActionCreator('DECREMENT'),
  reset: createActionCreator('RESET', resolve => (count: number) => resolve(count)),
};

const defaultState = 0;

const counterReducer = createReducer(defaultState, handleAction => [
  handleAction(counterActions.increment, state => state + 1),
  handleAction(counterActions.decrement, state => state - 1),
  handleAction(counterActions.reset, (_state, { payload }) => payload),
]);

export default counterReducer;
