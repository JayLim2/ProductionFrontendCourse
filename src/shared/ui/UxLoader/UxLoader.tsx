import { classNames } from 'shared/lib/classNames/classNames';
import './UxLoader.scss';
import { type FC } from 'react';

interface UxLoaderProps {
  className?: string
}

export const UxLoader: FC<UxLoaderProps> = ({ className }: UxLoaderProps) => {
  return (
        <div className={classNames('lds-ring', {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
  );
};
