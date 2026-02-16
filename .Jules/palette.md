## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-21 - Skip Links for Keyboard Navigation
**Learning:** Skip links are essential for keyboard users to bypass repetitive navigation and reach the main content quickly. They must be the first focusable element.
**Action:** Always include a "Skip to content" link at the top of the layout, visually hidden until focused, pointing to the main content area with `tabIndex="-1"`.
