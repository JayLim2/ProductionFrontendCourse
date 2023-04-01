import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import styles from './UserProfileCard.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AlignText, TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { type UserProfile } from 'entities/UserProfileEntity';
import { UxLoader } from 'shared/ui/UxLoader/UxLoader';
import { UxAvatar } from 'shared/ui/UxAvatar/UxAvatar';
import { type Currency } from 'entities/Currency/model/types/Currency';
import { SelectCurrency } from 'entities/Currency';
import { type Country, SelectCountry } from 'entities/Country';

interface UserProfileCardProps {
  isLoading: boolean
  className?: string
  data?: UserProfile
  error?: string
  isReadOnly?: boolean

  /* Callbacks below */
  onChangeFirstName?: (newValue: string) => void
  onChangeLastName?: (newValue: string) => void
  onChangeUsername?: (newValue: string) => void
  onChangeAge?: (newValue: number) => void
  onChangeCountry?: (newValue: Country) => void
  onChangeCity?: (newValue: string) => void
  onChangeCurrency?: (newValue: Currency) => void
  onChangeAvatar?: (newValue: string) => void
}

export const UserProfileCard: FC<UserProfileCardProps> = (props: UserProfileCardProps) => {
  const {
    className,
    data,
    isLoading = false,
    isReadOnly = false,
    error,
    onChangeFirstName,
    onChangeLastName,
    onChangeUsername,
    onChangeAge,
    onChangeCountry,
    onChangeCity,
    onChangeCurrency,
    onChangeAvatar
  } = props;
  const { t } = useTranslation('userProfilePage');

  if (isLoading) {
    const additionalClasses: Array<string | undefined> = [className, styles.loading];
    return (
            <div className={classNames(
              styles.UserProfileCard,
              {},
              additionalClasses
            )}>
                <UxLoader/>
            </div>
    );
  }

  if (error) {
    const additionalClasses: Array<string | undefined> = [className, styles.error];
    return (
            <div className={classNames(
              styles.UserProfileCard,
              {},
              additionalClasses
            )}>
                <UxText theme={TextTheme.ERROR}
                        title={t('userProfileLoadingErrorTitle')}
                        text={t('userProfileLoadingErrorText')}
                        alignTitle={AlignText.CENTER}
                        alignText={AlignText.CENTER}
                />
            </div>
    )
  }

  const userProfileCardStyleModifiers: Modifiers = {
    [styles.editingMode]: !isReadOnly
  };

  return (
        <div className={classNames(
          styles.UserProfileCard,
          userProfileCardStyleModifiers,
          [className]
        )}>
            <div className={styles.content}>
                {
                    data?.avatar && (
                        <UxAvatar alt={t('avatarAltText')}
                                  src={data?.avatar}
                        />
                    )
                }
                <label>
                    {t('inputUsernameField')}
                    <UxInput value={data?.username}
                             placeholder={t('inputUsernameField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeUsername}
                    />
                </label>
                <label>
                    {t('inputFirstNameField')}
                    <UxInput value={data?.firstName}
                             placeholder={t('inputFirstNameField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeFirstName}
                    />
                </label>
                <label>
                    {t('inputLastNameField')}
                    <UxInput value={data?.lastName}
                             placeholder={t('inputLastNameField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeLastName}
                    />
                </label>
                <label>
                    {t('inputAgeField')}
                    <UxInput value={data?.age}
                             placeholder={t('inputAgeField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeAge}
                    />
                </label>
                <SelectCountry value={data?.country}
                               onChange={onChangeCountry}
                               readOnly={isReadOnly}
                               className={styles.input}
                />
                <label>
                    {t('inputCityField')}
                    <UxInput value={data?.city}
                             placeholder={t('inputCityField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeCity}
                    />
                </label>
                <SelectCurrency value={data?.currency}
                                onChange={onChangeCurrency}
                                readOnly={isReadOnly}
                                className={styles.input}
                />
                <label>
                    {t('inputAvatarField')}
                    <UxInput value={data?.avatar}
                             placeholder={t('inputAvatarField')}
                             className={styles.input}
                             readOnly={isReadOnly}
                             onChange={onChangeAvatar}
                    />
                </label>
            </div>
        </div>
  );
};
