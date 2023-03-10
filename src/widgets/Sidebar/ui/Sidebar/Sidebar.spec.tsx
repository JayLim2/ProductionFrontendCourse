import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import renderWithTranslation from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('Sidebar is present', () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('Sidebar is collapsable', () => {
    renderWithTranslation(<Sidebar />);
    const button = screen.getByTestId('sidebar-toggle');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed');
  });
});
