import type { ReactNode } from 'react';
import {
  education,
  experience,
  additionalProjects,
  profile,
  projects,
  publication,
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
      ) : id === 'cloud' ? (
        <svg viewBox="0 0 350 180" fill="none">
          <path d="M34 132h282" stroke="#a7b7b1" />
          <path
            d="M48 118 95 91l45 13 48-55 45 31 68-42"
            stroke="#52725a"
            strokeWidth="3"
          />
          <path
            d="M48 128V77m63 51V61m63 67V85m63 43V51m63 77V68"
            stroke="#b9c8c1"
            strokeDasharray="4 5"
          />
          <circle cx="188" cy="49" r="6" fill="#52725a" />
          <text
            x="175"
            y="159"
            textAnchor="middle"
            fill="#536c5b"
            fontSize="11"
            fontFamily="monospace"
          >
            adaptive scheduling
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
      ) : id === 'certificate-authority' ? (
        <svg viewBox="0 0 350 180" fill="none">
          <path
            d="m175 31 49 19v37c0 33-49 61-49 61s-49-28-49-61V50l49-19Z"
            fill="#e1e9e2"
            stroke="#6c8b72"
            strokeWidth="2"
          />
          <circle cx="175" cy="79" r="15" fill="#fafcf9" stroke="#6c8b72" />
          <path
            d="M175 94v25m0-10h18m-18 0-12 12"
            stroke="#6c8b72"
            strokeWidth="3"
            strokeLinecap="round"
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

function ProjectEntry({
  project,
  nested = false,
}: {
  project: Project;
  nested?: boolean;
}) {
  const ProjectTitle = nested ? 'h4' : 'h3';

  return (
    <article
      className={`project-entry project-entry--${project.id}`}
      aria-labelledby={`${project.id}-title`}
    >
      <ProjectArtwork id={project.id} />
      <div className="project-body">
        <div className="project-heading">
          <p className="entry-date">{project.date}</p>
          <ProjectTitle id={`${project.id}-title`}>
            {project.title}
          </ProjectTitle>
          <p className="project-kind">{project.category}</p>
        </div>
        <div className="project-content">
          <p className="project-summary">
            <strong>Problem.</strong> {project.summary}
          </p>
          <p>
            <strong>My contribution.</strong> {project.contribution}
          </p>
          <p className="project-result">
            <strong>{project.metric}</strong> {project.metricLabel}{' '}
            {project.secondaryMetric && (
              <>
                <strong>{project.secondaryMetric}</strong>.{' '}
              </>
            )}
            <span>{project.metricContext}</span>
          </p>
          <ul className="technology-list" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-source" aria-label={`${project.title} links`}>
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <ExternalLink key={link.url} href={link.url}>
                  {link.label}
                  <span className="sr-only"> for {project.title}</span>
                </ExternalLink>
              ))
            ) : (
              <span>No public code or demo available</span>
            )}
          </div>
          {project.details.length > 0 && (
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
                {project.evidence.map((link) => (
                  <ExternalLink key={link.url} href={link.url}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </details>
          )}
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
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#bio">Bio</a>
          <span aria-hidden="true">/</span>
          <a href="#projects">Projects</a>
          <span aria-hidden="true">/</span>
          <a href="#publications">Publications</a>
          <span aria-hidden="true">/</span>
          <a href="#experience">Experience</a>
          <span aria-hidden="true">/</span>
          <a href="#education">Education</a>
        </nav>
        <main id="main" tabIndex={-1}>
          <section
            className="intro section"
            id="bio"
            aria-labelledby="identity-name"
          >
            <header className="identity">
              <h1 id="identity-name">{profile.name}</h1>
              <p className="identity-role">
                {profile.role} <span aria-hidden="true">·</span>{' '}
                <span className="identity-focus">{profile.focus}</span>
              </p>
              <p className="identity-school">MSc Cyber Security · ETH Zürich</p>
            </header>
            <div className="bio-content">
              <p className="intro-text">{profile.introduction}</p>
              <p className="bio-interests">
                Curious about{' '}
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
              {/* <p className="bio-personal">{profile.personal}</p> */}
              <dl className="languages">
                {profile.languages.map((language) => (
                  <div key={language.name}>
                    <dt>{language.name}</dt>
                    <dd>{language.level}</dd>
                  </div>
                ))}
              </dl>
              <div className="hero-actions">
                <a
                  className="resume-link"
                  href={resumeUrl}
                  download="Wei-En-Hsieh-Resume.pdf"
                >
                  Download résumé <span aria-hidden="true">↗</span>
                </a>
                <div className="intro-links">
                  <ExternalLink href={profile.github}>GitHub</ExternalLink>
                  <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                  <ExternalLink href={profile.orcid}>ORCID</ExternalLink>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="section"
            aria-labelledby="projects-heading"
          >
            <div className="section-heading">
              <h2 id="projects-heading">Projects</h2>
              <span className="section-aside">Selected work</span>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectEntry key={project.id} project={project} />
              ))}
            </div>
            <section
              className="additional-projects-section"
              aria-labelledby="additional-projects-heading"
            >
              <div className="section-heading additional-heading">
                <h3 id="additional-projects-heading">Additional projects</h3>
              </div>
              <div className="project-grid additional-projects">
                {additionalProjects.map((project) => (
                  <ProjectEntry key={project.id} project={project} nested />
                ))}
              </div>
            </section>
          </section>

          <section
            id="publications"
            className="section"
            aria-labelledby="publications-heading"
          >
            <div className="section-heading">
              <h2 id="publications-heading">Publications</h2>
              <span className="section-aside">{publication.status}</span>
            </div>
            <article className="publication-entry">
              <p className="publication-venue">{publication.venue}</p>
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors}</p>
              <p>{publication.contribution}</p>
              {publication.links.length > 0 && (
                <div className="project-source">
                  {publication.links.map((link) => (
                    <ExternalLink key={link.url} href={link.url}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              )}
            </article>
          </section>

          <section
            id="experience"
            className="section"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading">Experience</h2>
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
            id="education"
            className="section"
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading">Education</h2>
            <div className="education-grid">
              {education.map((item) => (
                <article className="education-entry" key={item.school}>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                  <p className="education-detail">{item.detail}</p>
                  <p className="education-coursework">{item.coursework}</p>
                  <p className="entry-date">{item.period}</p>
                </article>
              ))}
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
            <h2 id="contact-heading">Contact</h2>
            {/* <p className="contact-availability">{profile.availability}</p> */}
            <p>Have something in mind? I’d be happy to hear from you.</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </section>
        </main>
        <footer className="site-footer">
          <p>{profile.name}</p>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </>
  );
}
