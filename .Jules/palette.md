## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-05 - Skip to Main Content Accessibility
**Learning:** Adding a "Skip to main content" link is essential for keyboard accessibility, but simply linking to an `id` is not enough. The target container (e.g., `<main>`) must have `tabIndex={-1}` to accept programmatic focus, and `style={{ outline: 'none' }}` to prevent jarring visual focus outlines that confuse visual users when they navigate normally.
**Action:** Always ensure target containers for skip links have `tabIndex={-1}` and `style={{ outline: 'none' }}` to handle programmatic focus smoothly.
