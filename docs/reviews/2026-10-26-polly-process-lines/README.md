# Process scroll-drawn lines — 2026-10-26

Local `polly` implementation of the LV-confirmed direction, pending visual approval of critique item #1. Current decisions: [specification](../../02-WEBSITE_SPEC.md#scroll-drawn-line-direction--lv-2026-10-26).

## Verification

- `bun run build`: passed after final endpoint correction.
- Impeccable detector: `[]` on the implementation pass.
- Named agent-browser Chromium sessions: widths320/390/768/1024/1440; no document overflow or text/connector overlap; stationary text transforms throughout; static strokes below1024px; desktop transforms retract on reverse scroll.
- Theme captures and desktop/mobile/reduced-motion paths inspected. Fourfold first paragraph and200% root font at1440/390: no horizontal overflow or connector overlap. Existing cumulative hover/pointer-exit handlers retained; sampled pointer probe hit the first row only, so it does not independently establish multi-step hover coverage.
- Final endpoint confirmation: maximum scroll1797px, all six transforms identity. Clamped endpoint replaces refresh-time max-scroll calculation.
- No browser errors reported. No Playwright suite, physical devices, other engines or production frame-time benchmark. Transform-only drawing and six segments limit added work but do not prove a device performance budget.

## Captures

- [Desktop dark](desktop-dark.png)
- [Desktop final drawing](desktop-end.png)
- [Desktop light](desktop-light.png)
- [Mobile static](mobile-static.png)
- [Desktop reduced motion](desktop-reduced.png)

The initial files `1440-dark.png` and `390-dark.png` captured the light theme despite their names; kept as intermediate evidence, not theme proof. Final desktop-end capture was replaced after the endpoint correction. Older checks do not validate later changes.

## Superseding correction — distributed grid

LV rejected the edge-only topology shown above. Current implementation restores six distributed vertical columns, interrupted around measured text bands, and full-width horizontal row boundaries:39 independently addressable segments total. The2% left-edge line stays omitted; the opening stays clear. Row-local semantic endpoints define upper/lower/boundary phases. Mobile uses three static columns; reduced motion is static.

Fresh Chromium checks after correction: widths1920/1440/1024/768/390/320, no document overflow, all text bounds inside their protected bands; desktop reverse scroll retracts upper segments; mobile and reduced motion leave transforms unset. Fourfold first paragraph at200% root font passed overflow checks at1440/390. Build passed; detector returned[]. Browser error output empty. Physical-device performance is unmeasured; geometry reads occur only during setup/refresh. Grid captures supersede edge-only images: [desktop](grid-correction-dark.png), [mobile](grid-correction-mobile.png). Initial capture attempts during theme/breakpoint refresh landed on the hero and were replaced after layout settled.
