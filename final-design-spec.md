# Grace Chang Personal Website
## Final Design Specification

Status: Final visual direction
Audience: Hiring managers, design leads, engineering managers, and collaborators
Primary impression: A thoughtful software engineer with a tactile creative life and a strong eye for atmosphere, interaction, and detail.

## 1. Creative Direction

The site should feel like a quiet, carefully made studio: warm, personal, slightly nostalgic, and technically precise. The landing page is the strongest expression of the brand. A looping pixel-art tree video fills the viewport while Grace's introduction floats over it like a title card in a small animated film.

The visual language is built around three materials:

- Creme: an open, soft canvas that keeps the site light.
- Beige: paper, fabric, borders, tags, and quiet UI surfaces.
- Espresso: rich ink for readable, confident type.
- Pink: a warm accent for action, focus, and small moments of delight.
- Chestnut: the bridge between text and the earthy video atmosphere.

The site should feel designed, not decorated. Use space, scale, texture, and restrained motion instead of adding lots of ornamental elements.

## 2. Non-Negotiable Design Tokens

These variables are the foundation of the entire site and must remain available in `:root`:

```css
:root {
  --bg-creme: #FFFDF5;
  --ui-beige: #F5EFE6;
  --accent-pink: #E4A495;
  --text-chestnut: #8E634A;
  --text-espresso: #33221A;
}
```

Supporting tokens may extend this system, but new colors should remain visibly compatible with the palette.

Recommended supporting values:

```css
:root {
  --accent-pink-dark: #C97F70;
  --text-espresso-soft: #5A4032;
  --border-beige: #E8DED2;
  --surface-warm: rgba(255, 253, 245, 0.84);
  --shadow-warm: 0 18px 50px rgba(51, 34, 26, 0.12);
  --radius-sm: 8px;
  --radius-pill: 999px;
  --content-width: 1120px;
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Do not introduce a competing purple, blue, dark-mode, neon, or high-saturation palette.

## 3. Typography

Typography should balance a personable editorial voice with engineering clarity.

- Display headings: use the existing expressive serif display face when available, such as Fraunces. It should feel warm and intentional rather than formal.
- Body and UI: use the existing clean sans-serif face, such as DM Sans, for comfortable reading and precise controls.
- Technical metadata: use the existing monospace face, such as JetBrains Mono, sparingly for labels, dates, and stack details.
- Do not use oversized display type outside hero moments.
- Use generous line height for body copy, approximately 1.65 to 1.8.
- Keep letter spacing at zero for normal copy. Small uppercase labels may use restrained positive tracking.
- Maintain strong contrast between `--text-espresso` and `--bg-creme`.

Suggested scale:

| Role | Desktop | Mobile |
|---|---:|---:|
| Hero name | `clamp(4rem, 7vw, 7.5rem)` | `clamp(3rem, 15vw, 5rem)` |
| Page title | `clamp(3rem, 6vw, 5.5rem)` | `clamp(2.6rem, 13vw, 4rem)` |
| Section title | `clamp(2rem, 4vw, 3.5rem)` | `2.25rem` |
| Body | `1rem` to `1.125rem` | `1rem` |
| Label | `0.72rem` to `0.85rem` | `0.72rem` |

## 4. Global Layout Rules

- Use semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `footer`, `figure`, and meaningful heading levels.
- The root page must not introduce horizontal overflow.
- Use a responsive content wrapper for interior pages with a maximum width near `1120px`.
- The landing page is an exception: it is edge-to-edge and exactly `100vh` on desktop.
- The home route intentionally omits the standard navigation and footer so the video can touch all browser edges.
- Interior pages use the shared navigation and footer shell.
- Keep sections full-width with constrained inner content. Use cards only for repeated work items, framed tools, and modal surfaces.
- Avoid nested cards and unnecessary rounded containers.
- Preserve a calm amount of empty space around important copy.

## 5. Landing Page: `/`

### Purpose

Create an immediate emotional and visual signature, then make Grace's positioning understandable in under ten seconds.

### Composition

The landing page is a full-screen scene:

1. `section.landing` is `position: relative`, `height: 100vh`, `min-height: 100vh`, and `overflow: hidden`.
2. The video layer is absolute, inset to every edge, and has `z-index: 0`.
3. The introduction is an absolute foreground layer with `z-index: 1`.
4. The text is centered over the tree, not placed in a separate panel or column.
5. No profile photo is shown on the landing page yet. The composition must leave enough breathing room for a future photo treatment elsewhere.

### Video treatment

The file is `public/petals-fallings.mp4` and should render as:

```html
<video
  autoplay
  loop
  muted
  playsinline
  aria-label="Pixel-art petals falling"
></video>
```

Required video styling:

```css
.video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
  background-color: transparent;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

