## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-04 - React SPA Skip to Main Content Link Accessibility
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus to the target container. When implementing accessible 'Skip to main content' links, an `onClick` handler is needed to programmatically call `.focus()` on the target container. The target container must have an `id` (e.g., `id='main-content'`), a `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without visual artifacts. For styling the skip link, use `transform: translate(-50%, -100%)` with absolute positioning and `left: 50%` to center and hide it off-screen, and `transform: translate(-50%, 0)` on `:focus` to bring it into view, ensuring smooth CSS transitions.
**Action:** Always implement programmable focus and CSS transitions for visually hiding and showing "Skip to main content" links in React applications.
