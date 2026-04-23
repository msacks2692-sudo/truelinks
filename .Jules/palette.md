## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2025-01-28 - React SPA Skip Link Focus
**Learning:** In React SPAs, native hash links often fail to shift keyboard focus accurately due to dynamic rendering. A "Skip to main content" link needs an `onClick` handler to programmatically focus the target `<main>` container using a `ref`. The container must also have `tabIndex={-1}` and `style={{ outline: 'none' }}` to smoothly accept focus.
**Action:** When adding skip links, ensure programmatic focus handling is implemented rather than relying solely on native HTML anchor links. Apply CSS `transform: translateY` for smooth reveal/hide transitions.
