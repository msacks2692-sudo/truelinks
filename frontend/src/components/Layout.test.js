import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component', () => {
  it('should shift focus to the main content area when the skip link is clicked', async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByText('Skip to main content');
    const mainContent = screen.getByRole('main');

    expect(skipLink).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();

    // Verify initial focus is not on main
    expect(mainContent).not.toHaveFocus();

    // Click the skip link
    await userEvent.click(skipLink);

    // Verify focus has shifted to the main content
    expect(mainContent).toHaveFocus();
  });
});
