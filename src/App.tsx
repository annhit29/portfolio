import type { ReactNode } from 'react';
import {
  education,
  enforcementFlow,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from './data/portfolio';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function IdentityMark() {
  return (
    <svg
      className="identity-mark"
      viewBox="0 0 180 150"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M26 110 55 42l34 68 34-68 30 68"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m43 110 28-49 34 49 32-49"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 125c34-9 83-9 132 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="143" cy="28" r="8" fill="var(--accent-soft)" />
      <path
        d="M143 15v7m0 12v7m-13-13h7m12 0h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectArtwork({ id }: { id: string }) {
  return (
    <div className={`project-art project-art--${id}`} aria-hidden="true">
      {id === 'gdprfs' ? (
        <svg viewBox="0 0 700 190" fill="none">
          <path
            d="M160 96h108m164 0h108"
            stroke="#8ca69a"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <rect
            x="79"
            y="51"
            width="80"
            height="90"
            rx="5"
            fill="#fafcf9"
            stroke="#a3b5a7"
          />
          <path
            d="M99 75h38m-38 13h38m-38 13h24m-24 13h31"
            stroke="#9aafa0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="268"
            y="43"
            width="164"
            height="106"
            rx="9"
            fill="#fcfdfb"
            stroke="#8ca69a"
          />
          <path
            d="m350 61 20 8v17c0 14-20 24-20 24s-20-10-20-24V69l20-8Z"
            fill="#d7e5d8"
            stroke="#52725a"
            strokeWidth="1.5"
          />
          <path
            d="m341 84 6 6 13-14"
            stroke="#52725a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="350"
            y="130"
            textAnchor="middle"
            fill="#405f49"
            fontSize="12"
            fontFamily="monospace"
          >
            FUSE + policies
          </text>
          <rect
            x="540"
            y="51"
            width="80"
            height="90"
            rx="5"
            fill="#fafcf9"
            stroke="#a3b5a7"
          />
          <path
            d="M560 75h38m-38 13h38"
            stroke="#9aafa0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M560 102h30m-30 13h38" stroke="#52725a" strokeWidth="6" />
          <text
            x="119"
            y="169"
            textAnchor="middle"
            fill="#536c5b"
            fontSize="11"
            fontFamily="monospace"
          >
            file access
          </text>
          <text
            x="580"
            y="169"
            textAnchor="middle"
            fill="#536c5b"
            fontSize="11"
            fontFamily="monospace"
          >
            enforced result
          </text>
        </svg>
      ) : id === 'texture' ? (
        <svg viewBox="0 0 350 180" fill="none">
          <defs>
            <pattern
              id="texture-tile"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <rect width="22" height="22" fill="#e4dbeb" />
              <path
                d="M-11 11 0 0l22 22 11-11M0 22 22 0"
                stroke="#b19aba"
                strokeWidth="7"
              />
            </pattern>
          </defs>
          <rect
            x="49"
            y="67"
            width="47"
            height="47"
            rx="3"
            fill="url(#texture-tile)"
            stroke="#ac95b5"
          />
          <path
            d="M111 90h43m-6-5 6 5-6 5"
            stroke="#927b9b"
            strokeWidth="1.5"
          />
          <rect
            x="174"
            y="31"
            width="119"
            height="119"
            rx="4"
            fill="url(#texture-tile)"
            stroke="#ac95b5"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 350 180" fill="none">
          <path
            d="m0 130 68-72 56 54 39-37 73 70 53-66 61 39v62H0Z"
            fill="#e1e8e8"
          />
          <path
            d="M65 120c32 34 41-51 92-43s21 73 92 38"
            stroke="#73979f"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <rect
            x="136"
            y="26"
            width="78"
            height="131"
            rx="12"
            fill="#fafcfc"
            stroke="#809ba0"
            strokeWidth="1.5"
          />
          <path
            d="M162 35h26"
            stroke="#809ba0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="145" y="48" width="60" height="61" rx="4" fill="#e0ebea" />
          <path
            d="m145 99 19-26 14 19 11-12 16 19"
            stroke="#83a29f"
            strokeWidth="1.5"
          />
          <path
            d="M174 57a7 7 0 0 1 7 7c0 6-7 13-7 13s-7-7-7-13a7 7 0 0 1 7-7Z"
            fill="#65857f"
          />
          <circle cx="174" cy="64" r="2" fill="#fff" />
          <path
            d="M148 122h38m-38 9h26"
            stroke="#a6babb"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="65" cy="120" r="5" fill="#65857f" />
          <circle cx="249" cy="115" r="5" fill="#65857f" />
        </svg>
      )}
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article
      className={`project-entry project-entry--${project.id}`}
      aria-labelledby={`${project.id}-title`}
    >
      <ProjectArtwork id={project.id} />
      <div className="project-body">
        <div className="project-heading">
          <p className="entry-date">{project.date}</p>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-kind">{project.category}</p>
        </div>
        <div className="project-content">
          <p className="project-summary">{project.summary}</p>
          <p>{project.contribution}</p>
          <p className="project-result">
            <strong>{project.metric}</strong> {project.metricLabel}.{' '}
            <span>{project.metricContext}</span>
          </p>
          <ul className="technology-list" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-source">
            {project.repository.available ? (
              <ExternalLink href={project.repository.url}>
                Source code<span className="sr-only"> for {project.title}</span>
              </ExternalLink>
            ) : (
              <span>Repository not publicly available</span>
            )}
          </div>
          <details>
            <summary>
              Technical notes
              <span className="notes-indicator" aria-hidden="true" />
            </summary>
            <div className="engineering-notes">
              {project.details.map((detail) => (
                <div key={detail.title}>
                  <h4>{detail.title}</h4>
                  <p>{detail.text}</p>
                </div>
              ))}
              {project.id === 'gdprfs' && (
                <figure className="enforcement-flow">
                  <figcaption>File-access flow, simplified</figcaption>
                  <ol>
                    {enforcementFlow.map((step) => (
                      <li key={step.label}>
                        <strong>{step.label}.</strong> {step.detail}.
                      </li>
                    ))}
                  </ol>
                </figure>
              )}
              {project.evidence.map((link) => (
                <ExternalLink key={link.url} href={link.url}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="portfolio-layout" id="top">
        <header className="identity">
          <a
            className="identity-home"
            href="#top"
            aria-label="Wei-En Hsieh, back to top"
          >
            <IdentityMark />
          </a>
          <h1>{profile.name}</h1>
          <p className="identity-role">{profile.role}</p>
          <p className="identity-focus">{profile.focus}</p>
          <p className="identity-school">
            <span>MSc Cyber Security</span> <span>ETH Zürich</span>
          </p>
          <div className="intro-links">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <a
            className="resume-link"
            href={resumeUrl}
            download="Wei-En-Hsieh-Resume.pdf"
          >
            Download résumé <span aria-hidden="true">↗</span>
          </a>
        </header>
        <div className="content-column">
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#bio">Bio</a>
            <span aria-hidden="true">/</span>
            <a href="#projects">Projects</a>
            <span aria-hidden="true">/</span>
            <a href="#experience">Experience</a>
            <span aria-hidden="true">/</span>
            <a href="#about">About</a>
          </nav>
          <main id="main" tabIndex={-1}>
            <section
              className="intro section"
              id="bio"
              aria-labelledby="intro-title"
            >
              <h2 id="intro-title">
                bio
              </h2>
              <div className="bio-content">
                <p className="intro-greeting">Hi, I’m Wei-En.</p>
                <p className="intro-text">{profile.introduction}</p>
                <p className="bio-interests">
                  Currently curious about{' '}
                  {profile.interests.map((interest, index) => (
                    <span key={interest}>
                      {index > 0 &&
                        (index === profile.interests.length - 1
                          ? ', and '
                          : ', ')}
                      <span className="interest-name">{interest}</span>
                    </span>
                  ))}
                  .
                </p>
              </div>
            </section>

            <section
              id="projects"
              className="section"
              aria-labelledby="projects-heading"
            >
              <div className="section-heading">
                <h2 id="projects-heading">
                  projects
                </h2>
                <span className="section-aside">Selected work / 2024–2026</span>
              </div>
              <div className="project-grid">
                {projects.map((project) => (
                  <ProjectEntry key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section
              id="experience"
              className="section"
              aria-labelledby="experience-heading"
            >
              <h2 id="experience-heading">
                experience
              </h2>
              {experience.map((job) => (
                <article className="experience-entry" key={job.company}>
                  <div>
                    <h3>{job.company}</h3>
                    <p className="entry-date">{job.period}</p>
                    <p className="entry-location">{job.location}</p>
                  </div>
                  <div>
                    <h4>{job.role}</h4>
                    {job.points.length > 0 && (
                      <ul>
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <p className="project-tools">{job.technologies}</p>
                  </div>
                </article>
              ))}
            </section>

            <section
              id="about"
              className="section about"
              aria-labelledby="about-heading"
            >
              <h2 id="about-heading">
                about
              </h2>
              <div className="about-columns">
                <div className="about-personal">
                  <p>{profile.about}</p>
                  <p>{profile.personal}</p>
                  <p className="interests">
                    Interests: {profile.interests.join(', ')}.
                  </p>
                  <dl className="languages">
                    {profile.languages.map((language) => (
                      <div key={language.name}>
                        <dt>{language.name}</dt>
                        <dd>{language.level}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="education">
                  <h3>Education</h3>
                  {education.map((item) => (
                    <article key={item.school}>
                      <h4>{item.school}</h4>
                      <p>{item.degree}</p>
                      <p className="education-detail">{item.detail}</p>
                      <p className="entry-date">{item.period}</p>
                    </article>
                  ))}
                </div>
              </div>
              <details className="skills">
                <summary>
                  Languages & tools I’ve used
                  <span className="notes-indicator" aria-hidden="true" />
                </summary>
                <div className="engineering-notes">
                  <dl>
                    {skills.map((skill) => (
                      <div key={skill.area}>
                        <dt>{skill.area}</dt>
                        <dd>{skill.items}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
            </section>

            <section className="contact" aria-labelledby="contact-heading">
              <h2 id="contact-heading">
                contact
              </h2>
              <p>Have something in mind? I’d be happy to hear from you.</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </section>
          </main>
          <footer className="site-footer">
            <p>{profile.name}</p>
            <a href="#top">Back to top</a>
          </footer>
        </div>
      </div>
    </>
  );
}
