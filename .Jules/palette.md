## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-22 - Clipboard Interaction Pattern
**Learning:** For "Copy to Clipboard" actions, visual feedback (changing button text) combined with `aria-label` updates ensures both sighted and screen reader users confirm the action. Mocking `navigator.clipboard` is essential for testing this interaction reliably in JSDOM environments.
**Action:** Use the `useState` toggle pattern for copy buttons with a timeout to revert state.
