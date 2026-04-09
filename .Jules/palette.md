## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2024-04-09 - Accessible Skip Link
**Learning:** A "Skip to main content" link is a critical accessibility feature. To implement it cleanly without disrupting layout, visually hide it off-screen (`transform: translateY(-100%)`) and translate it into view on `:focus`. The target main container MUST have `tabIndex={-1}` and `style={{ outline: 'none' }}` to smoothly accept programmatic focus without showing a confusing focus ring to non-keyboard users.
**Action:** Implement this pattern for all main layouts to support screen readers and keyboard navigation effectively.
