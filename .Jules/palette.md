## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-19 - Skip to Main Content Link Accessibility
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus to the target section. When implementing accessible 'Skip to main content' links, the target container must explicitly be made focusable using `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept programmatic focus without visual artifacts.
**Action:** Always include an `onClick` handler on "skip to" links to programmatically call `.focus()` on the target container using a React `ref`.
