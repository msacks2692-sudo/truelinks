## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-19 - Skip Link Focus Management
**Learning:** `tabIndex="-1"` is essential on the target container (e.g., `<main>`) for "Skip to content" links to ensure programmatic focus works correctly in React/SPA apps, preventing focus loss after navigation.
**Action:** Always ensure skip link targets have `id` and `tabIndex="-1"`.
