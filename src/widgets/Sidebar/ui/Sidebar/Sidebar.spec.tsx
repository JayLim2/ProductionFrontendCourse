import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  test('Sidebar is present', () => {
    renderComponent(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('Sidebar is collapsable', () => {
    renderComponent(<Sidebar />);
    const button = screen.getByTestId('sidebar-toggle');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed');
  });
});
