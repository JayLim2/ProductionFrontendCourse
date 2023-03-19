import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authByUsername } from 'features/AuthByUsernameFeature';
import { getAuthState } from 'features/AuthByUsernameFeature/model/selectors/GetAuthState/GetAuthState';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation('loginForm');
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getAuthState);

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
  );
});

LoginForm.displayName = 'LoginForm';

export {
  LoginForm
}
