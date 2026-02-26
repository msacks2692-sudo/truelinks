import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import IcebreakerGenerator from './IcebreakerGenerator';

// Mock fetch
global.fetch = jest.fn();

describe('IcebreakerGenerator Accessibility', () => {
  beforeEach(() => {
    fetch.mockClear();
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  test('button indicates loading state via aria-busy', async () => {
    fetch.mockImplementationOnce(() =>
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: async () => ({ icebreaker: 'Why did the chicken cross the road?' })
      }), 100))
    );

    render(<IcebreakerGenerator />);

    const button = screen.getByRole('button', { name: /generate icebreaker/i });
    expect(button).not.toHaveAttribute('aria-busy', 'true');

    fireEvent.click(button);

    // Should change text
    expect(screen.getByRole('button', { name: /generating/i })).toBeInTheDocument();

    // Should have aria-busy="true"
    expect(button).toHaveAttribute('aria-busy', 'true');

    await waitFor(() => expect(screen.getByText('Why did the chicken cross the road?')).toBeInTheDocument());

    // Should not have aria-busy anymore
    expect(button).toHaveAttribute('aria-busy', 'false'); // or remove attribute, but react usually sets it to false or removes it.
    // In React `aria-busy={false}` renders `aria-busy="false"`.
  });

  test('result container has aria-live="polite"', async () => {
     fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ icebreaker: 'Test Icebreaker' })
    });

    render(<IcebreakerGenerator />);
    const button = screen.getByRole('button', { name: /generate icebreaker/i });

    fireEvent.click(button);

    const result = await screen.findByText(/Test Icebreaker/);
    // Find the container - assuming it's the parent div of the text or close to it.
    // In the component: <div className={styles.result}> ... <p>{icebreaker}</p> </div>
    // We can look for the heading "Here's an icebreaker for you:" which is inside the result div.

    const heading = screen.getByText("Here's an icebreaker for you:");
    const container = heading.closest('div');

    expect(container).toHaveAttribute('aria-live', 'polite');
  });

  test('error message has role="alert"', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<IcebreakerGenerator />);
    const button = screen.getByRole('button', { name: /generate icebreaker/i });

    fireEvent.click(button);

    const error = await screen.findByText(/Error: Network error/);
    expect(error).toHaveAttribute('role', 'alert');
  });

  test('allows user to copy icebreaker to clipboard', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ icebreaker: 'Copy me!' })
    });

    render(<IcebreakerGenerator />);
    const generateButton = screen.getByRole('button', { name: /generate icebreaker/i });

    fireEvent.click(generateButton);

    await screen.findByText('Copy me!');
    const copyButton = screen.getByRole('button', { name: /copy icebreaker to clipboard/i });

    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveTextContent(/copy/i);

    await act(async () => {
        fireEvent.click(copyButton);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy me!');

    // Wait for state update to "Copied!"
    await waitFor(() => {
        expect(screen.getByRole('button', { name: /copied to clipboard/i })).toBeInTheDocument();
    });

    expect(screen.getByText(/copied!/i)).toBeInTheDocument();
  });
});
