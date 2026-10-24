# Process correction after Luca's review — 2026-10-22

Luca rejected the left/right grid mismatch and the `process-step-datum` treatment as previously prohibited AI slop. The point–rule–tag formula and generic stage captions were redundant. This correction supersedes those choices in the earlier audit rereading and v3 delivery; it does not reinterpret the rejection as a request for another decorative label style.

Removed the complete datum, its index/stage data and unused CSS, including the Plex font-face declaration. The original acquired font/license remains a source asset, with no current application consumer or build output. Each ordered-list item now begins directly with its existing title and description. Hover retains only the subtle cell surface; the orange strip was removed.

Removed the independent horizontal/node decoration from both the left desktop column and mobile opening. The panel retains one common vertical grid. Each desktop step draws its own bottom boundary across the entire panel via a pseudo-element, with width resolved against the full-width panel container. The same line therefore defines both columns' row boundary. The closing boundary follows the final step. No DOM measurement or new observer is needed.

First-step content shares the opening padding with the manifesto. A desktop first-row minimum of `max(24rem, 28cqw)` reserves space below the left title; it can grow with actual content. Checks at 16/24px root sizes verify that its boundary clears the title by at least 24px, including at 1024px. Existing sticky behavior and footer separation remain.

Validation: TypeScript/Vite build passed. The initial pertinent run passed 18/18 in 46.1s. After opening-height calibration, Process/theme/grid checks passed 5/5 in 13.4s, including narrower containers, 320–1920px widths, themes, root text enlargement, shared opening, stable title hover, CTA states, sticky exit and full-panel row boundaries. No unrelated renderer change or broader suite rerun was needed.

Four full-page Chromium captures are included: desktop 1440×1000 and mobile 390×844, light/dark, reduced motion, fonts ready. Opened desktop light/dark and mobile light after final calibration; mobile dark was inspected before calibration, which changes desktop only. Compare with the preserved [earlier v3 captures](../2026-10-22-v3/README.md). Human visual approval remains pending; browser coverage is Chromium/emulation only.
