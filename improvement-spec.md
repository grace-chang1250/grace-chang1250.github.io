# Website Improvement Specification
## Simplify the living resume portfolio

Status: Audit complete / implementation plan
Scope: Information architecture, content hierarchy, navigation, interaction consistency, visual overlap, and legacy cleanup
Primary goal: Make the site feel like one simple, alive resume portfolio instead of a collection of overlapping pages and experiments.

## 1. Audit Summary

The site has a strong visual premise, but the current structure asks visitors to understand too many competing paths:

- The homepage behaves as a long scrolling portfolio and also links to a separate Work page.
- The `Work` label can mean the homepage's `#work` anchor or the `/work` route depending on context.
- Process appears as a homepage section, a separate `/process` route, a navigation tab, and a section on About.
- Playground appears in navigation and in the homepage's closing “workbench” block even though it is not part of the core resume story.
- About repeats the same process/philosophy story that is already visible on Home.
- The homepage has several competing endings: selected work, process, workbench, About, and Contact paths.
- Route transitions and smooth scrolling make movement feel animated, but the destination context is not always obvious.
- Several older CSS and content conventions remain alongside the newer landing direction, increasing the chance of mismatched spacing, colors, and behavior.
- The patent prototype is valuable and should remain, but it should be presented as a work case study rather than as evidence that the site needs a separate playground/product area.

The result is not a lack of content. It is an information architecture problem: too many entry points, repeated explanations, and ambiguous transitions.

## 2. Desired Site Model

The site should have exactly four primary destinations:

```text
/                     Home: living resume introduction + selected work preview
/work                 Work: complete project archive
/work/:slug           Case study: one detailed project story and prototype
/about                About: person, goals, strengths, and selected philosophy
/contact              Contact: direct email and professional links
```

Remove from the primary experience:

- `/process`
- `/playground`
- Process navigation tab
- Playground navigation tab
- Homepage workbench section
- Repeated process section on About
- Hobby-forward emphasis as a major content block

The patent-review prototype remains at `/work/patent-assignment-mvp` inside its case study.

## 3. Priority Levels

### P0: Fix before the next deploy

- Remove Process and Playground from the route map and primary navigation.
- Make every Work action resolve to one predictable destination.
- Remove the homepage workbench section.
- Remove the duplicate Process section from About.
- Remove repeated or conflicting landing-page action patterns.
- Fix content overlap at mobile and narrow desktop widths.

### P1: Fix during the same redesign pass

- Rebalance Home around work, goals, and engineering identity.
- Simplify About into one clear personal/resume narrative.
- Make Contact a direct, low-friction endpoint.
- Remove stale content and styles tied to deleted routes.
- Standardize section spacing and link behavior.

### P2: Follow-up polish

- Add route-aware active navigation states.
- Add visual regression checks at the defined viewport sizes.
- Improve case-study media and prototype framing after the information architecture is stable.

## 4. Navigation And Route Fixes

### Current issue

`src/content/site.ts` currently exposes Work, Process, Playground, About, and Contact. `src/App.tsx` routes all of them. Home also contains in-page anchors for Work and Process. This creates two different navigation models at once:

- in-page scrolling: `#work`, `#process`
- route navigation: `/work`, `/process`, `/playground`, `/about`, `/contact`

A visitor cannot reliably tell whether a click will scroll within the resume or leave the page.

### Required fix

Use one navigation model for each task:

- Primary navigation uses route links only: `Work`, `About`, `Contact`.
- Home may contain one explicit in-page `See selected work` link to `#selected-work`.
- The homepage should not have a Process anchor or a separate Process tab.
- The homepage should not link to Playground.
- Every project preview links directly to `/work/:slug`.
- The Work page's contact CTA links only to `/contact`.
- Case studies have one consistent back link to `/work` and one next-project link.

### Router changes

Remove these imports and routes from `src/App.tsx`:

- `Playground`
- `Process`
- `/playground`
- `/process`

Delete the route files after all references are removed:

- `src/pages/Playground.tsx`
- `src/pages/Playground.module.css`
- `src/pages/Process.tsx`
- `src/pages/Process.module.css`

Before deletion, confirm there are no links or imports remaining with a workspace search.

### Navigation changes

Update `navLinks` to:

```ts
export const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;
```

Keep the mobile menu, but make it a simple three-link menu. The menu should close after route navigation and after selecting a link.

## 5. Canonical Work Behavior

### Current issue

Work appears as:

- the homepage `#work` scroll destination
- the homepage selected-work list
- the `/work` route
- individual `/work/:slug` routes
- multiple CTA labels such as “See what I've made,” “Talk about a project,” and “Explore my work”

This is acceptable only if the relationship is explicit. At present, the language and movement are inconsistent.

### Required fix

Define these canonical labels:

- Home CTA: `See selected work` and scrolls to `#selected-work`.
- Home project rows: project title plus `Read case study` behavior through the whole row.
- Navigation: `Work` goes to `/work`.
- Work page CTA: `Start a conversation` goes to `/contact`.
- Case study back link: `Back to work` goes to `/work`.

