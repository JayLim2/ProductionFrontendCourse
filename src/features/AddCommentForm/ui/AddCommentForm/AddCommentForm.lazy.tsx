import { type FC, lazy } from 'react';
import { type AddCommentFormProps } from './AddCommentForm';

const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(async () => await import('./AddCommentForm'));

export default AddCommentFormLazy;
