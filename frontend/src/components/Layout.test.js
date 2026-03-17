import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component accessibility', () => {
  test('includes a skip to main content link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content area is focusable and hidden from outline', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    // We expect the main role to be available since we render <main>
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
    expect(mainContent).toHaveStyle({ outline: 'none' });
  });
});
