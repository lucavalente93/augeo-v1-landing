# Polly — Process stage 1 — 2026-10-25

## Scope and authority

LV authorized implementation of critique item #1 on branch `polly` with Impeccable `layout` and `typeset`, combining a wide opening and smaller editorial headline. All website text/business-facing copy is provisional per LV; the new H2 “O seu contexto define o caminho.” is working copy. The existing hero, matrix, theme scaffold and commercial-channel dependency are unchanged. Closing copy/action behavior is unchanged.

Item #1 is implemented for review, **not visually approved**. Only after LV approves the entire stage, remind LV and revisit #2 (rules/type relationships), then #3 (closing narrative/hierarchy). These are not silently resolved or started. No commit, merge, push or publication.

## Design and implementation

The spatial thesis is opening → each title/explanation pair → existing closing. One full-width section opening replaces the permanent headline/ledger split. Desktop keeps two-column reading within each row; below 1024px each title and description stack in unchanged DOM order. No new stage labels, cards, indices or families.

Type roles retain local Hanken Grotesk: H2 caps at56px, weight620, line-height1.1 and measure32ch; ledger titles cap36px/620 with1.12 leading; desktop prose18–20px with1.55 leading and max48ch. Narrow prose remains at least16px. The header's broad measure lets the provisional line cross the old hero-column boundary at1440px, while narrow layouts wrap naturally.

At1440px the original H2 was68px and rows measured403.19/258.97/258.97px. New H2 is56px; rows measured187.19px each with current short copy. No fixed row height is imposed: a longer body expands its own row. Opening and row spacing have semantic custom properties; desktop outer inset remains48px and narrow inset20px.

The old sticky/scrub title travel was removed because the H2 now precedes the ledger in normal flow. This is required by item #1's structure, not completion of the independently gated #2. GSAP/useGSAP still owns cumulative row triggers and media cleanup. A correction after inspection recalculates the reading index during resize refresh so later mobile focus does not remain stale when returning to desktop. Hover cumulative focus and pointer-exit restoration are retained.

## Evidence

Baseline: [previous Process entry](../2026-10-25-impeccable-critique/desktop-light-process-entry.png).

Final captures, all opened and inspected:

- [Desktop light](polly-desktop-light-final.png)
- [Desktop dark](polly-desktop-dark-final.png)
- [Mobile light](polly-mobile-light-final.png)
- [Mobile dark](polly-mobile-dark-final.png)

The desktop captures show the reading focus at the opening, so future rows are intentionally defocused. Mobile captures show cumulative reading states. These are not permanent-contrast defect samples.

## Workflow and verification

Read installed Impeccable entry, layout, typeset and craft-floor; reused the already-loaded context directives rather than rerunning setup. Applied augeo-react-frontend and gsap-react. Independent assessment A (`/root/polly_design_assessment`) reviewed all layout/type questions with source selectors and baseline captures. Assessment B (`/root/polly_mechanical_assessment`) independently ran scoped pre-scans and inspected CSS; findings were held until A completed. Both pre-scans returned `[]`. Post-edit scoped scans and final confirmation after correction also returned `[]` for layout and type. A clean detector is a mechanical result, not visual approval.

- **Hierarchy/reading order:** final desktop inspection shows the opening first, then left titles/right explanations; mobile is H2 then each H3/p in document order. Computed role sizes distinguish56/36/20px at1440px. No CSS ordering or focus-order changes.
- **Grouping/rhythm/density:** each pair stays in its original li; opening spacing is more generous than row spacing. Removed the first-row403px allocation. Auto row sizing supports future copy rather than fixing dimensions to draft text.
- **Adaptation/extremes:** no document horizontal overflow at320,390,768,1024 or1440px. At768px pairs are stacked; at1024px they become two columns, body18px, no H2 transform. Tested a longer Portuguese H2 plus triple-length first body at390px with root font size200%; no horizontal overflow, heading774.30px and first row808.59px, showing content growth rather than clipping. Temporary text/styles were restored. This approximates text enlargement, not native browser zoom or comprehensive localization.
- **Interaction:** real hover of third row activated all cumulative rows. Pointer exit restored reading state. Final real scroll down/up with observable waits activated third row then retracted to `[true,false,false]`. Breakpoint cycling and resize-state correction confirmed. Reduced motion yielded all row opacities1 and H2 transform none. Browser errors output empty. Semantic ordered list/headings/links preserved.
- **Delivery:** local variable font/families and swap settings unchanged; no font-network optimization or new asset. Font readiness awaited for baseline measurement. No claim of measured CLS or fallback metric equivalence.
- **Build:** final `bun run build` passed TypeScript/Vite. JS489.70kB/165.77kB gzip; CSS32.23kB/7.27kB gzip. No legacy Playwright suite was run.
- **Bounded review:** initial desktop/mobile inspection, then one correction/confirmation cycle. Discarded a mid-theme-transition capture; an intermediate focus wait timed out because a later mobile reading index persisted across the breakpoint. The resize reconciliation fixed that demonstrated issue; final waits passed. Temporary intermediate captures stay in `/tmp`, not this evidence bundle.
- **Limits:** Chromium viewport emulation only; no physical touch device, other engine, screen-reader session, native zoom, full i18n/fallback/slow-network or production performance coverage. No gesture-critical control was added. No universal a11y certification or fresh critique score.

Named browser session `augeo-polly` closed. Vite preview remains on localhost5173 for LV's review (parent tool session10012; stop with Ctrl-C). No automatic handoff to broader polish: requested scope remains stage1, and #2/#3 require the explicit approval gate.
