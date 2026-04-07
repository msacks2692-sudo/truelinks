## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-05 - Skip-to-Content Link Accessibility
**Learning:** To implement a "Skip to main content" link without causing jarring visual outlines when the main content receives programmatic focus, the target container must have `tabIndex={-1}` and `style={{ outline: 'none' }}`. The skip link itself should be visually hidden using `transform: translateY(-100%)` and transitioned in on `:focus`.
**Action:** Always ensure skip-to-content target elements have `tabIndex={-1}` and outline removed to provide a smooth transition for keyboard users without displaying a focus ring on the entire page content.
