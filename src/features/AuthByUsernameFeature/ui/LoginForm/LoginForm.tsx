import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authByUsername } from 'features/AuthByUsernameFeature';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { authReducer } from 'features/AuthByUsernameFeature/model/slice/AuthSlice';
import { getAuthUsername } from 'features/AuthByUsernameFeature/model/selectors/GetAuthUsername/GetAuthUsername';
import { getAuthPassword } from 'features/AuthByUsernameFeature/model/selectors/GetAuthPassword/GetAuthPassword';
import { getAuthIsLoading } from 'features/AuthByUsernameFeature/model/selectors/GetAuthIsLoading/GetAuthIsLoading';
import { getAuthError } from 'features/AuthByUsernameFeature/model/selectors/GetAuthError/GetAuthError';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string
}

const reducersList: ReducersList = {
  authForm: authReducer
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation('loginForm');
  const dispatch = useDispatch();

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

  const onClickSignIn = useCallback(() => {
    dispatch(authByUsername({
      username, password
    }));
  }, [dispatch, username, password]);

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