The video element must remain full-screen. Do not use `object-fit: cover` when it causes the tree to crop tightly. If the tree still appears too large, the source video itself needs a wider frame; do not distort the aspect ratio.

The creme canvas remains visible behind any letterboxing created by `contain`. The video should feel integrated with the page rather than boxed into a card.

### Foreground copy

Use this exact hierarchy:

- Kicker: `Software engineer / creative builder`
- H1: `Hi, I'm Grace`
- Subtitle: `Software Engineer & Creative Builder`
- Bio: Three short sentences describing clean code by day and baking, weaving glass beads, and traveling during free time.
- Hobby tags: `🥧 Baking`, `✨ Beading`, `✈️ Traveling`
- Primary CTA: `Explore my work`

The H1 uses `--text-espresso`. The subtitle and kicker use `--text-chestnut`. The bio uses `--text-espresso`.

The foreground should remain readable over the video without hiding the scene. Prefer text shadow and careful placement first. A very light translucent creme treatment is acceptable only if the video makes contrast unreliable; it should never become a heavy opaque card.

### Landing interactions

- CTA links to `/work`.
- CTA uses a pill shape, `--accent-pink` background, and `--bg-creme` bold text.
- Hover: translate upward by 2px and add a soft warm shadow.
- Focus: use a visible `2px` outline with `--accent-pink` or a darker accessible derivative.
- Petals continue looping independently of pointer interaction.
- Respect `prefers-reduced-motion`; the video may remain available, but all decorative transitions must stop and the experience must remain usable.

## 6. Navigation

Interior routes use a minimal shared navigation.

Contents:

- Wordmark: `Grace Chang`
- Links: `Work`, `Playground`, `About`, `Contact`
- Active route indicator using pink or chestnut, never a heavy underline bar.

Style:

- Creme or translucent warm surface.
- Thin beige border or subtle backdrop blur.
- Espresso text for the wordmark and primary links.
- Chestnut or pink for active and hover states.
- Compact height with generous horizontal breathing room.
- On mobile, collapse into a simple accessible menu button with a clearly labeled expanded state.

The home route may hide this navigation to preserve the full-screen landing composition.

## 7. Home Follow-Up Content

The current final landing is intentionally focused. If additional home content is restored later, it must continue the same visual story and appear below the first viewport:

1. Selected work: two or three projects framed around user problems.
2. Playground teaser: one live interactive prototype.
3. Short about snippet: warm and direct, with a link to About.
4. Quiet footer.

Do not return to the previous pale multi-color spring palette. Use creme, beige, pink, chestnut, and espresso as the dominant system.

## 8. Work Index: `/work`

Purpose: make the strongest engineering stories easy to scan.

Layout:

- Page intro with a small chestnut kicker and a large espresso title.
- Responsive grid of two or three project cards.
- Cards use beige borders, warm surfaces, and small pink or chestnut accents.
- Keep card corners at `8px` or less.
- Each card contains project title, one-sentence user problem, role or type tag, and a clear route to the case study.
- Avoid generic dashboard styling and avoid image placeholders that imply a finished visual design when none exists.

Card interaction:

- Entire card may be clickable, but preserve a clear accessible link.
- Hover uses a slight lift, border color shift, or quiet background change.
- Do not use large gradients or excessive shadows.

## 9. Case Studies: `/work/:slug`

Case studies are user-centered engineering narratives, not design-school process portfolios.

Required structure:

1. Hero: project name, role, timeline, and stack.
2. The user problem: who struggled and what they needed to accomplish.
3. Discovery: how the problem was observed or validated.
4. What I imagined: the proposed product direction in plain language.
5. What I built: interface, workflow, architecture, or demo.
6. Tradeoffs and constraints.
7. Outcome: metrics, feedback, or honest qualitative result.
8. Learning and next step.
9. Link to the next relevant project.

Visual treatment:

- Use a strong espresso page title and chestnut metadata.
- Use beige section dividers and restrained pink callouts.
- Show interactive demos or real interface states wherever possible.
- Technical details can use monospace labels but should never overpower the user story.
- Make the first screen scannable before asking the reader to read long paragraphs.

## 10. Playground: `/playground`

Purpose: prove that Grace can build and refine interactive UI in code.

Visual direction:

- Treat the page as a warm studio notebook, not a component-library catalog.
- Use full-width sections with a constrained content wrapper.
- Each experiment gets a concise title, one-sentence premise, live demo, and optional rationale.
- Use beige framed tool surfaces with pink controls and espresso copy.
- Keep controls obvious: toggles for binary state, sliders for numeric values, segmented controls for modes, and icon buttons for undo/redo or compact actions.

Starter experiments:

