## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Skip Link Visibility
**Learning:** Skip links are essential for keyboard users to bypass repetitive navigation, but they must be visually hidden until focused to avoid cluttering the UI.
**Action:** Use CSS transforms (e.g., `top: -200px`) instead of `display: none` or `visibility: hidden` to ensure the link remains focusable.
