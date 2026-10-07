export interface Project {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  contribution: string;
  technologies: string[];
  metric: string;
  metricLabel: string;
  secondaryMetric?: string;
  metricContext: string;
  links: { label: string; url: string }[];
  details: { title: string; text: string }[];
  evidence: { label: string; url: string }[];
}

export const profile = {
  name: 'Wei-En Hsieh',
  role: 'Software Engineer',
  focus: 'Security & Systems',
  description:
    'Wei-En Hsieh, software engineer and MSc Cyber Security student at ETH Zürich. Selected work in privacy enforcement, performance optimization, and application development.',
  introduction:
    'I build software where security, reliability, and performance meet—from runtime policy enforcement to cloud scheduling and systems optimization.',
  // availability: 'Available full-time from July 2027 for 13–17 weeks.',
  email: 'ann20010929@gmail.com',
  github: 'https://github.com/annhit29',
  linkedin: 'https://www.linkedin.com/in/wei-en-hsieh/',
  orcid: 'https://orcid.org/0009-0004-1815-1015',
  resumeFile: 'resume.pdf',
  interests: [
    'LLM security',
    'site reliability engineering',
    'privacy engineering',
  ],
  // personal:
  // 'From July to September 2024, I volunteered in Sport Info & Administration at the Paris Olympic and Paralympic Games.',
  languages: [
    { name: 'Mandarin', level: 'Native' },
    { name: 'French', level: 'Bilingual' },
    { name: 'English', level: 'Professional' },
    { name: 'German', level: 'A2' },
  ],
};

export const projects: Project[] = [
  {
    id: 'gdprfs',
    category: 'Security engineering / Research',
    date: 'Sep 2025 — Apr 2026',
    title: 'GDPRFS',
    summary:
      'A FUSE file system that checks privacy policies when applications access files. The applications don’t need to be modified.',
    contribution:
      'I built the file system, added page- and row-level redaction when consent is revoked, and wrote Lex mappings between file-system events and GDPR concepts. I co-authored “Lex: Turning Laws into Enforceable Security Policies,” accepted at ACM CCS 2026, and contributed the GDPRFS case study.',
    technologies: ['Python', 'FUSE', 'Flask', 'SQLAlchemy'],
    metric: '67–79 ms',
    metricLabel: 'instrumented read latency',
    metricContext:
      'Measured across 100–10,000 files over 20 runs; this is read latency, not aggregate enforcement overhead or LLM inference time.',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/annhit29/GDPR-compliant_FS',
      },
    ],
    details: [
      {
        title: 'Implementation',
        text: 'EnfGuard evaluates policy events, and the enforcement layer applies the result: allow access, suppress it, or redact content.',
      },
      {
        title: 'Where the LLM fits',
        text: 'The repository includes an LLM analyzer for personal information and special data categories in file contents. Content analysis supports the policy system; it is separate from the policy enforcement engine.',
      },
      {
        title: 'Benchmark context',
        text: 'Repository benchmarks separately measure complete, multi-step GDPR workflows. For example, the documented enforcer-only cost is 1.52 s across a 17-step Articles 5/6 workflow; that aggregate is not the read-latency figure above.',
      },
    ],
    evidence: [
      {
        label: 'Architecture & benchmark documentation',
        url: 'https://github.com/annhit29/GDPR-compliant_FS/blob/main/gdprfs/README.md',
      },
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud systems / Reliability',
    date: 'Feb — May 2025',
    title: 'Cloud Scheduling & Reliability',
    summary:
      'A Kubernetes scheduler and CPU controller for keeping latency-sensitive services within their SLO while sharing machines with batch workloads.',
    contribution:
      'I built the interface-aware scheduler and a 100 ms adaptive controller that reallocates CPU cores between memcached and seven PARSEC workloads.',
    technologies: ['Python', 'Kubernetes', 'Docker', 'Google Cloud'],
    metric: '0%',
    metricLabel: 'SLO violations',
    metricContext: 'Across three runs under a dynamic 5K–180K QPS workload.',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/annhit29/CloudComputingArchitecture2025',
      },
    ],
    details: [],
    evidence: [],
  },
  {
    id: 'texture',
    category: 'Systems / Performance',
    date: 'Feb — Jun 2025',
    title: 'Texture synthesis',
    summary: 'A project focused on speeding up CPU-based texture synthesis.',
    contribution:
      'I worked on the AVX optimizations and automated profiling and benchmarks with perf to find bottlenecks.',
    technologies: ['C', 'AVX', 'Linux', 'perf'],
    metric: '13×',
    metricLabel: 'reported speedup',
    secondaryMetric: '7+ ops/CPU cycle',
    metricContext: 'Speedup over the project baseline.',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/annhit29/TextureSynthesisAlgoOptimization/tree/timing',
      },
    ],
    details: [
      {
        title: 'Measurement & correctness',
        text: 'Successive optimization versions are compared with a retained baseline using timing, operation counting, and generated-image comparisons to check correctness.',
      },
    ],
    evidence: [
      {
        label: 'Benchmark & comparison instructions',
        url: 'https://github.com/annhit29/TextureSynthesisAlgoOptimization/blob/timing/README.md',
      },
    ],
  },
];

