import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UxInput.module.scss';
import type React from 'react';
import { type FC, type InputHTMLAttributes, memo, useEffect, useRef } from 'react';

type ExcludedHTMLInputAttributes = 'value' | 'onChange';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, ExcludedHTMLInputAttributes>

interface UxInputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

const UxInput: FC<UxInputProps> = memo((props: UxInputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    autoFocus = false,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  }

  return (
    <input className={classNames(styles.UxInput, {}, [className])}
           ref={inputRef}
           type={type}
           value={value}
           onChange={onChangeHandler}
           {...otherProps}
    />
  );
});

UxInput.displayName = 'UxInput';

export {
  UxInput
}
