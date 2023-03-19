import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReduxStoreWithReducerManager, type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/CounterEntity';
import { userReducer } from 'entities/UserEntity';
import { createReducerManager } from './ReducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): ReturnType<typeof configureStore> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const reduxStore = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  }) as ReduxStoreWithReducerManager;

  reduxStore.reducerManager = reducerManager;

  return reduxStore;
}

export default createReduxStore();
