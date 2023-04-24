import {
  createEntityAdapter,
  createSlice, type PayloadAction
} from '@reduxjs/toolkit';

import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';
import {
  fetchCommentsByArticleId
} from '../services/FetchCommentsByArticleId/FetchCommentsByArticleId';
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage?.comments || commentsAdapter.getInitialState()
);

const articleCommentsSlice = createSlice({
  name: 'articlePageCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>
      ) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articlePageCommentsReducer } = articleCommentsSlice;
