import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ErrorPage.module.scss';
import { type FC } from 'react';
import { UxButton } from 'shared/ui/UxButton/UxButton';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
  className?: string
}

export const ErrorPage: FC<ErrorPageProps> = (props: ErrorPageProps) => {
  const { className } = props;
  const { t } = useTranslation('error');

  const onReloadPage = (): void => {
    location.reload();
  }

  return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <h1>
                {t('fatalError')}
            </h1>
            <UxButton onClick={onReloadPage}>
                {t('updateButton')}
            </UxButton>
        </div>
  );
};
