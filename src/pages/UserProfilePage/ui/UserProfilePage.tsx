import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UserProfilePage.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { userProfileReducer } from 'entities/UserProfileEntity';

const reducers: ReducersList = {
  userProfile: userProfileReducer
};

export interface UserProfilePageProps {
  className?: string
}

const UserProfilePage: FC<UserProfilePageProps> = (props: UserProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation('userProfilePage');

  return (
        <DynamicModuleLoader reducers={reducers}
                             removeAfterUnmount={true}
        >
            <div className={classNames(styles.UserProfilePage, {}, [className])}>
                {t('profilePageContent')}
            </div>
        </DynamicModuleLoader>
  );
};

export default UserProfilePage;
