import styles from './UserProfileHeader.module.scss';
import { type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UxText } from 'shared/ui/UxText/UxText';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { useSelector } from 'react-redux';
import {
  getUserProfileData,
  getUserProfileReadonly,
  saveUserProfileData,
  userProfileActions
} from 'entities/UserProfileEntity';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { getUserAuthData } from 'entities/UserEntity';

interface UserProfileHeaderProps {
  className?: string
}

export const UserProfileHeader: FC<UserProfileHeaderProps> = (props: UserProfileHeaderProps) => {
  const { t } = useTranslation('userProfilePage');

  const authData = useSelector(getUserAuthData);
  const userProfileData = useSelector(getUserProfileData);
  const isReadOnly = useSelector(getUserProfileReadonly);

  const editIsEnabled = authData?.id && userProfileData?.id &&
      authData.id === userProfileData.id;

  const dispatch = useTypedDispatch();
  const onEdit = useCallback(() => {
    dispatch(userProfileActions.setReadOnly(false));
  }, [dispatch]);
  const onCancelEditing = useCallback(() => {
    dispatch(userProfileActions.cancelEditingUserProfile());
  }, [dispatch]);
  const onSaveChanges = useCallback(() => {
    void dispatch(saveUserProfileData());
  }, [dispatch])

  const editButtonJsx = (
        <UxButton theme={ButtonTheme.BACKGROUND_INVERTED}
                  className={styles.editButton}
                  onClick={onEdit}
        >
            {t('editUserProfileButton')}
        </UxButton>
  );

  const cancelButtonJsx = (
        <UxButton theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEditing}
        >
            {t('cancelEditingUserProfileButton')}
        </UxButton>
  )

  const saveButtonJsx = (
        <UxButton theme={ButtonTheme.OUTLINE}
                  className={styles.editButton}
                  onClick={onSaveChanges}
        >
            {t('saveUserProfileButton')}
        </UxButton>
  );

  return (
        <div className={styles.UserProfileHeader}>
            <UxText title={t('userProfilePageTitle')} />
            {editIsEnabled && (
              isReadOnly
                ? editButtonJsx
                : (<>
                        {saveButtonJsx}
                        {cancelButtonJsx}
                    </>)
            )}
        </div>
  );
};
