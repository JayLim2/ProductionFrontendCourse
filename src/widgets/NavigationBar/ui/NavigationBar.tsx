import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavigationBar.module.scss'
import { memo, useCallback, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsernameFeature';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/UserEntity';
import { AlignText, TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { UxLink, UxLinkTheme } from 'shared/ui/UxLink/UxLink';
import { RoutePath } from 'app/providers/router/config/routeConfig';

interface NavigationBarProps {
  className?: string
}

export const NavigationBar = memo((props: NavigationBarProps) => {
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

  const appTitle = (
      <UxText
          className={styles.appName}
          title={t('appTitle')}
          theme={TextTheme.INVERTED}
          alignTitle={AlignText.CENTER}
      />
  );

  if (authData) {
    return (
            <div className={classNames(styles.NavigationBar, {}, [className])}>
                {appTitle}
                <UxLink
                    to={RoutePath.article_create}
                    theme={UxLinkTheme.SECONDARY}
                    className={styles.createBtn}
                >
                    {t('addArticleButton')}
                </UxLink>
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
                {appTitle}
                <UxButton className={styles.links}
                          theme={ButtonTheme.CLEAR_INVERTED}
                          size={ButtonSize.M}
                          onClick={onClickLoginButton}
                >
                    {t('loginButton')}
                </UxButton>
                {isAuthModalVisible && (
                    <LoginModal isOpen={isAuthModalVisible}
                                onClose={onClickOutsideAuthModal}
                    />
                )}
            </div>
    )
  }
});
