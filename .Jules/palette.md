## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-30 - Skip to Content Focus Management
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus. When implementing accessible 'Skip to main content' links, native HTML anchors aren't enough. You must include an `onClick` handler to programmatically call `.focus()` on the target container. Additionally, the target container needs `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept focus smoothly without showing an unsightly visual ring. To keep it visually hidden but accessible, use `transform: translateY(-100%)` with absolute positioning and transition it to `translateY(0)` on `:focus`.
**Action:** Always use a combination of `useRef`, programmatic focus, and specific container attributes (`tabIndex={-1}`, `outline: 'none'`) when implementing skip links in SPAs to ensure robust keyboard navigation.
