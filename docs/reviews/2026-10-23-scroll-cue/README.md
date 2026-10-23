# Striped Shutter scroll cue — 2026-10-23

Luca authorized implementing the [Striped Shutter handoff](../2026-10-23-scroll-cue-handoff.md) with the small fixes from the review in the same session. This replaces the rail/pulse/node cue on `v3`; it is not creative approval.

## Fixes applied over the handoff

1. One keyframe set per element reads `var(--cue-rest)` / `var(--cue-anchor-rest)`; the invalid `:root.dark @keyframes` block was dropped. Colors come from `--foreground`/`--accent`, so system dark and the explicit `.dark`/`.light` toggle both apply.
2. Hover uses `animation: none` (a paused animation would freeze mid-wave over the hover opacity). Leaving hover restarts a fresh sweep.
3. Even sizes: slats 20/14/8/4 × 2 px, anchor 4 × 4 px, 5 px gaps. The 32 px stack sits 16 px from the top of the unchanged 36 × 63 px link, so every edge is on a whole pixel.
4. No `outline: none`; `:focus-visible` uses a 2 px accent outline, 4 px offset. No glow on the anchor.
5. Stagger comes from `animation-delay: calc(var(--i) * 150ms)`. Real timing: each layer peaks at 12 % (288 ms after its delay) and returns to rest by 28 % of 2.4 s; the anchor peaks at about 888 ms.
6. Resting slat opacity is 0.35 (handoff: 0.18/0.16); resting anchor is 0.7. Reduced motion: static 0.4/0.55/0.7/0.85 slats, solid accent anchor, no hover translate.

The link size stays 36 × 63 px, so hero layout is unchanged. The observer/visibility lifecycle in `ScrollCue.tsx` is unchanged.

## Validation

- `bun run build` passed.
- First targeted run: 30/31. One timing assertion failed on `449.99999999999994` ms from `calc()`; the assertion now rounds delays.
- Full `bun run test`: 33/33 (49.9 s; earlier recorded as 31 + 2 capture specs, corrected after `playwright test --list` showed 33 suite tests), Chromium only. New checks cover stagger order, whole-pixel geometry, rest values, hover, focus, both system themes and the explicit theme class. ResizeObserver warnings appeared in the dev server without failing assertions, as recorded before.
- Not covered: physical devices, other engines, real 1× display rendering, or WCAG 1.4.11 contrast measurement. Resting slats at 0.35 are about 2.4:1 on the light background; the 0.7 anchor carries the resting affordance.

## Captures (1440 × 900, Chromium, frames paused at fixed times)

- `light-hero-copy.png`, `dark-hero-copy.png`: the cue in context.
- `{light,dark}-rest.png` (1500 ms), `-peak-slat2.png` (438 ms), `-peak-anchor.png` (888 ms), `-reduced.png`.

Pending: Luca's visual evaluation. The infinite loop (WCAG 2.2.2) and the triangle/chevron design question from the review remain open.

## Iteration — 6 · 3 · 1 scaffold (approved concept) — 2026-10-23

Luca asked for a larger cue built from rows of segments: 6, then 3, then the orange anchor as the final 1. After two rounds of feedback (larger and sparser; compression only on hover), he **approved the concept and the triangle (6 · 3 · 1) composition**. He rejected the current visual execution: plain squares, hard-coded in CSS. **The current implementation is a scaffold.** It will be rebuilt later with better components; do not treat its sizes, colors or flat squares as final design.

Approved behavior:
- Rows of 6 and 3 segments plus the anchor, centered, funneling down.
- An orange light visits each layer in reading order (row 1 left to right, row 2, anchor), holding ~300 ms and moving every 220 ms, then rests on the anchor ~1.5 s. 5 s cycle. No automatic compression.
- Hover pulls each segment 35 % of the way toward the anchor over 0.9 s, released over 0.9 s on leave; the light keeps running.

Scaffold values (replaceable): segments 8 × 4 px, 6 px gaps, 14 px row gaps, 8 × 8 px anchor; 78 × 44 px drawing in an 80 × 63 px link (height unchanged, drawing starts on the 48 px axis). Resting opacity 0.35 / anchor 0.7. Reduced motion: static 0.45 / 0.7 rows and an accent anchor, no hover movement. `ScrollCue.tsx` computes each segment's `--dx`/`--dy` (distance to the anchor) and `--i` (light order) once at module load; the suspension effect is unchanged.

Captures in `6-3-1/` show an earlier 34 px intermediate step, kept for comparison; the approved scaffold frames are in the session's scratch strips, not committed.
