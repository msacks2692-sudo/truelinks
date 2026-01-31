## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - SPA Navigation Bypass
**Learning:** In React SPAs with persistent layouts (like `Layout.js`), keyboard users are forced to tab through the navigation on every route change.
**Action:** Ensure `Layout` components always include a "Skip to content" link pointing to a `<main tabIndex="-1">` container to manage focus programmatically.
