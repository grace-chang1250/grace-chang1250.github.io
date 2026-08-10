# Work Page Specification
## Grace Chang: Professional Feed

Status: Concept fleshed out / ready for implementation
Route: `/work`
Primary purpose: Turn the Work page into a social-media-inspired, vertically scrolling feed of Grace's projects, resume, education, skills, and career direction.

## 1. Core Idea

The Work page should feel like visiting Grace's professional social feed rather than reading a traditional resume PDF.

It is a curated stream of evidence:

- a project post shows what was built and who it helped
- an experience post shows the scope of a role and the tools used
- an education post establishes the foundation
- a skills post makes the technical range scannable
- a closing post makes the next step clear

The visual language should remain consistent with the landing page:

- creme canvas
- beige dividers and soft surfaces
- pink interaction accents
- chestnut metadata
- espresso headings and body text
- pixel-art/video atmosphere where appropriate

The feed should feel alive through rhythm, hover states, reveal motion, and media placeholders, not through noisy social metrics or fake engagement.

## 2. Experience Goals

A visitor should be able to:

1. Understand who Grace is within the first post.
2. Scroll naturally through a complete resume without opening a PDF.
3. Identify the strongest projects quickly.
4. Open the patent assignment prototype from a project post.
5. See four years of professional growth across different engineering domains.
6. Understand Grace's design-engineering and product-engineering direction.
7. Reach Contact without hunting through the page.

The page should answer these questions in order:

- What does Grace build?
- What has Grace shipped?
- What did Grace learn and own?
- What does Grace want to do next?

## 3. Page Structure

The feed is a single vertical stream with a persistent page header and a sequence of post cards.

```text
Work page header
  ↓
Pinned profile post
  ↓
Featured project post: TCO tool
  ↓
Featured project post: Patent Assignment MVP
  ↓
Experience post: Dell Technologies overview
  ↓
Experience post: Engineering Rotation highlights
  ↓
Experience post: IBM
  ↓
Experience post: Liberty Mutual
  ↓
Education post
  ↓
Skills post
  ↓
Career direction post
  ↓
Contact CTA post
```

Do not create a sidebar timeline, multi-column resume grid, or separate “resume” tab. The feed itself is the resume.

## 4. Work Header

The page header is not a conventional hero. It introduces the feed like a profile timeline.

Content:

- Eyebrow: `Work / Professional feed`
- H1: `Things I’ve built, learned, and shipped.`
- Supporting copy: `A scrolling record of software engineering work, product thinking, and the direction I’m growing toward.`
- Small metadata row: `Grace Chang` and `Software Engineer → Design Engineer`

Optional controls:

- `All posts`
- `Projects`
- `Experience`
- `Education`

These should be simple filter buttons only if filtering is implemented fully. The initial implementation may omit filters and show the complete feed.

## 5. Feed Post Anatomy

Every post should use the same structural pattern so the page feels like one product.

```text
article.feedPost
  header.postHeader
    avatar or monogram placeholder
    author name
    post type
    date or period
    overflow icon or decorative marker
  div.postBody
    eyebrow/category
    title
    short narrative
    optional media placeholder
    facts/tags/metrics
  footer.postFooter
    primary route action or contextual label
```

Required behavior:

- Entire project posts may link to `/work/:slug`, but the link must be clear and accessible.
- Non-project resume posts should not pretend to be clickable social posts.
- Use semantic `article` elements.
- Use `time` for dates and date ranges.
- Use buttons only for actual actions; do not style static metadata as buttons.
- Avoid fake likes, comments, shares, follower counts, or engagement badges.

## 6. Visual Rhythm

The feed should alternate between a few intentional post formats:

### Full-width project post

Used for TCO and Patent Assignment MVP.

- Large title and user problem
- Wide picture placeholder
- Role, stack, and outcome row
- Pink `Read case study` link

### Split experience post

Used for Dell role highlights and earlier internships.

- Left: period, role, employer
- Right: concise accomplishment list
- Beige or creme media placeholder on the bottom or side

### Dark espresso post

Used once for career direction or the closing CTA.

- Espresso background
- Creme type
- Pink links
- No competing card inside the post

### Compact skills post

Used for technical range.

- Strong today
- Tools and languages
- Product/UI direction
- Tags or grouped text, not a dense decorative cloud

Do not use a different card style for every post. Variation should come from layout and content density, not a new visual language each time.

