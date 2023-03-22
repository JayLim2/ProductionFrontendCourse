import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { useSelector } from 'react-redux';
import {
  authActions,
  authReducer,
  authByUsername,
  getAuthUsername,
  getAuthPassword,
  getAuthIsLoading,
  getAuthError
} from 'features/AuthByUsernameFeature';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';

export interface LoginFormProps {
  className?: string
  onSuccessAuth: () => void
}

const reducersList: ReducersList = {
  authForm: authReducer
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className, onSuccessAuth } = props;
  const { t } = useTranslation('loginForm');
  const dispatch = useTypedDispatch();

  // Fetch data from store
  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);

  const onChangeUsername = useCallback((username): void => {
    dispatch(authActions.setUsername(username));
  }, [dispatch]);

  const onChangePassword = useCallback((password): void => {
    dispatch(authActions.setPassword(password));
  }, [dispatch]);

  // @ts-expect-error Because eslint don't like Promise<void> // TODO FIXME 23.03.2023
  const onClickSignIn = useCallback(async (): void => {
    const result = await dispatch(authByUsername({
      username, password
    }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccessAuth();
    }
  }, [dispatch, username, password, onSuccessAuth]);

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <UxText title={t('authFormTitle')} />
        {error && <UxText theme={TextTheme.ERROR}
                          text={t('invalidCredentialsMessage')}
        />}
        <label>
          {t('loginFieldLabel')}
          <UxInput type='text' autoFocus={true}
                   onChange={onChangeUsername}
                   value={username}
          />
        </label>
        <label>
          {t('passwordFieldLabel')}
          <UxInput type='password'
                   onChange={onChangePassword}
                   value={password}
          />
        </label>
        <UxButton theme={ButtonTheme.OUTLINE}
                  onClick={onClickSignIn}
                  disabled={isLoading}
        >
          {isLoading
            ? t('isProceeding')
            : t('signInButton')}
        </UxButton>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm
