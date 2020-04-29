import { useTypedSelector } from '../../src/store';
import { useCallback } from 'react';
import { actions } from '../../src/store/reducers/counter';
import { useDispatch } from 'react-redux';
import { wrapWithDispatch } from '../../src/utils.ts';

export default function Counter() {
  const counterActions = wrapWithDispatch(useDispatch(), actions);

  const count = useTypedSelector(state => state.counter);
  const handleClickIncrement = useCallback(() => {
    counterActions.increment();
  }, []);
  const handleClickDecrement = useCallback(() => {
    const a = counterActions.decrement();
  }, []);
  const handleClickReset = useCallback(() => {
    counterActions.reset(0);
  }, []);

  return (
    <div className="container-fluid">
      counter template! {count} {typeof count}
      <br />
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={handleClickReset}>reset</button>
    </div>
  );
}
