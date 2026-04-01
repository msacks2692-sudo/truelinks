import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  it('contains an accessible skip to main content link', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');

    // Ensure the element has the correct CSS class for styling and focus pseudo-class
    expect(skipLink).toHaveClass('skipLink');
  });

  it('main content area is focusable and outlines are removed', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');
    expect(mainContent).toHaveStyle({ outline: 'none' });
  });
});
