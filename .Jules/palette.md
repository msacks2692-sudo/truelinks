## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-04 - Copy to Clipboard Accessibility
**Learning:** Copy to Clipboard functionality requires a specific UX pattern: visual feedback (text change to 'Copied!'), dynamic `aria-label`, and a 2-second timeout to revert the state. Unit tests for React components relying on this require `jest.useFakeTimers()` to verify state changes securely and efficiently.
**Action:** Always implement dynamic `aria-label` and visual feedback timeouts for copy actions, and use `jest.useFakeTimers()` for testing the reverting logic.

## 2024-05-02 - Accessible Skip to Content Link in React SPAs
**Learning:** Native hash links for "Skip to main content" often fail to shift keyboard focus in React SPAs. Elements need programmatic focus via `ref.current.focus()`. Furthermore, to accept programmatic focus smoothly without a visual outline, the target container must have `tabIndex={-1}` and `style={{ outline: 'none' }}`. Skip links are best hidden visually but kept accessible using `transform: translateY(-100%)` for default state, and transitioning to `transform: translateY(0)` on `:focus`.
**Action:** When implementing skip links in React, always use an `onClick` handler with a `useRef` to programmatically focus the target main container rather than relying entirely on native `href="#id"` anchor links. Hide the link using CSS transform to avoid taking up visual space until it receives focus.
