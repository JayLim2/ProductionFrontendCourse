import { getCounter } from './GetCounter';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

describe("Selector 'GetCounter'", () => {
  test('should return counter object', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
