## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-01-27 - Keyboard Navigation & Skip Links
**Learning:** Even simple layouts with a Navbar can become tedious for keyboard users. A "Skip to Content" link is a zero-cost, invisible-until-needed enhancement that drastically improves navigation speed.
**Action:** Always include a hidden-but-focusable "Skip to Content" link at the very top of the DOM in any layout component.
