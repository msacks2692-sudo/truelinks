import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('has a "skip to content" link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content area has correct id for skip link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });
});
