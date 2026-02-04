## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-18 - Skip Link Implementation
**Learning:** `Skip to content` links must have a visible focus state and target a container with `tabindex="-1"` to ensure focus actually moves in SPAs.
**Action:** Ensure main content wrappers always have `id` and `tabindex="-1"` when using skip links.
