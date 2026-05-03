## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-08 - Skip Link Focus Accessibility
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus to the target container. When implementing accessible "Skip to main content" links, programmatic focus is required.
**Action:** Include an `onClick` handler on the skip link to programmatically call `.focus()` on the target container's `ref`. Ensure the target container (e.g., `<main>`) has an `id`, `ref`, `tabIndex={-1}`, and `style={{ outline: 'none' }}` to smoothly accept focus without visual artifacts. Hide the skip link visually using `transform: translateY(-100%)` and show on focus with `transform: translateY(0)` to ensure a smooth CSS transition.
