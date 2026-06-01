## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-06-11 - Playwright Off-Screen Element Verification
**Learning:** Playwright's `to_be_hidden()` only checks DOM presence and basic CSS (display/visibility) and does not consider elements hidden via CSS transforms (e.g., `translateY`). To verify elements positioned off-screen visually, check their bounding box coordinates (e.g., `box['y'] < 0`).
**Action:** Use `await locator.bounding_box()` to verify visual off-screen hidden states instead of `to_be_hidden()`.
