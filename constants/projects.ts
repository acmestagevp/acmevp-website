// ──────────────────────────────────────────────────────────────
// Projects data — the single source of truth for all projects.
//
// To add or edit a project, just modify the `projects` array below.
// Each project has top-level metadata (slug, title, optional subtitle,
// thumbnail) plus an ordered `content` array of blocks that render
// top-to-bottom on the individual project page.
//
// Supported block types:
//   • video  — embedded YouTube or Vimeo player
//   • text   — heading + paragraph (great for case studies)
//   • image  — full or content-width image with optional caption
// ──────────────────────────────────────────────────────────────

// --- Content Block Types ---

export type VideoPlatform = "youtube" | "vimeo"

export interface VideoBlock {
	type: "video"
	platform: VideoPlatform
	videoId: string // e.g. "dQw4w9WgXcQ" (YouTube) or "76979871" (Vimeo)
	featured?: boolean // if true, video renders full-width & tall (video-primary pages)
	autoplay?: boolean // if true, video autoplays muted (default: false)
}

export interface TextBlock {
	type: "text"
	heading?: string // optional section heading
	body: string // paragraph text
}

export interface ImageBlock {
	type: "image"
	src: string // path to image under /public
	alt: string
	caption?: string // optional caption below the image
	fullWidth?: boolean // if true, image spans the full content width
}

export type ContentBlock = VideoBlock | TextBlock | ImageBlock

// --- Project Type ---

export interface Project {
	slug: string // URL-safe identifier, used in /projects/[slug]
	title: string // e.g. "Polica"
	subtitle?: string // e.g. "Wasted Me" — omit when only a title is needed
	thumbnail: string // path to thumbnail image under /public
	content: ContentBlock[] // ordered blocks rendered top-to-bottom
}

// --- Projects ---

export const projects: Project[] = [
	{
		slug: "polica-wasted-me",
		title: "Polica",
		subtitle: "Wasted Me",
		thumbnail: "/images/content-1-1.png",
		content: [
			{
				type: "video",
				platform: "youtube",
				videoId: "dQw4w9WgXcQ",
				featured: true,
			},
		],
	},
	{
		slug: "renewal-by-andersen",
		title: "Renewal by Andersen",
		subtitle: "A Window in Time",
		thumbnail: "/images/alpha-1-1.png",
		content: [
			{
				type: "video",
				platform: "vimeo",
				videoId: "76979871",
			},
			{
				type: "text",
				heading: "Behind the Project",
				body: "Renewal by Andersen partnered with ACME to create a cinematic spot that showcases the craftsmanship behind every window. Using our LED volume, we transported the talent into a variety of seasonal environments — all without leaving the stage.",
			},
			{
				type: "image",
				src: "/images/alpha-1-1.png",
				alt: "On-set still from the Renewal by Andersen shoot",
				caption: "LED wall in action during the shoot",
			},
		],
	},
	{
		slug: "case-study-alex-horner",
		title: "Case Study",
		subtitle: "Alex Horner",
		thumbnail: "/images/content-1-1.png",
		content: [
			{
				type: "text",
				heading: "Overview",
				body: "Director of Photography Alex Horner shares his experience working on the ACME volume wall. This case study explores how virtual production expanded creative possibilities while streamlining the shoot day.",
			},
			{
				type: "video",
				platform: "youtube",
				videoId: "dQw4w9WgXcQ",
			},
			{
				type: "image",
				src: "/images/content-1-1.png",
				alt: "Volume wall setup for the Alex Horner case study",
				fullWidth: true,
			},
		],
	},
	{
		slug: "bts-polica-wasted-me",
		title: "Behind the Scenes",
		subtitle: "Polica - Wasted Me",
		thumbnail: "/images/alpha-1-1.png",
		content: [
			{
				type: "video",
				platform: "youtube",
				videoId: "dQw4w9WgXcQ",
				featured: true,
			},
		],
	},
]
