import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('renders an accessible skip-to-content link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content area accepts programmatic focus gracefully', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveAttribute('id', 'main-content');
    expect(mainContainer).toHaveAttribute('tabindex', '-1');
    expect(mainContainer).toHaveStyle({ outline: 'none' });
  });
});