## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-17 - Skip Link Focus in React SPAs
**Learning:** In React SPAs, native hash links (e.g., `<a href="#main">`) often fail to correctly shift keyboard focus to the target element due to client-side routing and virtual DOM updates.
**Action:** Always include an `onClick` handler on "Skip to content" links to programmatically call `.focus()` on the target container via a `useRef`. The target container must have `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without visual artifacts.
