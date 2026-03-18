import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  test('renders "Skip to main content" link that targets the main content area', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Check for the skip link
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');

    // Check for the main content area with proper attributes for programmatic focus
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
    expect(mainContent).toHaveStyle({ outline: 'none' });
  });
});
