import { counterReducer, counterActions } from '../slice/CounterSlice';
import type CounterSchema from '../types/CounterSchema';

describe('CounterSlice', () => {
  test('should decrease counter by 1 when \'decrement\' is used', () => {
    const state: CounterSchema = {
      value: 25
    };
    expect(
      counterReducer(state, counterActions.decrement)
    ).toEqual({
      value: 24
    });
  });

  test('should increase counter by 1 when \'increment\' is used', () => {
    const state: CounterSchema = {
      value: 25
    };
    expect(
      counterReducer(state, counterActions.increment)
    ).toEqual({
      value: 26
    });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment)
    ).toEqual({ value: 1 });
  });
});
