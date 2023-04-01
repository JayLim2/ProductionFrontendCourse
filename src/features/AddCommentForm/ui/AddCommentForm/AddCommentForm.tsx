import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { UxButton, ButtonTheme } from 'shared/ui/UxButton/UxButton';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/AddCommentFormSelectors';
import styles from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('comment');
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useTypedDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.AddCommentForm, {}, [className])}>
                <UxInput
                    className={styles.input}
                    placeholder={t('inputNewCommentTextField')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <UxButton
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('submitNewCommentButton')}
                </UxButton>
            </div>
        </DynamicModuleLoader>
  );
});

export default AddCommentForm;
