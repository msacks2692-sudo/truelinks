## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Skip Link Implementation
**Learning:** For "Skip to content" links to work correctly in SPAs (Single Page Applications) like React, the target container (e.g., `<main>`) MUST have `tabIndex="-1"`. Without this, setting focus programmatically often fails or doesn't move the visual focus ring, confusing keyboard users.
**Action:** Ensure all skip link targets have `id` and `tabIndex="-1"`.
