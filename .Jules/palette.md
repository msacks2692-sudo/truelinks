## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-03-01 - Skip to Content Navigation
**Learning:** Adding a "Skip to content" link is a high-impact, low-effort accessibility win. It MUST target an element with `id` and `tabIndex="-1"` to ensure programmatic focus works correctly across all browsers.
**Action:** Always include a skip link in the main Layout component and ensure the main content container is focusable.
