## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-02 - Skip to Content Accessibility
**Learning:** Screen reader users and keyboard navigators benefit greatly from a "Skip to main content" link as the first focusable element. Using `transform: translateY(-100%)` visually hides it until focused (`:focus`), providing a smooth UX without disrupting the initial layout. To make the target focusable without a visible outline artifact, the target needs `tabIndex={-1}` and `style={{ outline: 'none' }}`.
**Action:** Always implement a visually hidden skip link and ensure the target section smoothly handles programmatic focus.
