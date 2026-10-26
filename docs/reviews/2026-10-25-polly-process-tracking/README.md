# Polly — Process tracking option 2 — 2026-10-25

## Scope and status

LV selected option 2 from the three-option `shape` brief: titles and explanations find their reading alignment. Implemented on `polly` for visual review, within critique item #1. Earlier dirty files and evidence preserved. This choice does not approve the entire stage. Items #2 and #3 remain gated; no broader polish, closing rewrite, theme work, commit, merge, push or publication.

Current behavior and constraints belong to [specification §5](../../02-WEBSITE_SPEC.md#current-experiment--polly-critique-item-1--2026-10-25). The motion thesis is a pair of information blocks organizing into one readable row, handing attention to the next pair. Scroll reversal reverses that approach. Existing hover is feedback through cumulative focus, not a second movement. Budget: six transformed text blocks and existing opacity changes; no new library, loop, imagery, filter or layout animation. No production performance measurement is claimed.

## Workflow and checks

Reused this session's successful Impeccable context setup and resolved global context. Read `shape`, applicable established-world concept guidance, `animate` and `craft-floor`; applied `augeo-react-frontend` and `gsap-react`. The brief choice completed the pending shape decision; the routed animate work implements that local mechanism. No whole-surface concept roll or image comp was needed. The animate playbook's later polish handoff is deferred by LV's whole-item approval gate, not silently executed as critique item #2.

- `bun run build`: passed TypeScript/Vite; JS489.69kB/165.85kB gzip, CSS32.47kB/7.33kB gzip.
- `impeccable detect --json src/components/ProcessSection.tsx src/styles.css`: one run, `[]`; mechanical result, not visual approval.
- Named agent-browser session `augeo-polly-alignment`, Chromium: real scroll forward to step3 activated all rows; reversal restored `[true,false,false]`. Repeated on390px. Real pointer entry activated cumulative hover; exit restored scroll focus. An initial scroll assertion timed out because the stationary pointer entered the preceding row as the page moved beneath it; moving outside the viewport isolated the scroll state and the assertion passed. This was hover precedence, not a code correction.
- Widths320/390/768/1024/1440: no document horizontal overflow. Desktop-to-mobile transitions removed horizontal travel. Theme switching used the existing control; keyboard Tab from the section heading reached the desktop closing CTA.
- At1440×900, working rows432px; initial title/explanation shifts±95.5px retain24.05px between their boxes. Mid-approach sampled±46.30px; reading position0px, opacity1. Each desktop pair is fully stationary after reaching its reading range.
- Replaced first explanation temporarily with four repetitions and enlarged root text to200%, at1440 and390px. First row grew to713px/1055px respectively; no document/body horizontal overflow, desktop gap≥24px and mobile title/paragraph separation preserved. Restored text/font settings. This is text enlargement, not native zoom or full localization coverage.
- Switched reduced motion on and off during the same session: transforms removed, all row opacity1, desktop compact rows187px; restored motion for confirmation captures. Browser error log empty.
- Opened and inspected the captures below. One initial batched inspection and one confirmation pass; no UI correction loop. Initial mobile-light capture had followed the theme control to the top and was replaced with the actual reading state.

The old5173 Vite instance served stale CSS despite current component code; a fresh task-owned Vite server on5174 delivered both current files. Preview retained at `http://localhost:5174` for LV. Browser session closed at delivery; the old server was not stopped.

## Captures

- [Desktop first reading, light](desktop-light-reading.png).
- [Desktop first approach, dark](desktop-dark-approach.png).
- [Second approach, light](desktop-light-second-approach.png) → [second reading, light](desktop-light-second-reading.png).
- [Mobile reading, dark](mobile-dark-reading.png) · [mobile reading, light](mobile-light-reading.png).
- [Reduced motion](desktop-reduced-motion.png).

Future rows are intentionally defocused in motion-enabled captures. Screenshots complement live scrolling; they do not prove animation timing by themselves. No physical-device, other-engine, screen-reader, native-zoom or measured frame-time coverage. No legacy Playwright run or new critique score.
