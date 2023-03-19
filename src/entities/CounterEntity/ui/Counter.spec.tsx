import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';
import { userEvent } from '@storybook/testing-library';

describe('React Component "Counter"', () => {
  test('Counter is present', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 777
        }
      }
    });
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('777');
  });

  test('Increment button works fine', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 111
        }
      }
    });
    const incrementButton = screen.getByTestId('increment-btn');
    userEvent.click(incrementButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('112');
  });

  test('Decrement button works fine', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 111
        }
      }
    });
    const decrementButton = screen.getByTestId('decrement-btn');
    userEvent.click(decrementButton);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('110');
  });
});
