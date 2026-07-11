## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-18 - Skip Link Accessibility
**Learning:** React SPAs fail to correctly shift keyboard focus with native hash links. An accessible "Skip to main content" link requires programmatic focus management on top of standard URL hash adjustments.
**Action:** Always include an `onClick` handler for skip links that calls `.focus()` on a target container (with `tabIndex={-1}`, a `ref`, and `id`) and updates the URL using `window.history.pushState()`.
