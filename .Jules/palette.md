## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-21 - Skip Link Implementation
**Learning:** React Router's `Outlet` structure requires the skip link target (main container) to have `tabIndex="-1"` to ensure programmatic focus lands correctly and subsequent tab navigation starts from inside the main content.
**Action:** When adding skip links to layouts with routed content, ensure the target container is focusable via `tabIndex="-1"`.
