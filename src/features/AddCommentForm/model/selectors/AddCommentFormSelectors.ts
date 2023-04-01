import { type StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema): string | undefined => {
  return state.addCommentForm?.text;
};
export const getAddCommentFormError = (state: StateSchema): string | undefined => {
  return state.addCommentForm?.error;
};
