## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-06-25 - React Hash Links Focus
**Learning:** In React SPAs, native hash links often fail to shift focus properly, requiring an `onClick` handler with programmatic `.focus()`. To smoothly transition off-screen skip links into view, `transform: translateY(0)` on `:focus` ensures keyboard navigators can access the main content area seamlessly.
**Action:** Always implement an `onClick` handler with programmatic `.focus()` on a target container with `tabIndex={-1}` and `style={{ outline: 'none' }}` for accessible 'Skip to main content' links in React SPAs.
