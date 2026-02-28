## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-02-28 - Clipboard Accessibility
**Learning:** Copy to clipboard interactions must pair visual feedback (like changing text to "Copied!") with an `aria-label` update to provide screen readers the equivalent confirmation, and then revert state automatically via timeout.
**Action:** Always wrap `navigator.clipboard.writeText` actions with temporary state changes managing both visible text and ARIA attributes for a complete feedback loop.
