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
  metricContext: string;
  repository: { url: string; available: boolean };
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
    'I build software for privacy enforcement, workflow automation, and applications, with a focus on how systems behave in practice.',
  // availability: 'Available full-time from July 2027 for 13–17 weeks.',
  email: 'ann20010929@gmail.com',
  github: 'https://github.com/annhit29',
  linkedin: 'https://www.linkedin.com/in/wei-en-hsieh/',
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
    metric: '0–80 ms',
    metricLabel: 'reported enforcement overhead',
    metricContext: 'Across 100–10,000 files. Excludes LLM inference.',
    repository: {
      url: 'https://github.com/annhit29/GDPR-compliant_FS',
      available: true,
    },
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
        text: 'The repository also measures multi-step workflows separately from the enforcement overhead shown above.',
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
    metricContext:
      '7+ operations per CPU cycle. Speedup over the project baseline.',
    repository: {
      url: 'https://github.com/annhit29/TextureSynthesisAlgoOptimization/tree/timing',
      available: true,
    },
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
  {
    id: 'wanderpals',
    category: 'Application engineering / Team project',
    date: 'Feb — Jun 2024',
    title: 'WanderPals',
    summary:
      'An Android app for planning trips with a group, built as a team project at EPFL.',
    contribution:
      'Features and services for authentication, payments, data synchronization, and group coordination.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'GitHub Actions'],
    metric: '≈90%',
    metricLabel: 'automated test coverage',
    metricContext:
      'Unit and Android integration tests automated through GitHub Actions.',
    repository: {
      url: 'https://github.com/WanderPals/WanderPals',
      available: true,
    },
    details: [],
    evidence: [],
  },
];

export const experience = [
  {
    company: 'ETH Zürich · Information Security Group',
    role: 'Incoming Research Assistant',
    period: 'Oct 2026 — Feb 2027',
    location: 'Zurich, Switzerland',
    technologies: 'Python',
    points: [
      'Selected to build an LLM-powered pipeline for automated Python instrumentation and compliance auditing.',
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
      'Orchestrated 4 APIs with 15 calls per complaint, retries, reusable components, and Gemini-based report analysis.',
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
    period: 'Feb — Jun 2024',
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
    items: 'Python, C, C++, Java, JavaScript, TypeScript, Kotlin, SQL',
  },
  {
    area: 'Technologies',
    items:
      'Linux/Unix, Docker, Git, GitHub Actions, Bash, React.js, Node.js, Flask, MySQL, Firebase',
  },
];
