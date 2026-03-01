## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-22 - Copy to Clipboard Accessibility
**Learning:** Copy-to-clipboard interactions can leave screen reader users unaware of success. A dynamically updating `aria-label` (e.g. from "Copy" to "Copied to clipboard") combined with a visible text change and brief timeout creates a robust, accessible micro-interaction.
**Action:** Always implement dynamic `aria-label` updates alongside visual text changes for copy actions, and revert state after a short delay (e.g. 2000ms).
