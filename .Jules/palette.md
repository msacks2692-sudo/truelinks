## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-18 - Skip Link Accessibility in React SPAs
**Learning:** Native hash links often fail to move keyboard focus reliably in React Single Page Applications.
**Action:** When implementing "Skip to content" links, use an `onClick` handler with a `ref` to programmatically call `.focus()` on the main container. The container needs `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept focus smoothly without visual artifacts.
