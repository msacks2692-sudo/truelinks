## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-06-12 - Skip Link Accessibility
**Learning:** In React SPAs, native hash links often fail to correctly shift keyboard focus. When implementing accessible "Skip to main content" links, programmatic focus using a `ref` is required. The target container must accept programmatic focus with `tabIndex={-1}` and `style={{ outline: 'none' }}` to prevent visual artifacts.
**Action:** Use an `onClick` handler to programmatically call `.focus()` on the target container when implementing a skip link. Ensure the target has an `id` to fallback onto in case of issues, a `ref`, and `tabIndex={-1}`.
