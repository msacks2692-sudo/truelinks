## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-21 - Skip to Content Pattern
**Learning:** Main content areas often lack keyboard accessibility entry points, forcing users to tab through entire navbars. A visually hidden "Skip to content" link is standard but often missed.
**Action:** Always include a `.skipLink` in Layout components pointing to `<main id="main-content">`, ensuring it's visible on focus.
