import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavigationBar.module.scss'
import { type FC, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavigationBarProps {
  className?: string
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
  const { className } = props

  const { t } = useTranslation();
  const [isAuthModalVisible, setAuthModalVisible] = useState(false);

  const onClickLoginButton = (): void => {
    setAuthModalVisible(true);
  }

  const onClickOutsideAuthModal = (): void => {
    setAuthModalVisible(false);
  }

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
