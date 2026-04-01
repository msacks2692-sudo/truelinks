import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders a skip to main content link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders a main content area with id main-content and tabIndex -1', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
    expect(mainContent).toHaveStyle({ outline: 'none' });
  });
});
