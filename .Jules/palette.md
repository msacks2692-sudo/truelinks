## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-09 - Accessible Skip Links
**Learning:** Implementing an accessible 'Skip to main content' link requires visually hiding it by default using `transform: translateY(-100%)` and bringing it into view on focus. The target main container must have `tabIndex={-1}` and `outline: 'none'` so the focus smoothly transfers without a jarring visual artifact.
**Action:** Ensure all layout structures include a visually hidden skip link and properly configure the main content container to accept focus gracefully.
