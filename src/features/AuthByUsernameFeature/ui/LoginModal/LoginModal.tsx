import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginModal.module.scss';
import { Suspense, type FC } from 'react';
import { UxModal } from 'shared/ui/UxModal/UxModal';
import { LoginForm } from '../LoginForm/LoginForm.lazy';
import { UxLoader } from 'shared/ui/UxLoader/UxLoader';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <UxModal className={classNames(styles.LoginModal, {}, [className])}
             isOpen={isOpen}
             onClose={onClose}
             lazyMode={true}
    >
      <Suspense fallback={<UxLoader/>}>
        <LoginForm onSuccessAuth={onClose} />
      </Suspense>
    </UxModal>
  );
};
