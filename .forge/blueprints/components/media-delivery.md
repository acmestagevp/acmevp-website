# Component Blueprint: Media Delivery

> A reusable capability composed of runtime components. Feature-agnostic: any content surface can play catalog video through this system.

## Capability Summary

Video playback for project content: a typed source model (`local-fixture` | `mux` | `youtube`), a client-side `VideoBlock` that renders next-video's player for local/Mux sources and a privacy-enhanced YouTube iframe for `youtube` sources, a local placeholder fixture for draft work, and the next-video build records/type shim that make local sources importable. Hostable production media plays from Mux by playback ID; media that is public on client YouTube channels but cannot be hosted directly plays via the `youtube-nocookie.com` embed; drafts use the placeholder fixture until approved media replaces it.

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
	- Featured vs. standard framing (featured renders at aspect-video with width capped by the viewport height and centered, inset by the page gutter; standard at aspect-video within a wide wrapper)
	- Mux poster derived from the playback ID (`image.mux.com/{playbackId}/thumbnail.jpg`) shown before playback
	- YouTube sources: privacy-enhanced iframe embed (`youtube-nocookie.com/embed/{videoId}`) with native controls, no poster (YouTube supplies its own thumbnail), and no autoplay parameters, filling the same frame as the next-video player
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

`VideoBlock` receives a `ProjectVideoSource` from the catalog (via `ProjectContent`); for `local-fixture` sources it imports the placeholder record statically; for `mux` sources it passes the playback ID to next-video's Mux-backed player; for `youtube` sources it renders the `youtube-nocookie.com` iframe directly (next-video is bypassed).

## System Contracts

### Key Contracts

- **Source union:** `LocalVideoSource` is constrained to `path: "/videos/placeholder.mp4"` and `temporary: true` — the readiness checker rejects any other local path. `MuxVideoSource` playback IDs must match `/^[A-Za-z0-9_-]+$/`. `YouTubeVideoSource` video IDs must match `/^[A-Za-z0-9_-]{11}$/` (11 characters, per YouTube's canonical ID shape).
- **Autoplay invariant:** `autoplay` implies muted and playsInline; controls are always visible.
- **Featured framing:** featured videos render at true 16:9 (`aspect-video` at all breakpoints, no letterbox bars) with width capped at `min(100%, calc((100svh - 8rem) * 16 / 9))` and centered via `mx-auto`, so the film plus its section padding fits the viewport with even spacing; the global page gutter (via `ContentWrapper variant="full"` in `ProjectContent`) remains the minimum side margin and side margins may grow slightly on short viewports. Standard videos render at `aspect-video` within a wide wrapper.
- **Poster:** Mux sources pass `poster={`https://image.mux.com/${playbackId}/thumbnail.jpg`}` to next-video's `<Video>`; local-fixture sources pass no poster (the placeholder renders its own first frame); `youtube` sources pass no poster (YouTube's iframe shows its own thumbnail).
- **YouTube embed:** `youtube` sources render `<iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`}>` with the standard YouTube capability `allow` list and `allowFullScreen`, native controls, an accessible `title`, and the same `sr-only` status paragraph as the players; no autoplay parameters are appended.

### Integration Contracts

- Catalog entries own the source data ([`constants/projects.ts`](../../../constants/projects.ts)); `VideoBlock` never hardcodes media.
- The readiness report ([`utils/projectReadiness.ts`](../../../utils/projectReadiness.ts)) validates playback-ID shape and fixture paths at build time.
- Mux hosts all hostable production media; the site never bundles production video. Media that is public on a client's YouTube channel but cannot be hosted directly plays via the privacy-enhanced YouTube embed.

## Architecture Decision Records

### ADR-001: Mux for hostable production media, YouTube embed for client-channel-only media, local fixture for drafts

**Context:** Project films are large; drafts need a placeholder while rights/approvals are pending. Some client media is public only on the client's YouTube channel and cannot be hosted directly.

**Decision:** Hostable production videos play from Mux by playback ID embedded in the catalog; client-channel-only media plays via the privacy-enhanced YouTube embed by video ID; draft content uses a single versioned local placeholder fixture, explicitly typed as temporary.

**Consequences:** No large media in the repository; all three kinds share one rendering frame and accessibility affordances; replacing a fixture is a catalog data change, not a component change. YouTube embeds depend on the client channel remaining public.
