export const site = {
  name: 'Grace Chang',
  title: 'Product-minded Software Engineer',
  tagline:
    'I build across the stack, but my favorite part of engineering is figuring out what to build in the first place.',
  pitch:
    'I thrive in the gap between a stakeholder’s messy problem and the first functional prototype. I use AI to rapidly simulate high-fidelity frontend solutions with mock data, then validate the domain logic with real users. I’m moving toward design engineering to own more of the product solution, from empathy to implementation.',
  emailUser: 'grace-chang1250',
  emailDomain: 'gmail.com',
  links: {
    github: 'https://github.com/grace-chang1250',
    linkedin: 'https://www.linkedin.com/in/gmchang/',
  },
} as const;

export const philosophy = [
  'Start with the user’s problem, not the ticket description',
  'Prototype in code early — it’s the fastest way to know if an idea works',
  'The best feature is the one that removes friction, not adds capability',
  'Shipping teaches you more than planning',
] as const;

export const skills = {
  strong: [
    'React',
    'TypeScript',
    'JavaScript',
    'API design',
    'Debugging & shipping',
    'Working with PMs / stakeholders',
  ],
  building: [
    'Visual design & layout',
    'Wireframing in code',
    'Motion & micro-interactions',
    'Design systems & tokens',
    'Typography & color',
  ],
} as const;

export type TimelineItem = {
  period: string;
  role: string;
  product: string;
  org: string;
  summary: string;
  stack: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "Summer 2021",
    role: "Software Engineering Intern",
    product: "Claims-filing data pipeline",
    org: "Liberty Mutual Insurance",
    summary: "Data pipeline supporting automated insurance claims filing and ingestion.",
    stack: ["Python", "ETL"],
  },
  {
    period: "Summer 2022",
    role: "Software Engineering Intern",
    product: "Netezza Performance Server UDX",
    org: "IBM",
    summary: "Built user-defined extensions on the Netezza Performance Server, a massively parallel analytics database.",
    stack: ["Java", "SQL", "Netezza"],
  },
  {
    period: "2023 - 2026",
    role: "Software Engineer I & II",
    product: "Dell Technologies",
    org: "Dell Technologies",
    summary: "Four rotations across different teams: Frontend (Angular/TypeScript), Open Source (Python/Ansible), Infrastructure (Go/Kubernetes), and Full-stack & Leadership (React/Python/Docker).",
    stack: ["Angular", "TypeScript", "Python", "Go", "Kubernetes", "React", "Docker"],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  accent: 'blush' | 'butter' | 'sage' | 'lilac';
  type: string;
  role: string;
  timeline: string;
  stack: string[];
  audience: string;
  problem: string;
  discovery: string;
  solution: string;
  contribution: string;
  workflow: string;
  tradeoffs: string;
  outcome: string;
  learning: string;
  nextStep: string;
};

