import { useTypedSelector } from '../../src/store';
import { useCallback } from 'react';
import { counterActions } from '../../src/store/reducers/counter';
import { useDispatch } from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();

  const count = useTypedSelector(state => state.counter);
  const handleClickIncrement = useCallback(() => {
    dispatch(counterActions.increment());
  }, []);
  const handleClickDecrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, []);
  const handleClickReset = useCallback(() => {
    dispatch(counterActions.reset(0));
  }, []);

  return (
    <div>
      counter template! {count}
      <br />
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={handleClickReset}>reset</button>
    </div>
  );
}
