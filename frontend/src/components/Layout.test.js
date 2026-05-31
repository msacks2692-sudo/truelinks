import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders skip to main content link', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
  });

  it('shifts focus to main content area when clicked', async () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    const mainContent = screen.getByRole('main');

    // Simulate clicking the skip link
    await userEvent.click(skipLink);

    // Verify that focus is shifted to the main content area
    expect(mainContent).toHaveFocus();
  });
});
