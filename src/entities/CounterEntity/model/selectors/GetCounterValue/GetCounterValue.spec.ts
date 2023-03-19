import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/CounterEntity/model/selectors/GetCounterValue/GetCounterValue';

describe("Selector 'GetCounterValue'", () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 25
      }
    };
    expect(getCounterValue(state as StateSchema)).toBe(25);
  });
});
