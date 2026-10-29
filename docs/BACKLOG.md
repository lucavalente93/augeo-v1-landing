# Project backlog

Updated on 2026-10-28. Current state, latest delivery and queue only. Contract: [ORCHESTRATION](ORCHESTRATION.md). Earlier deliveries and evidence: [history](archive/EXECUTION_HISTORY.md).

## Latest delivery — ScrollCue downward overhaul & ShinyButton CTA — 2026-10-28

Delivered refined ScrollCue CRT aperture array and ShinyButton conversion CTA:
1. **Light Mode & Surface Alignment:** Aligned canvas background and `:root` / `.process-section` tokens to `#e6e6e2` matching the dark-grid light shade.
2. **ScrollCue Downward Cascade:** Replaced symmetric recoil cycle with a strictly downward sweep over a measured 6.00s cycle across 8 slats. Apex tip holds orange accent (`#ff482c`) with smooth cubic fade (`power2.out`, $t = 1.10\text{s} \to 2.50\text{s}$) into resting color. Preceding slats echo excitation in theme color with subtle micro-gravity upward pull (`y: -1.0px` to `-1.5px`). Hover spring decoupled to parent container (`.scroll-cue-field`), eliminating GSAP transform contention.
3. **Timeline Theme Resiliency:** Removed theme state dependency from GSAP lifecycle; timeline persists smoothly across rapid theme toggles with CSS variable `--cue-mix` and native `color-mix`, completely preventing timeline accumulation and segment collapse.
4. **ShinyButton CTA Integration:** Added `components/ui/shiny-button.tsx` with Houdini `@property` conic sweep, radial speckle and reduced-motion fallback. Integrated as final conversion CTA in `BrandImmersiveStage` with WhatsApp destination.

