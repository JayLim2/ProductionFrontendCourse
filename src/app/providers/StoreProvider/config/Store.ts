import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/CounterEntity';
import { userReducer } from 'entities/UserEntity';
import { authReducer } from 'features/AuthByUsernameFeature';

export function createReduxStore(
  initialState?: StateSchema
): ReturnType<typeof configureStore> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    authForm: authReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export default createReduxStore();
