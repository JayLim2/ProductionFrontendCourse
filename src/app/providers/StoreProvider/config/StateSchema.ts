import { type CounterSchema } from 'entities/CounterEntity';
import { type UserSchema } from 'entities/UserEntity';
import { type AuthSchema } from 'features/AuthByUsernameFeature';
import { type UserProfileSchema } from 'entities/UserProfileEntity';
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type NavigateToFunction } from 'app/providers/StoreProvider/config/Store';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async Reducers
  authForm?: AuthSchema
  userProfile?: UserProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArgument {
  api: AxiosInstance
  navigate?: NavigateToFunction
}

export interface ThunkConfiguration<T> {
  rejectValue: T
  extra: ThunkExtraArgument
}
