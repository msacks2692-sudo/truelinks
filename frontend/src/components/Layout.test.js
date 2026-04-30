import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout component skip link', () => {
  it('focuses main content when skip link is clicked', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const skipLink = screen.getByText('Skip to main content');
    const mainContent = document.getElementById('main-content');

    expect(skipLink).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute('tabIndex', '-1');

    fireEvent.click(skipLink);

    expect(mainContent).toHaveFocus();
  });
});
