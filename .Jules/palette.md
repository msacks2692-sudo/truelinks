## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-19 - Copy to Clipboard Micro-Interactions
**Learning:** Copying text to the clipboard isn't complete without accessible feedback. Changing just the button text leaves screen readers unaware. Dynamically updating `aria-label` along with visual text provides instant confidence to all users. A 2-second visual timeout reversion is sufficient for most.
**Action:** Use standard aria-labels (`"Copy [x] to clipboard"` / `"Copied to clipboard"`) combined with temporary visual state changes (`Copied!`) and `setTimeout` reversion for native-feeling copy buttons. Use `flex-column` alignment for positioning below content while reusing CSS classes.
