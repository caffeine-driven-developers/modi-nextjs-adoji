import { createActionCreator, createReducer } from 'deox';

export const actions = {
  increment: createActionCreator('INCREMENT'),
  decrement: createActionCreator('DECREMENT'),
  reset: createActionCreator('RESET', resolve => (count: number) => resolve(count)),
};

const defaultState = 0;

const counterReducer = createReducer(defaultState, handleAction => [
  handleAction(actions.increment, state => state + 1),
  handleAction(actions.decrement, state => state - 1),
  handleAction(actions.reset, (_state, { payload }) => payload),
]);

export default counterReducer;
