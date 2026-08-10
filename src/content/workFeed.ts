export type FeedKind =
  | 'project'
  | 'experience'
  | 'education'
  | 'skills'
  | 'direction'
  | 'contact';

export type MediaPlaceholder = {
  label: string;
  caption: string;
  aspectRatio?: 'wide' | 'square' | 'portrait';
  tone?: 'creme' | 'beige' | 'espresso';
};

export type FeedFact = {
  label: string;
  value: string;
};

export type FeedSkillGroup = {
  label: string;
  items: string[];
};

export type FeedPost = {
  id: string;
  kind: FeedKind;
  pinned?: boolean;
  dateLabel?: string;
  company?: string;
  role?: string;
  title: string;
  body: string;
  tags?: string[];
  media?: MediaPlaceholder;
  href?: string;
  facts?: FeedFact[];
  bullets?: string[];
  skillGroups?: FeedSkillGroup[];
  actionLabel?: string;
};

export const workFeed: FeedPost[] = [
  // Section 1: Recent Work
  {
    id: 'tco-project',
    kind: 'project',
    dateLabel: 'Nov 2025 - Aug 2026',
    company: 'Dell Technologies',
    role: 'Fullstack Software Engineer II',
    title: 'Enterprise TCO & Presentation Engine',
    body: 'A secure internal tool that turns complex vendor quotes into verified ROI calculations and client-ready presentations. I built the workflow from quote parsing through presentation generation.',
    href: '/work/enterprise-tco-tool',
    actionLabel: 'Read case study',
    tags: ['React', 'Python', 'Docker', 'SQLite', 'Okta OIDC', 'AI-assisted delivery'],
    media: {
      label: 'TCO workflow preview',
      caption: 'Reserved for the ROI wizard, quote upload flow, or generated presentation preview.',
      aspectRatio: 'wide',
      tone: 'creme',
    },
    facts: [
      { label: 'Built', value: 'ROI engine, Excel parser, PowerPoint generator' },
      { label: 'Outcome', value: 'A repeatable sales enablement workflow' },
    ],
  },
  {
    id: 'patent-project',
    kind: 'project',
    dateLabel: 'Nov 2025 - Aug 2026',
    company: 'Dell Technologies',
    role: 'Fullstack Software Engineer II & Technical Lead',
    title: 'Patent Review Assignment MVP',
    body: 'A local-AI prototype that helps a patent committee match submissions to reviewers and prepare them for unfamiliar topics. I translated one stakeholder\'s raw pain points into a believable end-to-end product direction.',
    href: '/work/patent-assignment-mvp',
    actionLabel: 'Read case study',
    tags: ['React', 'Python', 'Local LLM', 'Product prototype'],
    media: {
      label: 'Patent assignment prototype',
      caption: 'Reserved for a screenshot or recording still from the interactive reviewer-matching prototype.',
      aspectRatio: 'wide',
      tone: 'beige',
    },
    facts: [
      { label: 'Owned', value: 'Architecture, frontend prototype, data model' },
      { label: 'Led', value: 'Two interns on backend integrations' },
    ],
  },
  {
    id: 'mentorship',
    kind: 'experience',
    dateLabel: 'May 2026 - Aug 2026',
    company: 'Dell Technologies',
    role: 'Intern Mentor & Technical Lead',
    title: 'Intern Mentorship & Leadership',
    body: 'Mentored and led four summer interns across four AI/tooling projects (two Devin Skills and Patent Assignment backend), leading initial requirement-gathering meetings with product owners while running daily standups and 1:1s.',
    bullets: [
      'Led requirement-gathering meetings with product owners to define project scope and success criteria.',
      'Ran daily standups and weekly 1:1s to provide guidance and track progress.',
      'Mentored interns on technical implementation, code quality, and professional development.',
      'Delivered four successful projects across AI skills development and backend integrations.',
    ],
    tags: ['Mentorship', 'Leadership', 'Project management', 'Technical guidance'],
  },

  // Section 2: Core Engineering Work
  {
    id: 'ppdm',
    kind: 'experience',
    dateLabel: 'Feb 2023 - Jan 2024',
    company: 'Dell Technologies',
    role: 'Frontend Software Engineer I',
    title: 'PowerProtect Data Manager',
    body: 'Frontend engineering for a multicloud data protection product, where clear validation and safe interactions mattered in high-stakes administrative workflows.',
    bullets: [
      'Built and maintained UI features and end-to-end tests for Platform for Multicloud Data Protection.',
      'Developed popup modals, custom date validation, asynchronous form validation, RBAC datagrid selection, and contextual tooltips.',
      'Built PPDM 3D, a winning UI hackathon project, with three teammates.',
    ],
    tags: ['Angular', 'TypeScript', 'Cypress', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    id: 'omnia',
    kind: 'experience',
    dateLabel: 'Feb 2024 - Jan 2025',
    company: 'Dell Technologies',
    role: 'Backend Software Engineer I',
    title: 'Omnia Open Source Software',
    body: 'A backend engineering rotation focused on making bare-metal cluster installation more reliable and easier to validate.',
    bullets: [
      'Developed a dual-level validation tool using Python jsonschema and Ansible.',
      'Detected value conflicts and overlapping IP ranges across 15 critical configuration files.',
      'Reduced installation failures and improved deployment reliability.',
    ],
    tags: ['Ansible', 'Python', 'Linux'],
  },
  {
    id: 'storage-control-plane',
    kind: 'experience',
    dateLabel: 'Feb 2025 - Nov 2025',
    company: 'Dell Technologies',
    role: 'Infrastructure Software Engineer II',
    title: 'Lightning and MLPerf Benchmarking',
    body: 'Backend and infrastructure engineering for the CTO organization, focused on serviceability, node lifecycle, and getting distributed systems running reliably across environments.',
    bullets: [
      'Implemented a Serviceability API for node installation and bundle information.',
      'Investigated namespace coexistence and CRD interaction risks.',
      'Built node removal and post-removal cleanup strategies.',
      'Integrated a Python API into Lightning while debugging Ubuntu and Juju Canonical Kubernetes deployment issues.',
    ],
    tags: ['Kubernetes', 'Golang', 'Python', 'Linux'],
  },

  // Section 3: Early Career & Education
  {
    id: 'ibm',
    kind: 'experience',
    dateLabel: 'May 2022 - Aug 2022',
    company: 'IBM',
    role: 'Backend Engineer',
    title: 'Software Engineering Intern',
    body: 'Modernized the IBM Netezza Performance Server experience for database users by expanding SQL capabilities and making operational history easier to analyze.',
    bullets: [
      'Developed a C++ user-defined function invoked through SQL expressions.',
      'Used Python tooling including argparse, tabulate, datetime, and pandas.',
      'Improved auto-pause/resume history analysis through detailed and summary tables.',
      'Tested in containers and demonstrated workflows with Jupyter and nzpy.',
    ],
    tags: ['C++', 'Python', 'SQL', 'Jupyter', 'Git'],
    media: {
      label: 'Netezza work sample',
      caption: 'Reserved for a sanitized data-table or notebook image.',
      aspectRatio: 'wide',
      tone: 'creme',
    },
  },
  {
    id: 'liberty-mutual',
    kind: 'experience',
    dateLabel: 'May 2021 - Aug 2021',
    company: 'Liberty Mutual Insurance',
    role: ' Backend Engineer',
    title: 'Software Engineering Intern',
    body: 'Designed and tested a filing-system data pipeline that replaced a lengthy manual process with an automated flow for thousands of claims filings.',
    bullets: [
      'Chained three JavaScript AWS Lambdas to ingest, transform, and validate filings.',
      'Built a Jest test suite with approximately 92% average coverage.',
      'Improved maintainability, accuracy, and speed to market for the claims filing system.',
    ],
    tags: ['JavaScript', 'AWS Lambda', 'Jest', 'Axios', 'Postman', 'Git'],
    media: {
      label: 'Filing pipeline sketch',
      caption: 'Reserved for a diagram of the Lambda ingestion and validation flow.',
      aspectRatio: 'wide',
      tone: 'beige',
    },
  },
  {
    id: 'education',
    kind: 'education',
    dateLabel: 'Aug 2019 - Dec 2022',
    title: 'University of Massachusetts Amherst',
    body: 'College of Information and Computer Sciences foundation with a business minor and a strong academic record.',
    bullets: [
      'Bachelor of Science in Computer Science',
      'Minor in Business',
      'Magna cum laude',
      'GPA: 3.97 / 4.0',
    ],
    media: {
      label: 'UMass Amherst',
      caption: 'Reserved for a campus, diploma, or abstract academic image.',
      aspectRatio: 'wide',
      tone: 'beige',
    },
  },
];
