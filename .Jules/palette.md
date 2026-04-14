## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-05-15 - React SPA Skip Links Accessibility
**Learning:** Native HTML hash links (`<a href="#content">`) often fail to correctly shift keyboard focus in React Single Page Applications (SPAs). Even if the URL hash changes, the actual browser focus might not move, leaving screen reader users and keyboard navigators trapped or confused.
**Action:** Always implement a programmatic `onClick` handler for skip links in React that manually calls `.focus()` on the target container. Ensure the target container has an `id`, `tabIndex={-1}` (so it can receive focus without being in the natural tab order), and `style={{ outline: 'none' }}` to avoid visual artifacts.