## 7. Picture Placeholder System

Pictures are intentionally not supplied yet. Every visual slot should be implemented as an obvious, polished placeholder that can later be replaced without layout changes.

Use a shared component concept:

```ts
type MediaPlaceholderProps = {
  label: string;
  caption: string;
  aspectRatio?: 'wide' | 'square' | 'portrait';
  tone?: 'creme' | 'beige' | 'espresso';
};
```

Placeholder requirements:

- fixed aspect ratio using CSS `aspect-ratio`
- no layout shift when a real image is added
- visible label such as `Project image coming soon`
- short caption explaining the intended image
- use a soft border, pixel texture, or simple CSS mark
- do not use empty gray boxes
- do not use random stock imagery

Planned image slots:

| Post | Placeholder label | Intended future asset |
|---|---|---|
| Profile post | `Portrait coming soon` | Casual professional photo or pixel-art self portrait |
| TCO project | `TCO workflow preview` | ROI wizard, quote upload, or generated deck screenshot |
| Patent project | `Patent assignment prototype` | Screenshot or recording still from the interactive prototype |
| Dell overview | `Engineering rotation map` | Timeline illustration of the four Dell assignments |
| IBM | `Netezza work sample` | Sanitized data-table or notebook image |
| Liberty Mutual | `Filing pipeline sketch` | Diagram of the Lambda ingestion flow |
| Education | `UMass Amherst` | Campus, diploma, or abstract academic image |

## 8. Content Model

Add a dedicated content model instead of hardcoding the entire feed inside `Work.tsx`.

Suggested types:

```ts
type FeedPost =
  | {
      id: string;
      kind: 'profile' | 'project' | 'experience' | 'education' | 'skills' | 'direction' | 'contact';
      dateLabel?: string;
      title: string;
      body: string;
      tags?: string[];
      media?: MediaPlaceholder;
      href?: string;
      facts?: { label: string; value: string }[];
      bullets?: string[];
    };
```

Recommended content location:

- `src/content/workFeed.ts`

Keep the existing `featuredProjects` data for case studies. The feed should reference projects by slug rather than duplicate all case-study prose.

## 9. Resume Content

### Profile post

Author: `Grace Chang`
Category: `Profile`
Title: `Software Engineer building toward design engineering.`

Body:

> I build thoughtful software from messy user problems to working interfaces. I’m strongest when I can move between product questions, system constraints, and the details that make a workflow feel clear.

Facts:

- `Based in`: Massachusetts / remote-friendly
- `Experience`: 4+ years in software engineering
- `Focus`: Product engineering, frontend systems, design engineering

Include the future portrait placeholder here.

### Education post

Institution: `University of Massachusetts Amherst, College of Information and Computer Sciences`
Period: `Aug 2019 - Dec 2022`

Details:

- Bachelor of Science in Computer Science
- Minor in Business
- Magna cum laude
- GPA: 3.97 / 4.0

### Dell Technologies overview post

Role: `Software Engineer I & II, Engineering Rotation Program`
Employer: `Dell Technologies`
Period: `Feb 2023 - Aug 2026`

Intro:

> Four years across frontend, backend, infrastructure, internal tools, and AI-assisted product prototypes.

Highlights:

- Partnered with product managers and stakeholders to translate rough problems into usable software.
- Worked across React, Angular, Python, Golang, Kubernetes, Ansible, Docker, and enterprise security systems.
- Mentored and led four summer interns across AI and tooling projects.
- Built both production-oriented systems and rapid prototypes under real constraints.

### Dell TCO / Patent project post

Period: `Nov 2025 - Aug 2026`
Role: `Fullstack Software Engineer II`

Use the existing project data for:

- TCO internal tool
- ROI calculation engine
- Excel quote parsing
- PowerPoint generation
- Okta OIDC, RBAC, TLS
- Devin AI and Claude AI as development force multipliers
- Patent Assignment MVP
- stakeholder discovery
- reviewer matching
- local AI theme summaries
- directing two backend interns

Primary action: `Read the case study` for the relevant project. If one post contains both projects, provide two distinct project links.

### AI Storage Control Plane post

Period: `Feb 2025 - Nov 2025`
Role: `Backend / Infrastructure Software Engineer II`
Team: `AI Storage Control Plane & Benchmarking (CTO)`

Highlights:

