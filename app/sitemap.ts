import type { MetadataRoute } from "next"
import { projects } from "@/constants/projects"

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://acmevp.com"

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: base,
			lastModified: new Date(),
		},
		{
			url: `${base}/projects`,
			lastModified: new Date(),
		},
	]

	const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${base}/projects/${project.slug}`,
		lastModified: new Date(),
	}))

	return [...staticRoutes, ...projectRoutes]
}
