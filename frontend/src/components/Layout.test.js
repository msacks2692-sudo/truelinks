import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('has a skip to main content link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main container can receive programmatic focus', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveAttribute('id', 'main-content');
    expect(mainContainer).toHaveAttribute('tabIndex', '-1');
    expect(mainContainer).toHaveStyle({ outline: 'none' });
  });
});
