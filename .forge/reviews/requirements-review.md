# Requirements Review — Initialization

- **Date:** 2026-09-18
- **Reviewer:** fresh-context requirements reviewer (dispatched session)
- **Artifacts reviewed:** `product-overview.md`, `features/marketing-pages.md`, `features/projects-listing.md`, `features/project-detail.md`, `features/contact-inquiry.md`, `features/site-chrome.md`, `features/seo-discoverability.md`
- **Result:** `pass` (one warning and three notes; no blockers. Warning acceptable with owner acknowledgment, or fix wording before blueprinting.)

## Findings

### F-1 — Warning: "Every page shall carry … canonical URL" overstates actual behavior

- **Artifact/section:** `seo-discoverability.md`, REQ-SEO-003 / AC-SEO-003.1; also echoed in `product-overview.md` ("SEO plumbing exists: per-page metadata, canonical URLs …").
- **Severity:** warning (unsupported claim as written)
- **Evidence:** Only the root layout and project detail pages define canonicals. `app/layout.tsx:32-34` sets `alternates.canonical: "https://acmevp.com"` for the whole site, and `app/projects/[slug]/page.tsx:41` sets a per-project canonical. However, `/stage`, `/services`, `/projects`, and `/contact` export no metadata of their own (`app/stage/page.tsx`, `app/services/page.tsx`, `app/projects/page.tsx` contain no `metadata`/`generateMetadata` export; `app/contact/page.tsx` is a client component and cannot export metadata). Those four routes therefore inherit the **home** URL as their canonical — i.e., four pages share the root canonical rather than each carrying its own canonical URL. The same pages also inherit the home OpenGraph/Twitter entry, which does satisfy AC-SEO-003.2 but means their social previews are generic, not page-specific.
- **Recommendation:** Either (a) soften AC-SEO-003.1 to match reality — e.g., "every page shall carry a title and description, with page-specific canonical URLs on the home page and project pages; other routes inherit the site canonical" — or (b) note the missing per-route canonicals as a known content/SEO gap for a future initiative. As written, a tester verifying "every page carries its own canonical" would fail four of six routes.
- **Required next state:** `draft` (reword to match observed behavior, or record the gap) — then `approved`.

### F-2 — Note: Contact AC-CONTACT-003.2 omits how the subject field is used

- **Artifact/section:** `contact-inquiry.md`, REQ-CONTACT-003 / AC-CONTACT-003.2.
- **Severity:** note (incomplete but not inaccurate)
- **Evidence:** `utils/sendEmail.ts:19` uses the submitted `subject` as the email's subject line (`subject: \`${subject}\``), while AC-CONTACT-003.2 only states the email "shall include the submitted name, email, and message." The subject's role is unspecified in the requirement.
- **Recommendation:** Add to AC-CONTACT-003.2: "…with the submitted subject used as the email subject line." Optional precision, not a correctness problem.
- **Required next state:** `approved` as-is; rewording optional.

### F-3 — Note: Footer tel link uses a display-formatted phone number

- **Artifact/section:** `site-chrome.md`, AC-CHROME-002.1 ("email, and phone").
- **Severity:** note
- **Evidence:** `components/ui/Footer.tsx:33` uses `href="tel:(612) 385-0488"`, which includes parentheses and a space — technically not a well-formed `tel:` URI (RFC 3966 expects `tel:+16123850488` or digits only). `app/contact/page.tsx:54` uses `tel:6123850488`, which is fine. The requirement just says "phone," so it is not violated; this is an implementation-quality observation.
- **Recommendation:** No requirements change needed for initialization. If site-chrome is ever revised, the acceptance criterion could specify a machine-dialable `tel:` URI form, which would surface this as a fix candidate.
- **Required next state:** `approved`.

### F-4 — Note: Sitemap static-route `lastModified` is a hardcoded date, not "approved dates"

- **Artifact/section:** `seo-discoverability.md`, REQ-SEO-002 (context for AC-SEO-002.3).
- **Severity:** note (spec is accurate; potential tester surprise)
- **Evidence:** `app/sitemap.ts:6` hardcodes `siteLastModified = new Date("2026-08-12T00:00:00.000Z")` for all five static routes. AC-SEO-002.3 correctly says _project_ entries use approved modified/published dates (`app/sitemap.ts:21-25`), so the requirement matches the code. A tester should just be aware static routes get a fixed date.
- **Recommendation:** Optionally note in REQ-SEO-002 that static routes use a site-level constant date. No change required.
- **Required next state:** `approved`.

## Verified (no findings — spot-check evidence)

Claims verified against code, all supported:

