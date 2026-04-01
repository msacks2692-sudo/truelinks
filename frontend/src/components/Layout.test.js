import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout Accessibility', () => {
  it('renders a skip to main content link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('main content area has appropriate attributes for programmatic focus', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // We can find main by its role implicitly or by id directly since we expect the id to be present
    const mainElement = document.getElementById('main-content');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute('tabindex', '-1');
    expect(mainElement).toHaveStyle('outline: none');
  });
});
