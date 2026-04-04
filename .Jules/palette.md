## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2026-04-04 - Skip to Main Content Accessibility
**Learning:** A "Skip to main content" link is a critical accessibility feature for keyboard users to bypass repetitive navigation. The target container (usually `<main>`) must have `tabIndex={-1}` and `style={{ outline: 'none' }}` to accept programmatic focus smoothly without showing an unwanted default browser focus outline when navigated to via the skip link. The link itself should be visually hidden off-screen (e.g., `transform: translateY(-100%)`) until focused (`:focus`), where it slides into view.
**Action:** Always include a visually hidden, focusable skip link at the top of the layout and ensure the target element has `tabIndex={-1}` and outline styling managed to provide a seamless transition for keyboard navigation.
