import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UserProfileCard.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserProfileData } from 'entities/UserProfileEntity/model/selectors/GetUserProfileData/GetUserProfileData';
// import {
//   getUserProfileIsLoading
// } from 'entities/UserProfileEntity/model/selectors/GetUserProfileIsLoading/GetUserProfileIsLoading';
// import { getUserProfileError } from 'entities/UserProfileEntity/model/selectors/GetUserProfileError/GetUserProfileError';
import { UxText } from 'shared/ui/UxText/UxText';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { UxInput } from 'shared/ui/UxInput/UxInput';

interface UserProfileCardProps {
  className?: string
}

export const UserProfileCard: FC<UserProfileCardProps> = (props: UserProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('userProfilePage');

  const userProfileData = useSelector(getUserProfileData);
  // const isLoading = useSelector(getUserProfileIsLoading);
  // const error = useSelector(getUserProfileError);

  return (
        <div className={classNames(styles.UserProfileCard, {}, [className])}>
            <div className={styles.header}>
                <UxText title={t('userProfilePageTitle')}
                        text={t('userProfilePageContent')}
                />
                <UxButton theme={ButtonTheme.BACKGROUND_INVERTED}
                          className={styles.editButton}
                >
                    {t('editUserProfileButton')}
                </UxButton>
            </div>
            <div className={styles.content}>
                <label>
                    {t('inputFirstNameField')}
                    <UxInput value={userProfileData?.firstName}
                             placeholder={t('inputFirstNameField')}
                             className={styles.input}
                    />
                </label>
                <label>
                    {t('inputLastNameField')}
                    <UxInput value={userProfileData?.lastName}
                             placeholder={t('inputLastNameField')}
                             className={styles.input}
                    />
                </label>
            </div>
        </div>
  );
};
