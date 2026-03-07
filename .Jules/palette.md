## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-18 - Copy to Clipboard Accessibility and UX
**Learning:** Copy-to-clipboard interactions should provide both visual and accessible feedback (e.g., changing the button text to "Copied!" and updating the `aria-label`). To revert the state reliably after a timeout and prevent memory leaks, `useRef` should be used to store the timeout ID, and it must be cleared in a `useEffect` cleanup function.
**Action:** Always use a combination of `aria-label` updates, visual state changes, and robust `useRef`/`useEffect` cleanup when implementing temporary UI states like "Copied!".
