## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-08 - Skip to Main Content Link
**Learning:** The React Layout component needs an accessible 'Skip to main content' link. When implementing this, the link should be visually hidden off-screen (e.g., `transform: translateY(-100%)`) until focused to avoid cluttering the UI. Crucially, the target main container must have an `id` (e.g., `id='main-content'`), `tabIndex={-1}`, and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without jarring visual artifacts when navigated to via the keyboard.
**Action:** Always implement skip links at the start of the layout and ensure the target element can smoothly receive programmatic focus.
