import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { type FC } from 'react';
import { UxLoader } from 'shared/ui/UxLoader/UxLoader';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }: PageLoaderProps) => {
  return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <UxLoader />
        </div>
  );
};
