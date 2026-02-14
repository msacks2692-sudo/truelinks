## 2026-01-18 - Icebreaker Accessibility
**Learning:** `aria-live` is crucial for async content updates like generated text, which otherwise go unnoticed by screen readers. `aria-busy` on the triggering button provides immediate feedback while waiting.
**Action:** Always add `aria-live` to result containers and `aria-busy` to action buttons for async operations.

## 2026-05-12 - Skip to Content
**Learning:** Hidden 'Skip to content' links are essential for keyboard users to bypass navigation. They must target a container with `tabIndex="-1"` to ensure programmatic focus works correctly.
**Action:** Always include a skip link as the first focusable element in the Layout component.
