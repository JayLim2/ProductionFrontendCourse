import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavigationBar.module.scss'
import { type FC, useCallback, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsernameFeature';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/UserEntity';

interface NavigationBarProps {
  className?: string
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
  const authData = useSelector(getUserAuthData);

  const { className } = props
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthModalVisible, setAuthModalVisible] = useState(false);

  const onClickLoginButton = (): void => {
    setAuthModalVisible(true);
  }

  const onClickOutsideAuthModal = (): void => {
    setAuthModalVisible(false);
  }

  const onClickLogoutButton = useCallback((): void => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.NavigationBar, {}, [className])}>
        <UxButton className={styles.links}
                  theme={ButtonTheme.CLEAR_INVERTED}
                  size={ButtonSize.M}
                  onClick={onClickLogoutButton}
        >
          {t('logoutButton')}
        </UxButton>
      </div>
    )
  } else {
    return (
      <div className={classNames(styles.NavigationBar, {}, [className])}>
        <UxButton className={styles.links}
                  theme={ButtonTheme.CLEAR_INVERTED}
                  size={ButtonSize.M}
                  onClick={onClickLoginButton}
        >
          {t('loginButton')}
        </UxButton>
        <LoginModal isOpen={isAuthModalVisible}
                    onClose={onClickOutsideAuthModal}
        />
      </div>
    )
  }
}
