import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UxModal.module.scss';
import type React from 'react';
import { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'widgets/Portal/Portal';

interface UxModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const MODAL_CLOSING_DELAY = 300;

// FIXME bug with theme in Modal
export const UxModal: FC<UxModalProps> = (props: UxModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onClickClose = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, MODAL_CLOSING_DELAY);
    }
  }, [onClose]);

  const onClickContent = (e: React.MouseEvent): void => {
    e.stopPropagation();
  }

  const modifiers: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing
  };

  // TODO: перечитать про хуки
  const onKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      onClickClose();
    }
  }, [onClickClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(styles.UxModal, modifiers, [className])}
           onClick={onClickClose}
      >
        <div className={styles.overlay}>
          <div
            className={styles.content}
            onClick={onClickContent}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
