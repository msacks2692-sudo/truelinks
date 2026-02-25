import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

test('renders skip to content link', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const skipLink = screen.getByText(/skip to content/i);
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute('href', '#main-content');
});

test('main content has correct id and tabIndex', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  // Using getByRole('main') is good practice
  const main = screen.getByRole('main');
  expect(main).toHaveAttribute('id', 'main-content');
  expect(main).toHaveAttribute('tabIndex', '-1');
});
