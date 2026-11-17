// ──────────────────────────────────────────────────────────────
// Projects data — the single source of truth for all projects.
//
// Production media plays from Mux by playback ID; media that is public
// on client YouTube channels but cannot be hosted directly plays via
// the privacy-enhanced youtube-nocookie.com embed.
// ──────────────────────────────────────────────────────────────

export type VideoPlatform = "local" | "mux" | "youtube"

export type ProjectPublicationState = "fixture-valid" | "indexable" | "publishable"

export interface ProjectSeo {
	/** Approved launch copy only; the first draft uses route fallback metadata. */
	description?: string
	/** Approved absolute or public-relative social preview only. */
	socialImage?: string
	publishedAt?: string
	modifiedAt?: string
}

export interface LocalVideoSource {
	kind: "local-fixture"
	path: "/videos/placeholder.mp4"
	temporary: true
}

export interface MuxVideoSource {
	kind: "mux"
	playbackId: string
	temporary?: false
}

export interface YouTubeVideoSource {
	kind: "youtube"
	/** 11-character YouTube video ID from the client's public channel. */
	videoId: string
	temporary?: false
}

export type ProjectVideoSource = LocalVideoSource | MuxVideoSource | YouTubeVideoSource

export interface VideoBlock {
	type: "video"
	source: ProjectVideoSource
	featured?: boolean
	autoplay?: boolean
}

export interface TextBlock {
	type: "text"
	heading?: string
	body: string
}

export interface ImageBlock {
	type: "image"
	src: string
	alt: string
	caption?: string
	fullWidth?: boolean
	aspectRatio?: "video" | "square" | "portrait" | "intrinsic"
	fit?: "cover" | "contain"
}

export type ContentBlock = VideoBlock | TextBlock | ImageBlock

export interface Project {
	slug: string
	title: string
	subtitle?: string
	thumbnail: string
	content: ContentBlock[]
	publicationState?: ProjectPublicationState
	seo?: ProjectSeo
}

export const projects: Project[] = [
	// Client-channel YouTube sources: this media is public on the clients'
	// YouTube channels but cannot be hosted directly, so it plays via the
	// privacy-enhanced youtube-nocookie.com embed.
	{
		slug: "sec-player",
		title: "Soaring Eagle Casino",
		subtitle: "Player",
		thumbnail: "/images/projects/sec-player.jpg",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "SJBVfRVmHVkZWFFF1mIKq2SLziSrJhfV2GIXEFYRQbs" },
				featured: true,
			},
		],
	},
	{
		slug: "sec-weekend",
		title: "Soaring Eagle Casino",
		subtitle: "Weekend",
		thumbnail: "/images/projects/sec-weekend.jpg",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "01YXeOJP02egY7Hs9C41su7ElVmMxdlY02sprMkJ4MFVS00" },
				featured: true,
			},
		],
	},
	{
		slug: "mn-lottery-jumanji",
		title: "MN Lottery",
		subtitle: "Jumanji Campaign",
		thumbnail: "/images/projects/mnl-jumanji.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "youtube", videoId: "ouIYp23CqUs" },
				featured: true,
			},
		],
	},
	{
		slug: "cadillac-future-iq",
		title: "Cadillac",
		subtitle: "Future IQ",
		thumbnail: "/images/projects/future-iq.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "b2V5InHCmI3DAvCVP00HJBuiMuFk7ETeDpT02QMFStzt00" },
				featured: true,
			},
			// {
			// 	type: "text",
			// 	heading: "Credits",
			// 	body: "Director: Tony Oberstar. Cinematographer: Marcus Taplin.",
			// },
		],
	},
	{
		slug: "cadillac-future-iq-behind-the-scenes",
		title: "Cadillac",
		subtitle: "Future IQ: Behind the Scenes",
		thumbnail: "/images/projects/future-iq-bts.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "iNcr86G02a02GAYDkpPc5iTUhiyVJUoKr3wOLTWxkjQNs" },
				featured: true,
			},
			// {
			// 	type: "text",
			// 	heading: "Credits",
			// 	body: "Produced by Nick Leisenheimer.",
			// },
		],
	},
	{
		slug: "polica-wasted-me",
		title: "Polica",
		subtitle: "Wasted Me",
		thumbnail: "/images/projects/polica-wasted-me.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "900Nx01jFo6OBmMcKZsL27M0100LmVTs8MRflGkVSLgxW00w" },
				featured: true,
			},
			// {
			// 	type: "text",
			// 	heading: "Credits",
			// 	body: "Directed by Ghost+Cow. Cinematographer: Steve Speers.",
			// },
		],
	},
	{
		slug: "a-window-in-time-renewal-by-andersen",
		title: "A Window in Time",
		subtitle: "Renewal by Andersen",
		thumbnail: "/images/projects/rba-awit.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "mux", playbackId: "w100Y5AWF5YqtdhUc5O6901hBgeDn2UIml9oST2At9iqE" },
				featured: true,
			},
			// {
			// 	type: "text",
			// 	heading: "Credits",
			// 	body: "Director: Kat Rapheal. Cinematographer: Alex Horner.",
			// },
		],
	},
	{
		slug: "und-lead-your-own-way",
		title: "University of North Dakota",
		subtitle: "Lead Your Own Way",
		thumbnail: "/images/projects/und-lyow.png",
		publicationState: "publishable",
		content: [
			{
				type: "video",
				source: { kind: "youtube", videoId: "skJNJLSk9KA" },
				featured: true,
			},
		],
	},
]
