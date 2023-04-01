import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UserProfilePage.module.scss';
import { type FC, useCallback } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchUserProfileData,
  getUserProfileDataValidationError,
  getUserProfileError,
  getUserProfileIsLoading,
  getUserProfileNewData,
  getUserProfileReadonly,
  userProfileActions,
  UserProfileCard,
  userProfileReducer
} from 'entities/UserProfileEntity';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { useSelector } from 'react-redux';
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader';
import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from 'entities/Country';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';

const reducers: ReducersList = {
  userProfile: userProfileReducer
};

export interface UserProfilePageProps {
  className?: string
}

const UserProfilePage: FC<UserProfilePageProps> = (props: UserProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation('userProfilePage');
  const dispatch = useTypedDispatch();

  const userProfileNewData = useSelector(getUserProfileNewData);
  const isLoading = useSelector(getUserProfileIsLoading);
  const error = useSelector(getUserProfileError);
  const isReadOnly = useSelector(getUserProfileReadonly);

  const { id: profileId } = useParams<{ id: string }>();

  const validationErrors = useSelector(getUserProfileDataValidationError);
  const validationErrorsTranslations = {
    [UserProfileValidationError.EMPTY_FIRST_NAME]: t('validationErrorIncorrectFirstName'),
    [UserProfileValidationError.EMPTY_LAST_NAME]: t('validationErrorIncorrectLastName'),
    [UserProfileValidationError.EMPTY_USERNAME]: t('validationErrorIncorrectUsername'),
    [UserProfileValidationError.EMPTY_COUNTRY]: t('validationErrorIncorrectCountry'),
    [UserProfileValidationError.EMPTY_CITY]: t('validationErrorIncorrectCity'),
    [UserProfileValidationError.EMPTY_CURRENCY]: t('validationErrorIncorrectCurrency'),
    [UserProfileValidationError.AGE_IS_NOT_A_NUMBER]: t('validationErrorIncorrectAge'),
    [UserProfileValidationError.INTERNAL_SERVER_ERROR]: t('validationErrorServerError'),
    [UserProfileValidationError.NO_USER_PROFILE_DATA]: t('validationErrorNoData')
  }

  useInitialEffect(() => {
    if (profileId) {
      void dispatch(fetchUserProfileData(profileId));
    }
  });

  const onChangeFirstName = useCallback((newValue?: string) => {
    dispatch(userProfileActions.updateUserProfile({
      firstName: newValue || ''
    }))
  }, [dispatch]);

  const onChangeLastName = useCallback((newValue?: string) => {
    dispatch(userProfileActions.updateUserProfile({
      lastName: newValue || ''
    }))
  }, [dispatch]);

  const onChangeUsername = useCallback((newValue?: string) => {
    dispatch(userProfileActions.updateUserProfile({
      username: newValue || ''
    }))
  }, [dispatch]);

  const onChangeAge = useCallback((newValue?: number) => {
    newValue = Number(newValue); // TODO why wasn't casted?
    if (!Number.isNaN(newValue)) {
      dispatch(userProfileActions.updateUserProfile({
        age: newValue
      }))
    }
  }, [dispatch]);

  const onChangeCountry = useCallback((newValue?: Country) => {
    dispatch(userProfileActions.updateUserProfile({
      country: newValue || Country.RUS
    }))
  }, [dispatch]);

  const onChangeCity = useCallback((newValue?: string) => {
    dispatch(userProfileActions.updateUserProfile({
      city: newValue || 'Moscow'
    }))
  }, [dispatch]);

  const onChangeCurrency = useCallback((newValue?: Currency) => {
    dispatch(userProfileActions.updateUserProfile({
      currency: newValue || Currency.RUB
    }))
  }, [dispatch]);

  const onChangeAvatar = useCallback((newValue?: string) => {
    dispatch(userProfileActions.updateUserProfile({
      avatar: newValue || ''
    }))
  }, [dispatch]);

  return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.UserProfilePage, {}, [className])}>
                <UserProfileHeader/>
                {validationErrors?.length && validationErrors.map((validationError: UserProfileValidationError) => (
                    <UxText
                        key={validationError}
                        theme={TextTheme.ERROR}
                        text={validationErrorsTranslations[validationError]}
                    />
                ))}
                <UserProfileCard
                    isLoading={isLoading}
                    isReadOnly={isReadOnly}
                    data={userProfileNewData}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeUsername={onChangeUsername}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamicModuleLoader>
  );
};

export default UserProfilePage;
