import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { type FC } from 'react';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('404');

  return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('404_content')}
        </div>
  );
};
