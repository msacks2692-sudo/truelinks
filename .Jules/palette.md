## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-04 - Skip to Main Content Link Accessibility
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus to the target section. A "Skip to main content" link must not only jump to an element but actually programmatically call `.focus()` on the target. The target element must be focusable using `tabIndex={-1}` and styled with `outline: none` so that normal keyboard navigation can continue smoothly without visual focus rings on non-interactive containers.
**Action:** Implement "Skip to main content" links with an `onClick` handler utilizing `useRef` to programmatically focus the target `<main>` container, ensuring it accepts focus smoothly.
