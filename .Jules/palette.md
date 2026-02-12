## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-19 - Skip Links for Keyboard Users
**Learning:** Skip links targeting `#main-content` must have the target element (`<main>`) set to `tabIndex="-1"` to ensure programmatic focus works across all browsers.
**Action:** Always verify `tabIndex="-1"` on the skip link target and test focus behavior with keyboard.
