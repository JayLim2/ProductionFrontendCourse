import { type FC, lazy } from 'react';
import { type AddCommentFormProps } from './AddCommentForm';

const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
}));

export default AddCommentFormLazy;
