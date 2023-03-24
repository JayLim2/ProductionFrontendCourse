import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UserProfilePage.module.scss';
import { type FC, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchUserProfileData, UserProfileCard, userProfileReducer } from 'entities/UserProfileEntity';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';

const reducers: ReducersList = {
  userProfile: userProfileReducer
};

export interface UserProfilePageProps {
  className?: string
}

const UserProfilePage: FC<UserProfilePageProps> = (props: UserProfilePageProps) => {
  const { className } = props;
  const dispatch = useTypedDispatch();

  useEffect(() => {
    void dispatch(fetchUserProfileData());
  }, [dispatch]);

  return (
        <DynamicModuleLoader reducers={reducers}
                             removeAfterUnmount={true}
        >
            <div className={classNames(styles.UserProfilePage, {}, [className])}>
                <UserProfileCard />
            </div>
        </DynamicModuleLoader>
  );
};

export default UserProfilePage;
