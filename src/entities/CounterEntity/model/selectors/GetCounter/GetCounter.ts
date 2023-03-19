import { type StateSchema } from 'app/providers/StoreProvider';
import { type CounterSchema } from 'entities/CounterEntity';

export const getCounter = (state: StateSchema): CounterSchema => {
  return state.counter;
};
