## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Skip to Content
**Learning:** Keyboard users need a way to bypass navigation. A "Skip to content" link is a simple but high-impact accessibility feature.
**Action:** Ensure every layout has a skip link pointing to the main content area with proper focus styles.
