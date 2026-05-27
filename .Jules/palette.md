## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-27 - Skip to Main Content Accessibility
**Learning:** In React SPAs, native hash links often fail to shift keyboard focus properly. When implementing accessible 'Skip to main content' links, an `onClick` handler is needed to programmatically call `.focus()` on the target container. The target container must have an `id`, a `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without visual artifacts. For styling, using `transform: translateY(-100%)` for hidden and `translateY(0)` for `:focus` is an effective pattern.
**Action:** Always include programmatic focus shifting alongside native hash anchors in React for skip links to ensure robust screen reader compatibility.
