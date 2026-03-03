## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-20 - Copy to Clipboard Visual Feedback and A11y
**Learning:** Copying text to the clipboard must provide obvious visual feedback to the user and dynamically update its `aria-label` to inform screen readers of the state change. Reverting the state after a short delay (e.g. 2s) is crucial to indicate readiness for the next interaction.
**Action:** When implementing copy-to-clipboard, always include state to show a "Copied!" message, dynamically update the `aria-label`, and use a timeout to reset the state back to the default "Copy to Clipboard". Position the button contextually, such as below the target text using `flex-direction: column`.
