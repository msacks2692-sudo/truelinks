## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-03-15 - Skip Link and Programmatic Focus
**Learning:** Providing an accessible "Skip to main content" link significantly improves keyboard navigation. However, the target container must accept programmatic focus smoothly. Adding `tabIndex={-1}` allows focus without including the element in the normal tab sequence, and `style={{ outline: 'none' }}` prevents jarring visual artifacts (default browser focus rings) on structural containers like `<main>` which users shouldn't perceive as interactable.
**Action:** Always ensure target elements of skip links have `id`, `tabIndex={-1}`, and `outline: 'none'` applied to facilitate accessible but visually unobtrusive programmatic focus.
