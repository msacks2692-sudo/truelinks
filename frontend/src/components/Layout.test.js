import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Accessibility', () => {
  test('skip link moves focus to main content', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    const mainContent = screen.getByRole('main');

    expect(skipLink).toBeInTheDocument();
    expect(mainContent).toHaveAttribute('id', 'main-content');
    expect(mainContent).toHaveAttribute('tabIndex', '-1');

    // Initially main content should not have focus
    expect(mainContent).not.toHaveFocus();

    // Click the skip link
    fireEvent.click(skipLink);

    // Focus should move to main content
    expect(mainContent).toHaveFocus();
  });
});
