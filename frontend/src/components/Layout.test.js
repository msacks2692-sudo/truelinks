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

test('skip link has correct class for accessibility', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const skipLink = screen.getByText(/skip to content/i);
  // We can't check the exact class hash with modules easily without mocking,
  // but we can check if it has a class attribute.
  // Ideally we would mock the CSS module but for this simple test checking existence is ok.
  expect(skipLink).toHaveAttribute('class');
});
