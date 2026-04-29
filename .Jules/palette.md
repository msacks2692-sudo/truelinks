## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-18 - Skip-to-Content Link Accessibility in React
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus. When implementing accessible 'Skip to main content' links, it's necessary to use an `onClick` handler to programmatically call `.focus()` on the target container. The target container must have an `id`, a `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without visual artifacts. For styling the link itself, using `transform: translateY(-100%)` with absolute positioning hides it off-screen, and `transform: translateY(0)` on `:focus` brings it into view with a smooth CSS transition.
**Action:** Always implement a programmatic focus shift for skip links in React applications, configure the target container appropriately to receive focus, and use standard visual hiding with CSS transform on focus.
