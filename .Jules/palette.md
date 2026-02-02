## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Skip Link Focus Management
**Learning:** `tabIndex="-1"` on the target element (like `<main>`) is essential for "Skip to content" links to work reliably across all browsers and ensure programmatic focus shifts correctly.
**Action:** Always add `tabIndex="-1"` to the target of a skip link.
