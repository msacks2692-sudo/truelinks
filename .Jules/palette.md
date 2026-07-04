## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-05 - SPA Skip to Content Navigation
**Learning:** Native hash links for 'Skip to content' frequently fail to correctly shift keyboard focus in React Single Page Applications. The focus ring might visually appear, but subsequent keyboard navigation (like Tab) doesn't start from the target element.
**Action:** Combine hash anchor links with an `onClick` handler that programmatically sets focus `.focus()` to the target `<main>` container (which requires `id`, `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}`) and use `window.history.pushState` to update the URL natively for a robust accessible solution.