export const featuredProjects: Project[] = [
  {
    slug: 'enterprise-tco-tool',
    title: 'Enterprise TCO & Presentation Engine',
    summary:
      'A secure internal tool that turns complex vendor quotes into verified ROI calculations and client-ready presentations.',
    tags: ['Internal tool', 'React', 'Product workflow'],
    accent: 'sage',
    type: 'Anonymized internal tool',
    role: 'Full-stack Software Engineer II',
    timeline: 'Timeline withheld for confidentiality',
    stack: ['React', 'Python', 'Docker', 'SQLite', 'Okta OIDC', 'Claude AI', 'Devin AI'],
    audience: 'Internal sales and account management teams preparing ROI presentations from complex vendor quotes.',
    problem: 'Sales teams manually parsed large Excel vendor quotes to calculate potential ROI. The work was slow, vulnerable to calculation errors, and followed by hours of manual presentation formatting.',
    discovery: 'Stakeholder input and direct observation of the sales enablement workflow surfaced long proposal turnaround times, repeated calculation fixes, and sales friction.',
    solution: 'I proposed a secure guided wizard that accepts a quote, explains the calculation provenance through interactive tooltips, and generates a polished presentation from the verified result.',
    contribution: 'I built the React wizard, the Python Excel parsing and calculation pipeline, the PowerPoint generation engine, and the Okta OIDC, RBAC, and TLS security layer.',
    workflow: 'A user uploads a quote, watches the ROI engine update, inspects the math behind each result, and generates a client-ready deck from one continuous workflow.',
    tradeoffs: 'SQLite in a Docker container favored speed to delivery and localized calculation performance over heavy concurrent-write scaling. AI coding agents helped a small team move quickly, but the generated work still required engineering judgment and review.',
    outcome: 'The tool automated the calculation and presentation-prep pipeline, taking a tedious financial-auditing task from hours of manual work to a repeatable guided flow. Internal feedback described it as a major sales enablement improvement.',
    learning: 'I learned how to use autonomous AI coding agents as force multipliers while retaining responsibility for architecture, security, and the product experience.',
    nextStep: 'A cloud caching layer for processed Excel schemas would make recurring-client generation faster without changing the core workflow.',
  },
  {
    slug: 'patent-assignment-mvp',
    title: 'Patent Review Assignment MVP',
    summary:
      'A local-AI prototype that helps a patent committee match submissions to reviewers and prepare them for unfamiliar topics.',
    tags: ['Prototype', 'React', 'AI-assisted workflow'],
    accent: 'blush',
    type: 'Anonymized internal prototype',
    role: 'Full-stack Software Engineer II and Technical Lead',
    timeline: 'Timeline withheld for confidentiality',
    stack: ['React', 'Python', 'Local LLM', 'Mock data APIs'],
    audience: 'A patent committee lead coordinating monthly submissions and a volunteer reviewer pool.',
    problem: 'The committee lead manually assigned three to five volunteers to each patent. Assignments often missed reviewers’ areas of expertise, making dense technical material harder to evaluate and contributing to review delays and volunteer fatigue.',
    discovery: 'Direct discovery and requirements sessions with the committee lead revealed the monthly coordination bottleneck and the need to explain unfamiliar patent themes before review.',
    solution: 'I designed a portal that extracts patent themes with a local model, scores reviewer matches, preserves manual override control, and drafts tailored primer emails with useful resources.',
    contribution: 'I owned the system architecture and rapid frontend prototype, designed the patent-to-theme data model, and directed two backend interns building allocation, summarization, and email-generation flows.',
    workflow: 'The lead uploads a batch of patents, reviews semantic match scores, adjusts edge cases manually, and sends tailored preparation emails in one pass.',
    tradeoffs: 'The MVP used mock data and prioritized a believable interactive workflow over a production database. A local model was required because unpatented ideas could not be sent to public AI APIs.',
    outcome: 'The prototype turned a multi-day manual coordination task into a visible, data-informed workflow and gave the stakeholder an immediate way to evaluate the product direction.',
    learning: 'I learned to translate a non-technical stakeholder’s pain points into system structures and to keep a small team unblocked while prototyping under tight constraints.',
    nextStep: 'The next version would connect a persistent local database and the live local model orchestrator for staging validation.',
  },
  {
    slug: 'enterprise-data-protection-ui',
    title: 'Data Protection System Explorer',
    summary:
      'Frontend improvements that make multi-cloud backup configuration and system monitoring easier to understand and safer to operate.',
    tags: ['Customer product', 'Angular', 'Enterprise UX'],
    accent: 'butter',
    type: 'Anonymized customer product',
    role: 'Frontend Software Engineer I',
    timeline: 'February 2023 - January 2024',
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Cypress'],
    audience: 'Enterprise IT administrators and infrastructure engineers managing multi-cloud backup and recovery systems.',
    problem: 'Administrators worked across dense data grids and date-sensitive policies where unclear interfaces and delayed validation could lead to configuration errors in high-stakes recovery workflows.',
    discovery: 'I reviewed UI specifications, customer-reported tickets, and legacy workflows to identify repeated input errors, validation failures, and administrative overhead.',
    solution: 'I focused the interface around immediate feedback: asynchronous validation, contextual tooltips, clearer grid permissions, and a more legible multi-system exploration pattern.',
    contribution: 'I built Angular and TypeScript components, responsive modals, custom date selectors with regex validation, contextual tooltips, conditional grid RBAC, Cypress end-to-end tests, and the frontend for an interactive system carousel and chat concept.',
    workflow: 'An administrator configures a backup policy while fields validate against system state in real time, preventing invalid values from reaching the database.',
    tradeoffs: 'The work had to fit a rigid enterprise component library and design-token system. I used that constraint as a boundary for experimentation, keeping custom interactions consistent with the wider product.',
    outcome: 'The shipped enhancements improved configuration feedback and protected grid interactions. The multi-system carousel concept also won an internal UI hackathon.',
    learning: 'I learned to manage complex application state and advocate for user experience inside compliance-driven enterprise engineering constraints.',
    nextStep: 'Shared, component-agnostic validation utilities would make the strongest patterns easier to reuse across neighboring modules.',
  },
];

export const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;
