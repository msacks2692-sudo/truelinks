import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('renders skip to content link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByText(/skip to content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content area has correct id and tabindex', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // We can't easily query by ID if it's on a generic element without role, but we can try looking for main role
    const main = screen.getByRole('main');
    expect(main).toHaveAttribute('id', 'main-content');
    expect(main).toHaveAttribute('tabIndex', '-1');
  });
});
