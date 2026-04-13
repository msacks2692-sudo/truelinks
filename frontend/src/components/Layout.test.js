import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  it('renders skip link and focuses main content on click', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();

    const mainContent = document.getElementById('main-content');
    expect(mainContent).toBeInTheDocument();

    // It should not be focused initially
    expect(mainContent).not.toHaveFocus();

    await user.click(skipLink);

    // After clicking the skip link, main content should have focus
    expect(mainContent).toHaveFocus();
  });
});
