## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-10 - Skip to Content Focus Management
**Learning:** React Single Page Applications (SPAs) often fail to shift actual keyboard focus when using native hash links (e.g., `<a href="#main-content">`), even if the URL updates. The `tabIndex="-1"` and `outline: 'none'` on the `<main>` tag is necessary to gracefully receive programmatic focus without showing an ugly ring around the layout wrapper.
**Action:** Always include an `onClick` handler on "Skip to content" links to explicitly call `.focus()` on the target element in SPAs, and ensure the target has `tabIndex="-1"` and `style={{ outline: 'none' }}`.
