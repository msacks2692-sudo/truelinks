import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
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

  test('main content has correct id', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Assuming the Outlet renders something or just check the main tag itself
    // But since Outlet might be empty, we just look for the main tag by role
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
  });
});
