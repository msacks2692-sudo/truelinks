import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout component', () => {
  test('renders skip to main content link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content container has correct accessibility attributes', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    // Use role="main" or query by ID to get the main container since we added an ID to it.
    // However, <main> implicitly has role="main".
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveAttribute('id', 'main-content');
    expect(mainContainer).toHaveAttribute('tabIndex', '-1');
    expect(mainContainer).toHaveStyle('outline: none');
  });
});
