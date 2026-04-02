import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('renders skip to content link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content is programmatically focusable', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
  });

  test('skip link is the first focusable element', async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const skipLink = screen.getByRole('link', { name: /skip to content/i });

    await user.tab();
    expect(skipLink).toHaveFocus();
  });
});
