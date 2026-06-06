## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-05 - Skip Link Accessibility in SPAs
**Learning:** Native hash links often fail to correctly shift keyboard focus in React SPAs. When implementing accessible 'Skip to main content' links, an `onClick` handler is needed to programmatically call `.focus()` on the target container. The target container must have an `id`, a `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}` to smoothly accept programmatic focus without visual artifacts.
**Action:** Always use a programmatic focus shift along with hash links for skip links in React applications, and visually hide them off-screen until focused.
