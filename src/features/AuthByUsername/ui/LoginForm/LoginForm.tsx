import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { UxInput } from 'shared/ui/UxInput/UxInput';

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation('loginForm');

  return (
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <label>
          {t('loginFieldLabel')}
          <UxInput type='text' autoFocus={true} />
        </label>
        <label>
          {t('passwordFieldLabel')}
          <UxInput type='password' />
        </label>
        <UxButton theme={ButtonTheme.OUTLINE}>
          {t('signInButton')}
        </UxButton>
      </div>
  );
};
