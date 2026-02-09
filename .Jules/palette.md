## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-20 - Skip to Content Navigation
**Learning:** Adding a "Skip to content" link is a high-impact, low-effort accessibility win that significantly improves keyboard navigation by allowing users to bypass repetitive navigation menus.
**Action:** Ensure all new layouts include a hidden-until-focused skip link pointing to the main content area, with `tabIndex="-1"` on the target container to ensure programmatic focus works.
