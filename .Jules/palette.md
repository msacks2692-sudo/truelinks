## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-12 - Skip Link Focus Management
**Learning:** In React SPAs, simply linking to an ID (`href="#main"`) isn't enough to move keyboard focus. The target element must have `tabIndex="-1"` to be programmatically focusable.
**Action:** Ensure all skip-link targets have `tabIndex="-1"` and `outline: none` (managed via CSS) to allow focus to land correctly.
