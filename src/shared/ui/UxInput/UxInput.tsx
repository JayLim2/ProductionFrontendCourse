import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import styles from './UxInput.module.scss';
import {
  type MutableRefObject,
  type FC,
  type InputHTMLAttributes,
  memo,
  useEffect,
  useRef
} from 'react';
import type React from 'react';

type ExcludedHTMLInputAttributes = 'value' | 'onChange' | 'readOnly';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, ExcludedHTMLInputAttributes>

interface UxInputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: any) => void
  autoFocus?: boolean
  readOnly?: boolean
}

const UxInput: FC<UxInputProps> = memo((props: UxInputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    autoFocus = false,
    readOnly = false,
    ...otherProps
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  }

  const modifiers: Modifiers = {
    [styles.readOnly]: readOnly
  }

  return (
    <input className={classNames(styles.UxInput, modifiers, [className])}
           ref={inputRef}
           type={type}
           value={value}
           readOnly={readOnly}
           onChange={onChangeHandler}
           {...otherProps}
    />
  );
});

UxInput.displayName = 'UxInput';

export {
  UxInput
}
