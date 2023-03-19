import { type FC } from 'react';
import { UxButton } from 'shared/ui/UxButton/UxButton';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/CounterSlice';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/GetCounterValue/GetCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC<any> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector<StateSchema>(getCounterValue);

  const increment = (): void => {
    dispatch(counterActions.increment());
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  }

  return (
      <div>
        <h1 data-testid='counter-value'>{counterValue}</h1>
        <UxButton
          data-testid='increment-btn'
          onClick={increment}
        >
          {t('counterIncBtn')}
        </UxButton>
        <UxButton
          data-testid='decrement-btn'
          onClick={decrement}
        >
          {t('counterDecBtn')}
        </UxButton>
      </div>
  );
};
