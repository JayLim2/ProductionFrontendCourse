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
import { type ArticleSchema } from 'entities/Article';
import { type AddCommentFormSchema } from 'features/AddCommentForm/model/types/AddCommentFormSchema';
import { type ListArticlesSchema } from 'pages/ListArticlesPage';
import { type ScrollPositionSchema } from 'features/ScrollPositionRestoring';
import { type ArticlePageSchema } from 'pages/ArticlePage';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollPosition: ScrollPositionSchema

  // Async Reducers
  authForm?: AuthSchema
  userProfile?: UserProfileSchema
  article?: ArticleSchema
  articlePage?: ArticlePageSchema
  addCommentForm?: AddCommentFormSchema
  listArticles?: ListArticlesSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type MountedReducersList = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducersList
}

export interface ThunkExtraArgument {
  api: AxiosInstance
  navigate?: NavigateToFunction
}

export interface ThunkConfiguration<T> {
  rejectValue: T
  extra: ThunkExtraArgument
  state: StateSchema
}
