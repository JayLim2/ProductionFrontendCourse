import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/CounterEntity';
import { userReducer } from 'entities/UserEntity';
import { createReducerManager } from './ReducerManager';
import { $api } from 'shared/api/api';
import { type To } from 'react-router-dom';
import { type NavigateOptions } from 'react-router';

export type NavigateToFunction = (to: To, options?: NavigateOptions) => void;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigateFn?: NavigateToFunction
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  // TODO 23.03.2023 check how we can do it another way
  const reduxStore = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate: navigateFn
        }
      }
    })
  });

  // TODO try to fix it
  // @ts-expect-error This type is dynamic
  reduxStore.reducerManager = reducerManager;

  return reduxStore;
}

export type TypedDispatch = ReturnType<typeof createReduxStore>['dispatch'];
