## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-25 - Skip Link Focus Management
**Learning:** For a "Skip to content" link to work effectively with modern SPAs, the target container (e.g., `<main>`) must have `tabIndex="-1"` to be programmatically focusable, as it is not natively interactive.
**Action:** Ensure all skip link targets have `id` and `tabIndex="-1"`.
