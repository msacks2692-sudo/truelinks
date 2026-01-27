## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Global Navigation Bypass
**Learning:** Keyboard users need a way to bypass repetitive navigation. Implementing a "Skip to content" link in the main `Layout` component provides a consistent solution across all pages.
**Action:** Ensure the `main` content area always has `id="main-content"` and the skip link is the first interactive element in the DOM.
