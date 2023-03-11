import { render, screen } from '@testing-library/react';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';

describe('UxButton', () => {
  test('button is present', async () => {
    const text = 'TestButton';
    render(<UxButton>{text}</UxButton>);
    const node = await screen.findByText(text);
    expect(node).toBeInTheDocument();
  });

  test('button applies theme', async () => {
    const text = 'TestButton';
    render(<UxButton theme={ButtonTheme.CLEAR}>{text}</UxButton>);
    const node = await screen.findByText(text);
    expect(node).toHaveClass('clear');
  });
});