- Palette swatches using the final five design tokens.
- Button and focus-state study.
- Motion or staggered reveal study.
- Responsive layout experiment.
- A small user-facing workflow prototype.

Every interactive demo must work with keyboard input and have a visible focus state.

## 11. About: `/about`

Purpose: make Grace memorable as a person and clarify the design-engineering pivot.

Recommended order:

1. Large introduction: software engineer moving toward design engineering.
2. Two or three short bio paragraphs.
3. Philosophy principles.
4. Skills split into `Strong today` and `Actively building`.
5. Optional photo or personal artifact in a quiet, unforced frame.
6. Contact CTA.

Voice:

- Honest, curious, warm, and specific.
- Confident about four years of shipping software.
- Open about deliberately growing visual craft.
- Avoid corporate claims, inflated design credentials, or generic passion language.

## 12. Contact: `/contact`

Purpose: make starting a conversation effortless.

Include:

- Clear invitation to connect.
- Email link.
- LinkedIn link.
- GitHub link.
- Resume download when the final PDF is available.

The page should be quiet and editorial. A simple mailto action is preferable to a form unless a form has a real backend and clear error handling.

## 13. Footer

Use on interior pages only unless the landing composition later grows beyond one viewport.

Include:

- Grace Chang wordmark.
- Small copyright line.
- GitHub, LinkedIn, and email links.
- Optional `Built with React` note.

Footer styling is low contrast but still accessible: beige background or border, chestnut metadata, espresso links on hover.

## 14. Responsive Behavior

Breakpoint: `768px` is the primary mobile breakpoint.

Desktop:

- Landing video remains full viewport.
- Foreground copy is centered with generous side padding.
- Hero H1 may reach display scale but must not collide with the viewport edges.
- Interior pages use two- or three-column grids where content benefits from comparison.

Mobile:

- Landing remains `min-height: 100vh`.
- Video still fills the scene with `object-fit: contain` so the tree is not aggressively cropped.
- Foreground text remains centered and uses a smaller display scale.
- Tags wrap naturally and remain readable.
- CTA remains large enough to tap comfortably.
- Interior grids collapse to one column.
- Navigation becomes an accessible menu.
- Long headings wrap instead of shrinking below readable sizes.

Test at minimum:

- 320px wide phone
- 390px wide phone
- 768px tablet boundary
- 1280px desktop
- 1440px desktop

## 15. Accessibility

- Use one meaningful H1 per page.
- Decorative video must have an appropriate label or be hidden from assistive technology if the label adds no value.
- Preserve keyboard navigation through every link and interactive control.
- Never rely on color alone for active, error, or success states.
- Maintain visible focus rings.
- Ensure text over the video meets readable contrast in every tested frame.
- Keep motion optional through `prefers-reduced-motion`.
- Use descriptive link text and meaningful image alt text when photos are added.
- Avoid autoplay audio; the landing video is always muted.

## 16. Motion And Interaction Language

Motion should feel soft, short, and purposeful:

- Page entrance: subtle opacity and 8px to 12px upward movement.
- Card hover: 2px to 4px lift at most.
- CTA hover: 2px lift with a warm shadow.
- Staggered reveals: 60ms to 100ms between items.
- Avoid continuous animated gradients, bouncing UI, parallax overload, and decorative motion competing with the petal loop.

Use the existing easing family where possible:

```css
--ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
```

## 17. Content Principles

- Lead with the user problem before the implementation.
- Use first person when describing decisions and lessons.
- Prefer concrete verbs: listened, noticed, proposed, built, tested, shipped.
- Keep paragraphs short and skimmable.
- Let the site demonstrate taste through consistency rather than claiming it.
- Do not add filler sections just to make pages longer.

## 18. Implementation Guardrails

- React and TypeScript remain the application foundation.
- Use CSS Modules and CSS Custom Properties; do not introduce Tailwind or Bootstrap.
- Reuse existing UI primitives when they match this spec.
- Keep the exact five primary tokens stable across pages.
- Avoid unrelated refactors when implementing visual changes.
- Keep media assets local whenever possible. The landing video belongs in `public/petals-fallings.mp4`.
- Run `npm run build` after design-system or route-level changes.
- Check both desktop and mobile layouts before considering a visual change complete.

## 19. Definition Of Done

The final website is ready when:

- The home page immediately presents the full-screen petal/tree video and floating `Hi, I'm Grace` introduction.
- The palette consistently reads as pink, beige, chestnut, espresso, and creme.
- Work, Playground, About, and Contact feel like pages in the same world.
- Case studies lead with user problems and honest engineering decisions.
- Keyboard, mobile, reduced-motion, and contrast behaviors are handled.
- No page has accidental horizontal overflow or overlapping content.
- The production build passes.
