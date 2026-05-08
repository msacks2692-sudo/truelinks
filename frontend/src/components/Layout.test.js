import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  it('renders skip to main content link and focuses main content on click', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Find the skip link
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');

    // Find the main content area
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');

    // Click the skip link
    await user.click(skipLink);

    // Verify focus is moved to main content
    expect(mainContent).toHaveFocus();
  });
});
