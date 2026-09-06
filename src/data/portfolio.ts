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
    'I’m a master’s student in Cyber Security at ETH Zürich. I studied Computer Science at EPFL before that. My recent projects involve file-system privacy policies, C/C++ optimization, and Android development.',
  email: 'ann20010929@gmail.com',
  github: 'https://github.com/annhit29',
  linkedin: 'https://www.linkedin.com/in/wei-en-hsieh/',
  resumeFile: 'resume.pdf',
  interests: [
    'LLM security',
    'Site reliability engineering',
    'Privacy engineering',
  ],
  about:
    'At EPFL, I helped 40+ students develop web and mobile prototypes as a teaching assistant for Human-Computer Interaction.',
  personal:
    'I also volunteered at the Paris 2024 Olympic and Paralympic Games, working in sport information and athlete operations for Marathon and Table Tennis.',
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
    date: '2025–2026',
    title: 'GDPRFS',
    summary:
      'A FUSE file system that checks privacy policies when applications access files. The applications don’t need to be modified.',
    contribution:
      'I built the file system, added page- and row-level redaction when consent is revoked, and wrote Lex mappings between file-system events and GDPR concepts.',
    technologies: ['Python', 'FUSE', 'SQL', 'JavaScript'],
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
        text: 'Place enforcement at the FUSE boundary so applications can keep their existing file-access behavior. EnfGuard evaluates policy events and the enforcement layer applies the result.',
      },
      {
        title: 'Where the LLM fits',
        text: 'The repository includes an LLM analyzer for personal information and special data categories in file contents. Content analysis supports the policy system; it is separate from the policy enforcement engine.',
      },
      {
        title: 'Benchmark context',
        text: 'The 0–80 ms range is reported in my résumé and excludes LLM inference. The repository also reports multi-step workflow timings; those are a different measurement and should not be treated as equivalent or as an end-to-end latency guarantee.',
      },
      {
        title: 'Research contribution',
        text: 'Contributed the GDPRFS case study to research accepted at ACM CCS 2026, as listed in my résumé.',
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
    date: '2025',
    title: 'Texture synthesis',
    summary:
      'A C/C++ texture synthesis project, optimized on Linux using AVX intrinsics.',
    contribution:
      'I worked on the AVX optimizations and automated profiling and benchmarks with perf to find bottlenecks.',
    technologies: ['C / C++', 'AVX', 'Linux', 'perf'],
    metric: '13×',
    metricLabel: 'reported speedup',
    metricContext: 'Project baseline comparison; configuration-specific.',
    repository: {
      url: 'https://github.com/annhit29/TextureSynthesisAlgoOptimization/tree/timing',
      available: true,
    },
    details: [
      {
        title: 'Implementation',
        text: 'Use profiling to guide optimization, then apply AVX intrinsics to CPU computation. The project retains a baseline and successive optimization versions for comparison.',
      },
      {
        title: 'Measurement & correctness',
        text: 'The repository documents timing, operation counting, and comparing generated images against baseline output. My résumé reports 13× speedup and 7+ operations per cycle; it does not specify the exact hardware, compiler, or input for those figures.',
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
    date: '2024',
    title: 'WanderPals',
    summary:
      'An Android app for planning trips with a group, built as a team project at EPFL.',
    contribution:
      'My work covered Firebase backend services, automated tests, and the CI/CD pipelines.',
    technologies: ['Kotlin', 'Firebase', 'CI/CD', 'Android'],
    metric: '≈90%',
    metricLabel: 'automated test coverage',
    metricContext: 'Reported project coverage, not an uptime measurement.',
    repository: {
      url: 'https://github.com/WanderPals/WanderPals',
      available: true,
    },
    details: [
      {
        title: 'My part in the team',
        text: 'My contributions focused on backend services and delivery pipelines, alongside automated testing. WanderPals is a team project; the full application reflects the work of multiple contributors.',
      },
      {
        title: 'Test coverage',
        text: 'Automated checks help catch regressions during development. Approximately 90% coverage describes the code exercised by tests, rather than production availability or proof that every behavior is correct.',
      },
    ],
    evidence: [
      {
        label: 'Project architecture & source',
        url: 'https://github.com/WanderPals/WanderPals#readme',
      },
    ],
  },
];

export const enforcementFlow = [
  { label: 'Application', detail: 'Existing file access' },
  { label: 'FUSE + policies', detail: 'Intercept & evaluate' },
  { label: 'Enforced result', detail: 'Allow, suppress, or redact' },
];

export const experience = [
  {
    company: 'Bouygues Telecom',
    role: 'Automation Project Manager (Software Engineering)',
    period: 'Mar — Sep 2026',
    location: 'Paris, France',
    technologies: 'Python · Camunda · BPMN',
    points: [],
  },
  {
    company: 'WasteFlow',
    role: 'Full-Stack Developer',
    period: 'Jul 2023 — Jun 2024',
    location: 'Lausanne, Switzerland',
    technologies: 'React · Node.js · TypeScript · SQL',
    points: [
      'Built a recycling-factory data application evaluated by 10+ SMEs, with dashboards for machine data and operational analysis.',
      'Added features and streamlined deployment pipelines with GitHub Actions.',
    ],
  },
  {
    company: 'EPFL',
    role: 'Teaching Assistant · Human-Computer Interaction',
    period: 'Feb — Jun 2024',
    location: 'Lausanne, Switzerland',
    technologies: 'Prototyping · Figma · Frontend integration',
    points: [
      'Supervised 40+ students developing web and mobile UI/UX prototypes, and contributed to specifications and frontend integration.',
    ],
  },
];

export const education = [
  {
    school: 'ETH Zürich',
    degree: 'MSc Cyber Security',
    detail: 'Minor in Data Management Systems',
    period: '2024 — Expected Feb 2028',
  },
  {
    school: 'EPFL',
    degree: 'BSc Computer Science',
    detail: 'Algorithms, operating systems & concurrency',
    period: '2021 — 2024',
  },
];

export const skills = [
  { area: 'Systems & performance', items: 'C / C++, Python, Linux, AVX, perf' },
  {
    area: 'Security & data',
    items: 'FUSE, runtime policies, SQL, privacy enforcement',
  },
  {
    area: 'Applications & delivery',
    items:
      'TypeScript, React, Node.js, Kotlin, Firebase, GitHub Actions, Docker',
  },
];
