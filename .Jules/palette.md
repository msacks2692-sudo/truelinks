## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-18 - Skip to Content Pattern
**Learning:** Hidden "Skip to content" links must use `top: 0` on focus to become visible, and the target container must have `tabIndex="-1"` to accept programmatic focus.
**Action:** Ensure all new pages with navigation include a skip link or use the global Layout skip link.
