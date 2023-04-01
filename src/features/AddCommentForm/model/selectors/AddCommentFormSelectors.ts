import { type StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema): string => {
  return state.addCommentForm?.text ?? '';
};
export const getAddCommentFormError = (state: StateSchema): string => {
  return state.addCommentForm?.error ?? 'ADD-COMMENT-FORM_ERROR-CODE';
};
