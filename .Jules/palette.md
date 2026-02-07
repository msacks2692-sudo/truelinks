## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-07 - Clipboard UX Patterns
**Learning:** Copy buttons benefit significantly from immediate visual feedback (e.g., checkmark icon) and accessible status updates (e.g., `aria-label` change). Absolute positioning inside a relative container keeps the layout clean without disrupting text flow.
**Action:** When adding copy functionality, use icon transitions for feedback and ensure keyboard focus states are clearly visible.
