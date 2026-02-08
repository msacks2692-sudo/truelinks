## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-08 - Clipboard Feedback Loop
**Learning:** Copy actions need immediate, visible confirmation (like "Copied!" text) for accessibility and user confidence. Relying on icon changes alone is often insufficient for users with cognitive disabilities or screen readers.
**Action:** Always pair clipboard actions with a temporary text feedback mechanism and ensure focus is managed if the trigger element changes state significantly.
