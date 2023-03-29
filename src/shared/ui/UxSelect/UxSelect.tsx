import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UxSelect.module.scss';
import { type ChangeEvent, type FC, memo, useMemo } from 'react';

export interface UxSelectOptions {
  value: string
  content: string
}

interface UxSelectProps {
  className?: string
  label?: string
  options: UxSelectOptions[]
  value?: string
  readOnly?: boolean

  /* Callbacks */
  onChange?: (newValue: string) => void
}

export const UxSelect: FC<UxSelectProps> = memo((props: UxSelectProps) => {
  const {
    className,
    label,
    options,
    value,
    readOnly = false,
    onChange
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(e.target.value);
  }

  const optionsList = useMemo(() => {
    return options?.map((option: UxSelectOptions) => (
          <option
              key={option.content}
              className={styles.UxOption}
              value={option.value}
          >{option.content}</option>
    ))
  }, [options]);

  let innerSelect = (
      <select className={styles.UxSelect}
              value={value}
              onChange={onChangeHandler}
              disabled={readOnly}
      >
          {optionsList}
      </select>
  );

  if (label) {
    innerSelect = (
          <label className={styles.label}>
              {label}
              {innerSelect}
          </label>
    );
  }

  return (
      <div className={classNames(styles.UxSelectWrapper, {}, [className])}>
        {innerSelect}
      </div>
  );
});
