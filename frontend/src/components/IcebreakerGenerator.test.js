import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import IcebreakerGenerator from './IcebreakerGenerator';

// Mock fetch
global.fetch = jest.fn();

// Mock Clipboard API
const mockWriteText = jest.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

describe('IcebreakerGenerator Accessibility', () => {
  beforeEach(() => {
    fetch.mockClear();
    mockWriteText.mockReset();
    mockWriteText.mockResolvedValue(undefined); // Return a promise
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
    expect(button).toHaveAttribute('aria-busy', 'false');
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

  test('copies content to clipboard and shows feedback', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ icebreaker: 'Cool icebreaker' })
    });

    render(<IcebreakerGenerator />);
    const generateButton = screen.getByRole('button', { name: /generate icebreaker/i });
    fireEvent.click(generateButton);

    const icebreakerText = await screen.findByText('Cool icebreaker');
    expect(icebreakerText).toBeInTheDocument();

    const copyButton = screen.getByRole('button', { name: /copy icebreaker to clipboard/i });
    expect(copyButton).toBeInTheDocument();

    // Ensure the mock returns a promise
    mockWriteText.mockResolvedValue(undefined);

    await act(async () => {
        fireEvent.click(copyButton);
    });

    expect(mockWriteText).toHaveBeenCalledWith('Cool icebreaker');

    // Check feedback text
    await waitFor(() => expect(screen.getByText('Copied!')).toBeInTheDocument());

    // Check updated aria-label
    expect(screen.getByRole('button', { name: /copied to clipboard/i })).toBeInTheDocument();
  });
});