export const additionalProjects: Project[] = [
  {
    id: 'certificate-authority',
    category: 'Security engineering',
    date: 'Sep — Dec 2025',
    title: 'Secure Certificate Authority',
    summary:
      'A certificate authority covering issuance, revocation, certificate revocation lists, mTLS trust boundaries, and encrypted backups.',
    contribution:
      'I implemented the CA workflows and engineered two controlled adversarial backdoors to study privilege escalation and certificate forgery.',
    technologies: ['Python', 'Bash', 'SQL', 'Docker', 'Kathará'],
    metric: '2',
    metricLabel: 'controlled attack scenarios',
    metricContext: 'Privilege escalation and certificate forgery.',
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/annhit29/AppliedSecurityLab-PKI',
      },
    ],
    details: [],
    evidence: [],
  },
  {
    id: 'wanderpals',
    category: 'Application engineering / Team project',
    date: 'Feb — Jun 2024',
    title: 'WanderPals',
    summary:
      'An Android app for planning trips with a group, built as a team project at EPFL.',
    contribution:
      'I implemented real-time suggestion search, sorting, and role-based 24-hour voting with state persisted in Firestore. I built majority-based itinerary updates and agenda state tracking.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    metric: '93%+',
    metricLabel: 'new-code coverage',
    metricContext: 'For the itinerary updates and agenda state tracking.',
    links: [
      { label: 'Source code', url: 'https://github.com/WanderPals/WanderPals' },
    ],
    details: [],
    evidence: [],
  },
];

export const publication = {
  title: 'Lex: Turning Laws into Enforceable Security Policies',
  venue: 'ACM Conference on Computer and Communications Security (CCS), 2026',
  status: 'Accepted',
  authors:
    'F. Hublet, J. Merane, J. Degelo, Wei-En Hsieh, S. Krstić, and D. Basin',
  contribution:
    'I contributed the GDPRFS case study: a FUSE-based system that maps file-system events to GDPR concepts through Lex refinements and enforces the resulting policies at runtime.',
  links: [] as { label: string; url: string }[],
};

export const experience = [
  {
    company: 'ETH Zürich · Information Security Group',
    role: 'Research Assistant · Lex AutoCompliance Platform',
    period: 'Oct 2026 — Present',
    location: 'Zurich, Switzerland',
    technologies: 'Python · MFOTL · EnfGuard',
    points: [
      'Developing an LLM-agent pipeline to automate policy refinement and Python instrumentation for runtime enforcement.',
      'Designing benchmarks to measure agent correctness, execution time, cost, and human re-audit effort.',
    ],
  },
  {
    company: 'Bouygues Telecom',
    role: 'Automation Project Manager (Software Engineering)',
    period: 'Mar — Sep 2026',
    location: 'Paris, France',
    technologies: 'Python · Camunda · BPMN · REST APIs',
    points: [
      'Automated an end-to-end Camunda workflow handling 30–50 mobile-network complaints per day, leaving only 2 manual exception paths.',
      'Integrated 4 APIs with 15 calls per complaint, retries, reusable components, and Gemini-based report analysis.',
      'Owned delivery from telecom-expert requirements to production, translating them into validated BPMN workflows.',
    ],
  },
  {
    company: 'WasteFlow',
    role: 'Full-Stack Developer',
    period: 'Jul 2023 — Jun 2024',
    location: 'Lausanne, Switzerland',
    technologies: 'React · Node.js · TypeScript · SQL',
    points: [
      'Built a React/Node.js platform for 25+ recycling-factory machines, surfacing machine failures to operators.',
      'Partnered with 10+ domain experts to refine requirements and validate the platform against factory workflows.',
      'Implemented interactive dashboards to analyze machine performance and identify operational patterns.',
    ],
  },
  {
    company: 'EPFL',
    role: 'Teaching Assistant · Human-Computer Interaction, Linear Algebra & Mechanics',
    period: 'Sep 2022 — Jun 2024',
    location: 'Lausanne, Switzerland',
    technologies: 'UI/UX · Web & mobile prototyping · Problem solving',
    points: [
      'Mentored 40+ HCI students building web and mobile UI/UX prototypes, reviewing functionality, usability, and implementation.',
      'Taught and supported students in Linear Algebra and Mechanics through exercises and problem solving.',
    ],
  },
];

export const education = [
  {
    school: 'ETH Zürich',
    degree: 'MSc Cyber Security',
    detail: 'Minor in Data Management Systems',
    coursework:
      'Advanced Systems Lab, Cloud Computing Architecture, Security Engineering',
    period: 'Sep 2024 — Expected Feb 2028',
  },
  {
    school: 'EPFL',
    degree: 'BSc Computer Science',
    detail: 'Lausanne, Switzerland',
    coursework:
      'Algorithms, Operating Systems, Parallelism and Concurrency, System Programming',
    period: 'Sep 2021 — Jul 2024',
  },
];

export const skills = [
  {
    area: 'Programming',
    items: 'Python, C, C++, Java, Scala, JavaScript, TypeScript, Kotlin, SQL',
  },
  {
    area: 'Systems & Cloud',
    items:
      'Linux/Unix, Kubernetes, Docker, Google Cloud, Git, GitHub Actions, Camunda, Bash',
  },
  {
    area: 'Security & Formal Methods',
    items:
      'PKI, TLS/mTLS, MFOTL, EnfGuard, Lex, runtime enforcement, privacy engineering',
  },
  {
    area: 'Application Development',
    items: 'React, Node.js, Flask, REST APIs, MySQL, SQLAlchemy, Firebase',
  },
];
