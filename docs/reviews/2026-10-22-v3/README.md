# Audit rereading implementation — v3 — 2026-10-22

**Superseded Process treatment:** Luca rejected the datum/stage labels and independent left grid. See the [subsequent correction](../2026-10-22-process-correction/README.md); the original evidence below records the initial delivery.

Implemented the supplied [technical rereading](../../archive/2026-10-22-augeo-audit-releitura.md), items 4.1–4.7 and 4.9. Item 4.8 remains a direction decision: lettering still follows the desktop H1 center; no metadata bar was introduced. `#entrada` remains unimplemented.

## Result

- Native desktop continuation link now contains a 1×52 px rail, 20 px descending pulse and 5×5 px node, with 4 px gap in the existing 36×63 px reserved area. Its 2.4 s CSS cycle is a visual analogue, independent of canvas physics. Existing observer/visibility cleanup and elapsed-time suspension remain intact. Reduced motion is static; mobile stays hidden.
- Removed the redundant lead; the first H3 shares the H2 opening through CSS spacing tokens. Indexed stage labels use local IBM Plex Mono Medium 500, 12 px/1.25. Labels can wrap when space is limited; decorative rules can shrink.
- Panel-wide vertical grid retains its original desktop module/origin. Horizontal lines and nodes are clipped to the left column across the complete panel; right-side horizontals come from structural borders. Mobile uses thirds with horizontal decoration only in the opening. Dark node opacity remains separately calibrated; light uses 0.14.
- Fine-pointer hover uses a subtle cell background, 2 px orange inset, stronger rule and foreground label. No title shadow, tracking shift, moving label or rotating node; steps remain semantic content without fabricated controls.
- Both light CTAs use orange/`#111` hover. Hero supporting text and closing note use `text-wrap: pretty`, retaining 34ch and starting at 48ch respectively. At desktop reference size, “operação digital.” stays together; the closing note occupies two lines. No fixed line breaks.

## Evidence

Eight PNGs in this directory use identical before/after settings: Chromium, full-page, light/dark, reduced motion, desktop 1440×1000 and mobile 390×844, after `document.fonts.ready`. Baseline application revision: `5e46224456f8212f5437217c8e7c1d6627e7e462` (existing documentation edits were present). After captures represent this delivery's application changes. Reviewed both light before captures and all four after captures. Static captures demonstrate composition, not interactive behavior or human creative approval.

Validation:

- `bun run build`: passed (TypeScript and Vite).
- Existing migrated suite: **30/30 passed**, 52.7 s.
- Additional Process review tests: **2/2 passed**, 8.6 s (final focused rerun: 8.7 s), covering both themes, actual font readiness, opening alignment, stable hover, CTA hover/press/focus, sticky exit and responsive bounds at root sizes 16/24 px.
- Coverage includes 1440×1000, 1440×900, 1024×600, 1023×768, 390×844 and 320×740, narrower containing blocks, mobile touch, normal/reduced motion, native continuation activation by keyboard, offscreen pause/resume, synthetic hidden-document pause/resume, unchanged canvas identity and lettering interaction/return.
- Initial sandbox browser startup was denied; initial suite startup hit `listen EPERM`. Approved execution and subsequent unrestricted access completed verification. Vite reported `ResizeObserver loop completed with undelivered notifications` during resize-heavy runs; all assertions passed. No isolated cause or new fix is claimed.
- React review: applied `augeo-react-frontend` and the relevant `vercel:react-best-practices` checklist. No new state, listeners, animation dependency or renderer change; the existing setup/cleanup pair is preserved. No Impeccable conception workflow or subagent execution was required.

Coverage limits: Chromium/emulation only; enlarged root font is not native zoom. No physical-device/other-engine verification or hardware profiling. Visual approval, lettering-centering direction and the intake form remain pending. GitHub branch delivery does not establish production publication.

Font provenance and license: [asset notes](../../../src/assets/fonts/README-IBMPlexMono.md).
