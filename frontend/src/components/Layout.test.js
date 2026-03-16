import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders skip link and main content area correctly for accessibility', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Skip link should be in the document and point to #main-content
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');

    // Main content area should have id "main-content", tabIndex -1, and no outline
    const mainContent = document.getElementById('main-content');
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
    expect(mainContent).toHaveStyle('outline: none');
  });
});
