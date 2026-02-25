## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-15 - Skip Links
**Learning:** "Skip to content" links are essential for keyboard users to bypass repetitive navigation. They must be the first focusable element.
**Action:** Implement a hidden-until-focused skip link in the main Layout, targeting the main content area with `tabIndex="-1"`.
