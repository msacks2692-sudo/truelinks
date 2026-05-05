## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-05 - Skip to Content Accessibility in SPAs
**Learning:** In React SPAs, native hash links (e.g., `href="#main-content"`) often fail to correctly shift keyboard focus due to how React handles routing and DOM updates. A visually hidden "Skip to main content" link must programmatically shift focus to the target container using a React `ref` and `.focus()`. The target container needs `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept focus smoothly without showing an unseemly outline.
**Action:** When implementing accessible "Skip to main content" links in SPAs, combine `href` with an `onClick` handler to manually manage focus via `useRef`, and use CSS `transform: translateY(...)` for off-screen hiding and focus revelation.