- **Routes:** six routes exist as documented (`app/page.tsx`, `app/stage/page.tsx`, `app/services/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`, `app/contact/page.tsx`).
- **Catalog:** four publishable projects with Mux playback IDs (`constants/projects.ts:70-147`); publication-state model `fixture-valid | indexable | publishable` (`constants/projects.ts:10`); text/image block types defined though currently unused (`constants/projects.ts:42-56`).
- **Marketing pages:** home hero with studio name + "Virtual Production" line and intro copy (`app/page.tsx:23-32`); Stage/Services teaser sections linking to their pages (`app/page.tsx:45, 90`); "Trusted By" logo row from `constants/logos.ts` (`app/page.tsx:67-77`); testimonial region (`app/page.tsx:112`); closing CTA to `/contact` (`app/page.tsx:123-128`). Stage page hero with 60 ft / 16.5 ft / 2.5° curve (`app/stage/page.tsx:34-36`) and all six named spec sections with copy+image+spec list (`app/stage/page.tsx:44-190`); Floorplan PDF download (`app/stage/page.tsx:151-158`); closing CTA. Services page hero and four active service sections — Studio, Gear, Virtual Art Department, Post-Production (`app/services/page.tsx:40-141`); Studio section links to `/stage` (`app/services/page.tsx:42`); commented-out Education section correctly documented as out of scope (`app/services/page.tsx:102-121`).
- **Projects listing:** one card per catalog project (`app/projects/page.tsx:25-33`); thumbnail/title/subtitle per card (`components/ProjectCard.tsx:37-50`); links to `/projects/${slug}` with accessible label (`components/ProjectCard.tsx:33-35`); responsive grid 1/2/3 columns (`app/projects/page.tsx:24`); lazy loading (`components/ProjectCard.tsx:44`); hover/focus feedback (`components/ProjectCard.tsx:39, 47`); scroll animation via AnimateIn with reduced-motion support.
- **Project detail:** title heading + optional subtitle (`app/projects/[slug]/page.tsx:78-86`); blocks rendered in catalog order (`components/project/ProjectContent.tsx:37-41`); 404 on unknown slug (`app/projects/[slug]/page.tsx:68-70`); lone-video auto-feature (`components/project/ProjectContent.tsx:16, 41`); Mux playback with controls (`components/project/VideoBlock.tsx:46-55`); featured full-bleed at `md:h-[85vh]` (≈ viewport-scale, `components/project/VideoBlock.tsx:24-25`); autoplay muted + playsInline (`components/project/VideoBlock.tsx:50-51`); local-fixture placeholder path (`components/project/VideoBlock.tsx:34-44`); sr-only status + accessible title (`components/project/VideoBlock.tsx:30-32, 42`); image block aspect/fit/caption/lazy/full-width (`components/project/ImageBlock.tsx:15-49`); "Discuss a project" CTA and "Back to Projects" link (`app/projects/[slug]/page.tsx:98-107`); static generation via `generateStaticParams` (`app/projects/[slug]/page.tsx:14-18`).
- **Contact:** mailto and tel links (`app/contact/page.tsx:46, 54`); four required fields with associated labels (`app/contact/page.tsx:74-124`); `type="email"` validation (`app/contact/page.tsx:87`); Resend server action to `info@acmevp.com` with CC recipients and no-reply sender (`utils/sendEmail.ts:14-18`); reply-to visitor email (`utils/sendEmail.ts:18`); disabled/"Sending..." submit state (`app/contact/page.tsx:10-20`); success confirmation panel in a live region (`app/contact/page.tsx:63-69`); commented-out project-type dropdown correctly out of scope; failure-state and escaping gaps correctly recorded as known risks, not baseline requirements.
- **Site chrome:** fixed nav on all pages via root layout (`app/layout.tsx:69`); five nav items with Contact styled as CTA (`constants/nav.ts:1-22`, `components/ui/NavBar.tsx:72`); `aria-current` indication incl. sub-route prefix matching (`components/ui/NavBar.tsx:74`); scrolled background/border at 120px threshold (`components/ui/NavBar.tsx:18, 50-55`); mobile menu closing on Escape (with focus return), outside pointerdown, and resize to ≥1024px (`components/ui/NavBar.tsx:22-43`); footer with studio name, Maps-linked address, email, phone, nav links, copyright (`components/ui/Footer.tsx:14-51`); aria-hidden background glow+noise (`components/decoration/Background.tsx:5-8`); reduced-motion handling in AnimateIn (`components/decoration/AnimateIn.tsx:22-33`) and the testimonial marquee (`components/Testimonials.tsx:12-21`); marquee slow-on-hover (`components/Testimonials.tsx:47-51`); serif/sans font pairing (`app/layout.tsx:8-20`); title template "%s – ACME Virtual Production" with default (`app/layout.tsx:25-28`).
- **SEO:** robots allow-all with sitemap link (`app/robots.ts:4-12`); sitemap with five static routes + indexable-only projects (`app/sitemap.ts:9-28`); noindex for fixture/unknown projects (`app/projects/[slug]/page.tsx:29, 37, 55`); readiness checks match AC-SEO-005.1–005.3 item-for-item against `utils/projectReadiness.ts:42-78` (including publishable-without-social-preview gate at lines 76-78); server-context filesystem checks (`utils/projectReadiness.ts:1, 26-27`).

## Verdict

The requirements are clear, coherent, and overwhelmingly testable: acceptance criteria use observable, verifiable statements ("shall render X", "shall link to /contact") rather than implementation prescriptions, and every artifact I spot-checked is grounded in the code, including fine details (85vh featured video, 120px scroll threshold, Escape/outside-click/resize menu closing, readiness gate taxonomy). Terminology is consistent across documents, the feature map matches the six feature files, and the known project decisions (remnant components excluded; contact-form hardening deferred to the manifest) are handled exactly as directed. The single warning (F-1) is a wording overstatement about per-page canonical URLs that does not reflect actual inheritance behavior on four routes; it should be reworded or recorded as a gap before blueprinting, but it does not invalidate the overall specification. No blockers. Recommended next state for the artifact set: fix/acknowledge F-1, then mark all seven documents `approved` and proceed to blueprinting.
