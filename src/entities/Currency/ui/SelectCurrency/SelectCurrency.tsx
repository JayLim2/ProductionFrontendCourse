import { classNames } from 'shared/lib/classNames/classNames';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UxSelect } from 'shared/ui/UxSelect/UxSelect';
import { Currency } from '../../model/types/Currency';

interface SelectCurrencyProps {
  className?: string
  value?: Currency
  readOnly?: boolean
  onChange?: (newValue: Currency) => void
}

const optionsList = [
  { value: Currency.RUB, content: 'RUB' },
  { value: Currency.EUR, content: 'EUR' },
  { value: Currency.USD, content: 'USD' }
];

export const SelectCurrency: FC<SelectCurrencyProps> = memo((props: SelectCurrencyProps) => {
  const {
    className,
    value,
    readOnly = false,
    onChange
  } = props;
  const { t } = useTranslation('uxTranslation');

  const onChangeHandler = useCallback((newValue: string) => {
    onChange?.(newValue as Currency);
  }, [onChange]);

  return (
        <UxSelect
            className={classNames('', {}, [className])}
            label={t('selectCurrencyField')}
            options={optionsList}
            value={value}
            readOnly={readOnly}
            onChange={onChangeHandler}
        />
  );
});
