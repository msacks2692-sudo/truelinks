## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2024-05-22 - Skip Link & Focus Management
**Learning:** Adding a "Skip to content" link is a critical accessibility pattern, but it requires the target element to be focusable programmatically. Adding `tabIndex="-1"` to the target (e.g., `<main>`) ensures the browser actually moves focus there when the link is activated, preventing focus from being lost or resetting to the top of the body.
**Action:** Always ensure skip link targets have `tabIndex="-1"` and a valid `id`.
