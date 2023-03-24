import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../GetCounter/GetCounter';
import type CounterSchema from '../../types/CounterSchema';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema): number => counter.value
)
