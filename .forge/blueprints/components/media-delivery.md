# Component Blueprint: Media Delivery

> A reusable capability composed of runtime components. Feature-agnostic: any content surface can play catalog video through this system.

## Capability Summary

Video playback for project content: a typed source model (`local-fixture` | `mux`), a client-side `VideoBlock` that renders next-video's player, a local placeholder fixture for draft work, and the next-video build records/type shim that make local sources importable. Production media plays from Mux by playback ID; drafts use the placeholder fixture until approved media replaces it.

## Document status

- **Status:** `approved`
- **Owner:** John Wildauer
- **Last updated:** 2026-09-18
- **Containers:** Next.js Web App ([`../containers/nextjs-web-app.md`](../containers/nextjs-web-app.md))

## Core Components

```component
name: VideoBlock
container: Next.js Web App
responsibilities:
	- Client component rendering next-video's <Video> for a ProjectVideoSource
	- Featured vs. standard framing (full-bleed viewport height vs. aspect-video)
	- Accessible title + screen-reader status describing the player
	- Autoplay only when configured, forced muted + playsInline
```

```component
name: next-video pipeline
container: Next.js Web App
responsibilities:
	- withNextVideo wrapper in next.config.ts
	- videos/*.mp4.json records + video.d.ts type shim enabling local fixture imports
```

`VideoBlock` receives a `ProjectVideoSource` from the catalog (via `ProjectContent`); for `local-fixture` sources it imports the placeholder record statically; for `mux` sources it passes the playback ID to next-video's Mux-backed player.

## System Contracts

### Key Contracts

- **Source union:** `LocalVideoSource` is constrained to `path: "/videos/placeholder.mp4"` and `temporary: true` — the readiness checker rejects any other local path. `MuxVideoSource` playback IDs must match `/^[A-Za-z0-9_-]+$/`.
- **Autoplay invariant:** `autoplay` implies muted and playsInline; controls are always visible.
- **Featured framing:** featured videos render full-bleed (`md:h-[85vh]`); standard videos render at `aspect-video`.

### Integration Contracts

- Catalog entries own the source data ([`constants/projects.ts`](../../../constants/projects.ts)); `VideoBlock` never hardcodes media.
- The readiness report ([`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts)) validates playback-ID shape and fixture paths at build time.
- Mux hosts all production media; the site never bundles production video.

## Architecture Decision Records

### ADR-001: Mux for production media, local fixture for drafts

**Context:** Project films are large; drafts need a placeholder while rights/approvals are pending.

**Decision:** Production videos play from Mux by playback ID embedded in the catalog; draft content uses a single versioned local placeholder fixture, explicitly typed as temporary.

**Consequences:** No large media in the repository; draft and production share one rendering path; replacing a fixture is a catalog data change, not a component change.
