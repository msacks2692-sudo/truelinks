## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-17 - Skip Link Navigation
**Learning:** Skip links are critical for keyboard users to bypass repetitive navigation. They should be the first focusable element on the page.
**Action:** Always check for `Skip to content` links in layout components and ensure they are visually hidden until focused.