- Implemented a Serviceability API for node installation and bundle information.
- Investigated namespace coexistence and CRD interaction risks.
- Built node removal and post-removal cleanup strategies.
- Integrated a Python API into Lightning while debugging Ubuntu and Juju Canonical Kubernetes deployment issues.
- Tools: Kubernetes, Golang, Python, Linux.

Copy should be edited for clarity before publishing. Preserve technical meaning but correct typos and ambiguous phrasing.

### Omnia post

Period: `Feb 2024 - Jan 2025`
Role: `Backend Software Engineer I`

Highlights:

- Developed a dual-level validation tool using Python `jsonschema` and Ansible.
- Detected value conflicts and overlapping IP ranges across 15 critical configuration files.
- Reduced installation failures and improved bare-metal cluster deployment reliability.
- Tools: Ansible, Python, Linux.

### PPDM post

Period: `Feb 2023 - Jan 2024`
Role: `Frontend Software Engineer I`

Highlights:

- Built and maintained UI features and end-to-end tests for Platform for Multicloud Data Protection.
- Developed popup modals, custom date validation, asynchronous form validation, RBAC datagrid selection, and contextual tooltips.
- Built PPDM 3D, a winning UI hackathon project, with three teammates.
- Tools: Angular, TypeScript, HTML, CSS/Tailwind, Cypress, Regex, Git, Jira, Confluence.

The incomplete source line `Contributed to numerous full test exposures and fixed and` must be rewritten or omitted before implementation.

### IBM post

Employer: `IBM`
Role: `Software Engineering Intern`
Period: `May 2022 - Aug 2022`

Highlights:

- Modernized the IBM Netezza Performance Server experience for database users.
- Developed a C++ user-defined function invoked through SQL expressions.
- Used Python tooling including `argparse`, `tabulate`, `datetime`, and `pandas`.
- Improved auto-pause/resume history analysis through detailed and summary tables.
- Tested in containers and demonstrated workflows with Jupyter and `nzpy`.

### Liberty Mutual post

Employer: `Liberty Mutual Insurance`
Role: `Software Engineering Intern`
Period: `May 2021 - Aug 2021`

Highlights:

- Designed and tested a filing-system data pipeline.
- Chained three JavaScript AWS Lambdas to ingest, transform, and validate filings.
- Built a Jest test suite with approximately 92% average coverage.
- Replaced a lengthy manual process with an automated flow for thousands of claims filings.
- Tools: JavaScript, AWS Lambda, Jest, Axios, Postman, Git.

### Skills post

Title: `The tools I use to turn ideas into working things.`

Group 1: `Languages`

- JavaScript
- TypeScript
- Java
- Python
- Golang
- C / C++
- SQL
- HTML
- CSS

Group 2: `Frameworks and tools`

- React.js
- Angular
- Node.js
- Docker
- Kubernetes
- Ansible
- SQLite
- MongoDB
- REST APIs
- Git

Group 3: `Product and UI strengths`

- Rapid frontend prototyping
- Debugging and shipping
- API design
- Stakeholder collaboration
- Validation and feedback loops
- Accessibility and interaction details

### Direction post

Title: `What I’m moving toward.`

Body:

> I’m looking for product engineering, frontend, or design engineering work where I can stay close to users, prototype in code, and own more of the experience from the first question to the shipped interface.

Action: `Read about me` → `/about`

### Contact post

Title: `Want to build something useful?`

Body: `Reach out about product engineering, frontend systems, design engineering, or a problem that needs a thoughtful first prototype.`

Action: `Get in touch` → `/contact`

## 10. Social Feed Interactions

The page should borrow the comfort of social scrolling without pretending to be a social network.

Required interactions:

- Posts reveal with a small upward opacity animation as they enter the viewport.
- The first profile post is visible immediately after the page header.
- Hovering a project post reveals a pink arrow or changes the media placeholder border.
- Clicking a project post opens its case study route.
- Clicking a non-project link performs the obvious route action.
- Optional filter tabs must update the visible feed without changing the URL unless filters become a real navigable feature.
- No infinite loading. The resume should have a clear ending.
- Add a “Back to top” control only if the feed becomes long enough to need it.

Motion rules:

- Use Framer Motion only for reveal transitions already supported by the app, or use CSS Intersection Observer classes.
- Keep reveal duration between 300ms and 500ms.
- Stagger adjacent posts by no more than 80ms.
- Respect `prefers-reduced-motion` and show all content without movement.

