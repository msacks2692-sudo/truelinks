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

  const skipLink = screen.getByRole('link', { name: /skip to content/i });
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute('href', '#main-content');
});

test('renders main content with correct id and tabindex', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  // We can find the main element by role or other means. Layout should have a main tag.
  // Ideally, we can assign a test id or just look for the main tag.
  // Given Layout.js has <main className={styles.mainContent}>, role="main" is implicit.
  const main = screen.getByRole('main');
  expect(main).toHaveAttribute('id', 'main-content');
  expect(main).toHaveAttribute('tabIndex', '-1');
});