**Next action:** Define automated reception, human handoff owner and data handling for [AUG-22](http://127.0.0.1:3100/AUG/issues/AUG-22). The direct link does not complete that workstream. Brand-asset follow-up remains pending: re-generate monograms with 25% safe-zone margin and create the missing Light-mode inverted specular variant when Magnific quota renews for [AUG-27](http://127.0.0.1:3100/AUG/issues/AUG-27).

## Current product baseline — Process refinement and task synchronization

The Process grid remains scroll-drawn on desktop and static on narrow/reduced-motion layouts. Desktop “+” joints now share the grid color, without orange or blink; below1024px they are hidden. Current behavior: [specification §5](02-WEBSITE_SPEC.md#5-public-process). Prior experiments and lessons: [archived exploration](archive/EXECUTION_HISTORY.md#2026-10-27--superseded-process-exploration-archive), [dated evidence](archive/EXECUTION_HISTORY.md#2026-10-27--restrained-process-intersections) and [review bundle](reviews/2026-10-26-polly-process-lines/README.md).

`933424f` (`fix(process): quiet intersection markers across breakpoints`) is on local and remote `main`/`polly`; freshly verified on27/10. That documentation synchronization used `pclip`, reserved for Paperclip/bridge tests; [branch boundary](ORCHESTRATION.md#paperclip-test-branch--pclip). The WhatsApp change is prepared on `main` with commit and push authorized by Luca. The delivered Process refinement passed build/diff checks and Chromium desktop token matching in both themes plus390px hidden markers/retained grid/no overflow. No new browser/build run was needed for that documentation-only synchronization. Vercel success was verified for preceding `3e7cb3d`; no latest-deployment claim.

**Next action / review authority:** [AUG-12](http://127.0.0.1:3100/AUG/issues/AUG-12) remains `in_review` for LV's evaluation of the entire critique item #1. Git promotion does not close this gate. Only after full approval, remind/revisit [#2 / AUG-19](http://127.0.0.1:3100/AUG/issues/AUG-19), then [#3 / AUG-20](http://127.0.0.1:3100/AUG/issues/AUG-20). Their creation records pending work; it does not authorize execution.

Paperclip synchronization is complete: current Process review and all pending workstreams are linked below; original briefs and superseded exploration are preserved in their existing historical stores. [Synchronization evidence](archive/EXECUTION_HISTORY.md#2026-10-27--quiet-marker-promotion-and-paperclip-reconciliation).

## Current state

Paperclip owns task state. This essential source is a linked index and latest-delivery summary, not an independent queue. Current requirements are in the registered [specification](02-WEBSITE_SPEC.md), [Hero](HERO.md) and [workflow](WORKFLOW.md); historical learning/evidence stays in the existing archive/review system, navigable through derived Obsidian views. Read [ORCHESTRATION](ORCHESTRATION.md#current-work-and-historical-knowledge) for source access and reconciliation.

- Hero/matrix identity and intentional cumulative Process focus remain preserved. Dark/light stays a scaffold; copy is provisional.
- WhatsApp Business direct contact is connected through both conversion CTAs; automation and human handoff remain unconfigured. See [specification §6](02-WEBSITE_SPEC.md#6-sales-intake-and-form).
- Earlier pilots, historical UI studies and previous branch experiments are evidence, not current implementation instructions. Their human evaluations remain separate.

## Priority continuity - agent architecture

Live Paperclip query on27/10 confirmed [AUG-13](http://127.0.0.1:3100/AUG/issues/AUG-13) in `backlog`, unassigned; [AUG-8](http://127.0.0.1:3100/AUG/issues/AUG-8) `blocked`; [AUG-9](http://127.0.0.1:3100/AUG/issues/AUG-9), [AUG-5](http://127.0.0.1:3100/AUG/issues/AUG-5) and [AUG-6](http://127.0.0.1:3100/AUG/issues/AUG-6) `in_review`; [AUG-7](http://127.0.0.1:3100/AUG/issues/AUG-7) in `backlog`, unassigned. Original results/impediments were preserved, not resolved in bulk. Historical pilot findings are in [history](archive/EXECUTION_HISTORY.md#piloto-comparativo-dos-pontos-34--2026-10-18). No executor was started by synchronization.

## Queue by workstream

Status below is a27/10 snapshot; follow the ticket for current state. Other pending tickets remain unassigned `backlog`; AUG-27 is explicitly released to Antigravity at Medium. Follow-ups retain their explicit approval dependencies. Product work requires its own scoped request/assignment.

| Workstream | Paperclip task | Canonical source / next dependency |
| --- | --- | --- |
| Process #1 | [AUG-12](http://127.0.0.1:3100/AUG/issues/AUG-12), `in_review` | [Specification §5](02-WEBSITE_SPEC.md#5-public-process); full LV review pending. |
| Process #2 | [AUG-19](http://127.0.0.1:3100/AUG/issues/AUG-19) | Rules/type relationships; only after full #1 approval. |
| Process #3 | [AUG-20](http://127.0.0.1:3100/AUG/issues/AUG-20) | Closing narrative/hierarchy; after #1 and #2. |
| Brand imagery / layout exploration | [AUG-27](http://127.0.0.1:3100/AUG/issues/AUG-27) | [Asset inventory and brief](02-WEBSITE_SPEC.md#3d-brand-imagery-exploration--2026-10-27); analyze on `pclip`, return options before UI implementation. |
| Documentation | [AUG-26](http://127.0.0.1:3100/AUG/issues/AUG-26) | Review shared output procedure/consolidation; IDE parity remains unverified. |
| Agent architecture | [AUG-13](http://127.0.0.1:3100/AUG/issues/AUG-13) and linked pilots above | [ORCHESTRATION](ORCHESTRATION.md); Gatekeeper unexecuted and historical evaluations pending. |
| Hero | [AUG-21](http://127.0.0.1:3100/AUG/issues/AUG-21) | [HERO](HERO.md#current-block-plan); reconcile block2, do not advance deferred blocks. |
| Landing / intake | [AUG-22](http://127.0.0.1:3100/AUG/issues/AUG-22) | [Specification §6](02-WEBSITE_SPEC.md#6-sales-intake-and-form); direct channel connected; define automation, conversation and human handoff. |
| Technical cleanup | [AUG-23](http://127.0.0.1:3100/AUG/issues/AUG-23) | Evaluate pixel, cue scope, legacy specs and assets; no removals approved. |
| Figma | [AUG-24](http://127.0.0.1:3100/AUG/issues/AUG-24) | [HERO proposals](HERO.md#figma-proposals---independent-workstream); verify PNG suitability/provenance before resuming import. |
| Publication | [AUG-25](http://127.0.0.1:3100/AUG/issues/AUG-25) | [Technical baseline](02-WEBSITE_SPEC.md#10-implementation); canonical/redirect/metadata decisions pending, Vercel Pro postponed. |