## 11. Layout And Responsive Rules

Desktop:

- Max content width: approximately `1100px` to `1200px`.
- Feed posts occupy a readable central column, approximately `720px` to `860px`.
- Optional left rail may show `WORK / RESUME` and a progress marker, but it must collapse entirely on mobile.
- Media placeholders should be wide and stable.
- Resume facts may sit in a narrow metadata rail inside a post.

Tablet:

- Keep one central feed column.
- Move metadata above the body when horizontal space becomes limited.

Mobile:

- One column, full-width post surfaces.
- No overlapping media and text.
- Stack author metadata, category, title, body, media, facts, and action in that order.
- Use horizontal padding of `16px` to `24px`.
- Titles may wrap naturally; never force nowrap on long experience titles.
- Preserve touch target sizes of at least `44px` for buttons and links.

Required test widths:

- 320px
- 390px
- 768px
- 1280px
- 1440px

## 12. Accessibility

- Use semantic `article`, `header`, `section`, `time`, and `nav` elements.
- Every media placeholder needs a descriptive text alternative.
- Do not communicate post categories through color alone.
- Ensure pink links and chestnut metadata meet contrast requirements.
- Make the entire project post link keyboard accessible, with a visible focus state.
- Avoid nested interactive elements. If the whole post is a link, do not place another link inside it; use a non-nested action pattern or make only the title/action a link.
- Provide `aria-label` text for icon-only controls.
- Do not use fake social engagement controls that create confusion for assistive technology.

## 13. Implementation Plan

### Phase 1: Content foundation

1. Create `src/content/workFeed.ts`.
2. Add normalized feed post types.
3. Move the supplied resume details into structured data.
4. Reference existing project slugs instead of duplicating case-study content.
5. Edit unclear or incomplete resume bullets before rendering them.
6. Decide which phone number and links are public-facing before launch.

### Phase 2: Shared feed components

Create:

- `src/components/work/FeedPost.tsx`
- `src/components/work/FeedPost.module.css`
- `src/components/work/MediaPlaceholder.tsx`
- `src/components/work/MediaPlaceholder.module.css`
- `src/components/work/FeedMeta.tsx`
- `src/components/work/FeedMeta.module.css`

Keep the components small. Do not create a generic social-media framework.

### Phase 3: Work route rebuild

Replace the current `Work.tsx` project-row archive with:

- feed header
- mapped `FeedPost` list
- selected project links
- resume posts
- one clear closing contact post

Keep `/work/:slug` unchanged initially so the patent-review prototype remains stable.

### Phase 4: Interaction polish

1. Add viewport reveal animation.
2. Add project-post hover/focus treatment.
3. Add optional category filters only after the unfiltered feed works.
4. Test scroll position, keyboard movement, and browser Back behavior.

### Phase 5: Visual validation

For each required viewport:

- confirm no horizontal overflow
- confirm no text overlaps media
- confirm post actions remain visible
- confirm placeholders do not change layout size
- confirm the first screen communicates Grace's identity and work direction
- confirm the last post provides an obvious contact action

## 14. Files Likely To Change

Primary:

- `src/pages/Work.tsx`
- `src/pages/Work.module.css`
- `src/content/workFeed.ts`

New components:

- `src/components/work/FeedPost.tsx`
- `src/components/work/FeedPost.module.css`
- `src/components/work/MediaPlaceholder.tsx`
- `src/components/work/MediaPlaceholder.module.css`
- `src/components/work/FeedMeta.tsx`
- `src/components/work/FeedMeta.module.css`

Possible supporting changes:

- `src/content/site.ts` for public contact details and shared labels
- `src/components/layout/Nav.module.css` if the Work route needs a feed-specific active state
- `src/styles/tokens.css` for feed spacing or post surface tokens

Do not modify the patent prototype until the new Work feed is stable.

## 15. Definition Of Done

The Work page is ready when:

- It reads as a curated professional feed, not a traditional project grid.
- A visitor can scroll through Grace's projects and resume without confusion.
- The supplied education, experience, skills, and contact details are represented accurately.
- Project posts link predictably to their existing case studies.
- The patent assignment prototype remains reachable and functional.
- Picture placeholders are stable, intentional, and easy to replace.
- The page has a clear beginning, middle, and ending.
- No fake social metrics or confusing social UI are present.
- The layout works at mobile and desktop widths without overlap.
- `npm run build` passes.
