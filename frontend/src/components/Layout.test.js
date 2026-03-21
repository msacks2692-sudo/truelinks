import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders skip to main content link with correct target', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('main content container has appropriate accessibility attributes for programmatic focus', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveAttribute('id', 'main-content');
    expect(mainContainer).toHaveAttribute('tabIndex', '-1');
    expect(mainContainer).toHaveStyle({ outline: 'none' });
  });
});
