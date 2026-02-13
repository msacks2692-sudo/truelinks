## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-13 - Skip Link Accessibility
**Learning:** "Skip to content" links targeting non-interactive elements (like `<main>`) require `tabIndex="-1"` on the target. Without it, the browser might scroll but not move keyboard focus, confusing screen reader users.
**Action:** Always add `tabIndex="-1"` to the target of a skip link if it's not natively focusable.
