## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-05 - Skip to Content Target Accessibility
**Learning:** When creating a 'Skip to main content' link, ensuring the target container (e.g. `<main>`) can accept programmatic focus smoothly requires explicitly adding `tabIndex={-1}` and `style={{ outline: 'none' }}` to prevent jarring visual artifacts when the browser focuses it.
**Action:** Always verify focus styling and tab indexing behavior on the destination targets of internal skip links.