Do not use multiple labels for the same destination unless the context genuinely changes.

### Scroll behavior

- Anchor links should use native smooth scrolling only when the destination is on the current page.
- Route changes should reset scroll to the top using `auto`, not smooth scrolling. A route transition that scrolls while also animating opacity can feel like a second unexpected movement.
- Preserve the current pathname when a user uses the browser Back button.
- Do not intercept ordinary route links to produce in-page scrolling.

## 6. Homepage Content Simplification

### Current issue

`src/pages/Home.tsx` currently contains:

1. Landing intro
2. Selected work
3. Process section
4. “Keep exploring” / “There's more in the workbench” section
5. Links to Playground and About

The homepage is trying to be a hero, resume, process explainer, and experiment index at the same time. The amount of movement and repeated framing makes the page feel longer than its content warrants.

### Required homepage structure

```text
1. Full-screen landing scene
2. Selected work section
3. Short goals/about section
4. Contact prompt
5. Footer
```

#### 1. Landing scene

Keep:

- Full-screen `petals-fallings.mp4` background
- `Hi, I'm Grace`
- `Software Engineer & Creative Builder`
- Short engineering-first bio
- `See selected work` CTA centered in front of the scene

Change:

- Reduce hobby tags to one quiet inline sentence or remove them from the landing entirely.
- Do not make hobbies part of the main conversion path.
- Keep only one CTA in the hero.
- Avoid a second scene navigation model if the shared navigation already exists on non-home pages. If the home scene navigation remains, it must expose only Work, About, and Contact.

Suggested landing copy direction:

> I build thoughtful software from messy user problems to working interfaces. I am moving toward design engineering because I want to own more of the product experience, not only the implementation.

#### 2. Selected work

Keep the existing featured projects and summaries. Rename the section anchor to `selected-work` so it clearly differs from the `/work` route.

Use three project rows or compact previews. Each must show:

- project number
- project title
- one-line user problem/outcome
- role or project type
- one clear arrow/action

Do not duplicate the entire Work page here.

#### 3. Goals/about section

Add a short, work-focused paragraph covering:

- four years of software engineering experience
- interest in early product discovery
- design engineering direction
- desire to prototype in code and learn from real users

Link to `/about` with one label: `More about me`.

Do not repeat the entire About page or the process framework.

#### 4. Contact prompt

Use one direct prompt such as `Have a useful problem to untangle?` with a single `Get in touch` link to `/contact`.

#### 5. Remove

Delete the entire current closing section containing:

- `Keep exploring`
- `There's more in the workbench.`
- `Open the playground`
- `Read the longer version`

The workbench is legacy framing and is not part of the simplified site.

## 7. About Page Cleanup

### Current issue

`src/pages/About.tsx` repeats process content that is already on Home and previously existed as its own Process route. It also presents philosophy as a list of card surfaces, which makes the section visually heavy and contributes to the overlap/ugliness problem.

Repeated areas:

- Process appears on Home and About.
- Philosophy overlaps conceptually with Process.
- `site.pitch` appears on Home and About.
- The same design-engineering pivot is introduced several times without a stronger progression.

### Required About structure

```text
1. Hero: who Grace is and what she is aiming toward
2. Background and goals
3. Selected philosophy, presented as one clean list
4. Strengths and current growth areas
5. Contact CTA
```

### Philosophy redesign

Replace individual Card components with a single editorial list:

- no nested cards
- no alternating accent cards
- no gradient surfaces
- one thin divider per item
- number each item `01` through `04`
- use one strong sentence per item
- allow the list to breathe with vertical spacing

Keep only the strongest three philosophy lines unless the fourth adds distinct value. Recommended set:

1. Start with the user's problem, not the ticket description.
2. Prototype in code early because it makes ideas testable.
3. The best feature removes friction instead of adding capability.

Remove the entire `How I work` / `processGrid` section from About. The process story should not appear on Home, About, and a route.

### About content hierarchy

Lead with goals and work identity, not hobbies. Hobbies may appear once as a small closing personal note, but they should not compete with:

- product discovery
- engineering experience
- design-engineering goals
- user-centered implementation

Use one version of `site.pitch` and shorten it elsewhere rather than copying the full paragraph onto multiple pages.

## 8. Contact Page Cleanup

### Current issue

Contact currently uses three equal cards, which gives email, LinkedIn, and GitHub the same visual weight and makes the primary action unclear.

### Required fix

Use one dominant contact action:

- large heading: `Let's talk about useful things`
- short paragraph about design engineering/product-focused roles
- primary email link or `Send email` button
- secondary text links for LinkedIn and GitHub

Do not use three competing cards. Keep copy-to-clipboard as a secondary utility only if it is reliable and has an accessible status message.

## 9. Work And Case Study Cleanup

### Work index

Keep the editorial project archive, but remove any language that implies a second playground or process system. Work is the primary proof of ability.

Each project row should consistently link to `/work/:slug`. Avoid mixing a project row link, an icon-only link, and an additional button for the same destination.

### Case studies

