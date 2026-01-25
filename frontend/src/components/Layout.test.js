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

test('renders main content with correct id', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveAttribute('id', 'main-content');
  expect(mainElement).toHaveAttribute('tabIndex', '-1');
});
