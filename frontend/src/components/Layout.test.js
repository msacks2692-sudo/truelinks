import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('renders "Skip to content" link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.queryByText(/skip to content/i);
    // Since we expect this to fail initially, we can't assert strict existence if we want to confirm failure first.
    // But the plan says "Expect it to fail initially". So let's write the assertion as if it should pass.
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('main content has correct id and tabIndex', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // We can't easily find the main element by text since it contains Outlet.
    // We can try to find it by role 'main'.
    const main = screen.getByRole('main');
    expect(main).toHaveAttribute('id', 'main-content');
    expect(main).toHaveAttribute('tabIndex', '-1');
  });
});
