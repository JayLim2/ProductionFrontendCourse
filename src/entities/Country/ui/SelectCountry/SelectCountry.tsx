import { classNames } from 'shared/lib/classNames/classNames';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { UxSelect } from 'shared/ui/UxSelect/UxSelect';
import { Country } from '../../model/types/Country';

interface SelectCountryProps {
  className?: string
  value?: Country
  readOnly?: boolean
  onChange?: (newValue: Country) => void
}

const optionsList = [
  { value: Country.RUS, content: 'Russian Federation' },
  { value: Country.USA, content: 'United States' },
  { value: Country.CN, content: 'China' },
  { value: Country.UK, content: 'United Kingdom' }
];

export const SelectCountry: FC<SelectCountryProps> = memo((props: SelectCountryProps) => {
  const {
    className,
    value,
    readOnly = false,
    onChange
  } = props;
  const { t } = useTranslation('uxTranslation');

  const onChangeHandler = useCallback((newValue: string) => {
    onChange?.(newValue as Country);
  }, [onChange]);

  return (
        <UxSelect
            className={classNames('', {}, [className])}
            label={t('selectCountryField')}
            options={optionsList}
            value={value}
            readOnly={readOnly}
            onChange={onChangeHandler}
        />
  );
});