Keep the patent prototype because it is a strong demonstration of interactive product thinking. Present it as the main prototype within the patent case study.

Case-study order:

1. Back to work
2. Project title and one-line outcome
3. Role, timeline, and stack
4. User problem
5. Discovery
6. What Grace proposed
7. Interactive prototype or shipped UI
8. Contribution and tradeoffs
9. Outcome and learning
10. Next project

Avoid repeating the same summary in the hero, intro, and first body section. Use the hero for the outcome and the body for the evidence.

## 10. Overlap And Layout Audit

The following rules should be applied to all routes:

- Every text block must have a readable max width.
- Long project titles must wrap without pushing arrows or metadata off-screen.
- Grid rows must use `minmax(0, 1fr)` tracks so content can shrink.
- Avoid absolute positioning for content that can grow vertically.
- Reserve stable space for buttons, arrows, tags, and dynamic prototype states.
- Do not combine sticky headings with sections shorter than the sticky content.
- Test every route at 320px, 390px, 768px, 1280px, and 1440px widths.
- Confirm no horizontal overflow with `document.documentElement.scrollWidth <= window.innerWidth`.
- Confirm no button overlaps through screenshots and bounding-box checks.
- Keep the landing scene's absolute video layer separate from its text layer; the text layer must not set fixed heights around copy.

## 11. Motion And Interaction Audit

### Current issue

The site combines:

- Framer Motion route transitions
- smooth scrolling on route changes
- smooth anchor scrolling
- hover padding changes on project rows
- animated landing entrance
- autoplay video

Individually these are reasonable, but together they create confusing movement and make it harder to understand whether the page changed or simply scrolled.

### Required fix

- Route transitions: opacity only or a very small vertical offset, under 250ms.
- Route scroll reset: `window.scrollTo({ top: 0, behavior: 'auto' })`.
- Anchor scroll: smooth only for same-page anchors.
- Project row hover: change background and arrow position, but do not change horizontal padding if it causes neighboring content to shift.
- Landing entrance: keep one subtle entrance animation.
- Video: retain muted autoplay, `playsInline`, loop, and reduced-motion consideration.
- Respect `prefers-reduced-motion` by disabling all nonessential transitions and entrance animation.

## 12. Legacy Cleanup Checklist

Search before deleting:

- `process`
- `Playground`
- `playground`
- `workbench`
- `#process`
- `processSteps`

Expected cleanup:

- Remove Process and Playground route imports.
- Remove Process and Playground route entries.
- Remove Process and Playground navigation links.
- Remove Process and Playground homepage links.
- Remove the homepage workbench section.
- Remove `processSteps` if no remaining page uses it.
- Remove deleted page CSS modules and unused component imports.
- Remove stale route-specific copy from `final-design-spec.md` if it still describes those pages as primary destinations.
- Keep the patent prototype files because they are used by the patent case study.

Do not delete `philosophy` unless the cleaned About page no longer uses it.

## 13. Content Deduplication Matrix

| Content | Home | Work | About | Contact |
|---|---|---|---|---|
| Full landing intro | Yes | No | Short reference only | No |
| Selected project previews | Yes | Full archive | No | No |
| Full case-study details | No | No | No | No |
| Process framework | No | No | No | No |
| Philosophy | No | No | Yes, concise list | No |
| Engineering goals | Short | No | Full | Brief context |
| Hobbies | Optional one-line note | No | Optional one-line note | No |
| Contact CTA | Yes, one | Yes, one | Yes, one | Primary content |

The only intentionally repeated content is project access: Home previews selected work, and Work provides the complete archive.

## 14. Implementation Sequence

1. Remove Process and Playground from navigation and router.
2. Remove the homepage workbench and process sections.
3. Standardize Home's one Work CTA and selected-work anchor.
4. Rebuild About without the process section and with the cleaned philosophy list.
5. Simplify Contact to one primary action and secondary links.
6. Audit Work and case-study links so every project path is predictable.
7. Remove unused files, imports, styles, and content constants.
8. Run `npm run build`.
9. Run a route smoke test for `/`, `/work`, `/work/enterprise-tco-tool`, `/work/patent-assignment-mvp`, `/about`, and `/contact`.
10. Run responsive screenshot and overflow checks.

## 15. Definition Of Done

The improvement is complete when:

- The primary navigation contains only Work, About, and Contact.
- Process and Playground are no longer routes or tabs.
- The homepage has one clear Work action and no workbench ending.
- Home, Work, About, and Contact each have a distinct purpose.
- About contains no duplicate process section.
- Philosophy is a clean editorial list instead of a stack of visually competing cards.
- Work links consistently resolve to the Work archive or a case study.
- The patent prototype remains accessible through its case study.
- No content overlaps at mobile or desktop breakpoints.
- Route changes no longer feel like accidental scrolling.
- The palette and living visual language remain intact.
- The production build passes and all primary routes render without diagnostics.


**Notes, please go into each works page and redesign it to be more useful, usable, enjoyable, equitable. The TCO tool still has the sage colors from before too. need to clean that up and the yellow from the data protection one. 