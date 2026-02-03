## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-23 - Skip to Content Links
**Learning:** "Skip to content" links are essential for keyboard navigation. Target containers (like `<main>`) need `tabIndex="-1"` to reliably receive focus when targeted by hash links, especially in Single Page Applications (SPAs) where standard browser anchor jumping might be intercepted or behave inconsistently.
**Action:** Always include a skip link in the main Layout component and ensure the target element has `tabIndex="-1"`.
