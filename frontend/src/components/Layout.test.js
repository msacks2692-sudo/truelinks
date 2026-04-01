import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders skip to main content link with correct attributes', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(skipLink).toHaveClass('skipLink');
  });

  it('renders main content area with correct id and tabindex', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainArea = screen.getByRole('main');
    expect(mainArea).toBeInTheDocument();
    expect(mainArea).toHaveAttribute('id', 'main-content');
    expect(mainArea).toHaveAttribute('tabIndex', '-1');
    expect(mainArea).toHaveStyle('outline: none');
  });
});
