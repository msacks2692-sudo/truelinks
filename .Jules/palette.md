## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-04 - React SPA Skip to Content Accessibility
**Learning:** In React Single Page Applications, native hash links (e.g. `<a href="#main">`) often fail to reliably shift keyboard focus to the target container, breaking the "Skip to Content" accessibility requirement.
**Action:** Always implement an explicit `onClick` handler on "Skip to Content" links that programmatically calls `.focus()` on the main container's ref. The main container must have `tabIndex={-1}` and `style={{ outline: 'none' }}` to gracefully receive focus without showing visual artifacts.
