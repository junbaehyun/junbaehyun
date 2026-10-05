'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    flag: '🇰🇿',
    title: 'Kazakhstan Dictionary',
    stack: 'Flutter · Dart · HTTP · Auth Architecture',
    description:
      'A multilingual dictionary concept separating shared vocabulary from user-owned personal words, with server-side authorization boundaries.',
    href: 'https://github.com/junbaehyun/iOS_kazakhstan_dictionary',
  },
  {
    flag: '🇧🇩',
    title: 'Media Monitoring Automation',
    stack: 'Python · RSS · Google Sheets · Google Cloud',
    description:
      'An automated news-monitoring workflow that collects RSS articles, structures recurring research data, and sends results into Google Sheets.',
    href: 'https://github.com/junbaehyun/bangladesh-media-monitoring',
  },
  {
    flag: '💍',
    title: 'Personalized Invitation',
    stack: 'Interactive Web · Data-driven UI · GitHub Pages',
    description:
      'A real-world personalized invitation experience with guest-specific content, responsive interaction, media, and data-driven presentation.',
    href: 'https://junbaehyun.github.io/invitation/',
  },
  {
    flag: '🌏',
    title: 'KORBAN Consulting Web',
    stack: 'Web · Business Information · International Operations',
    description:
      'A multi-page implementation translating Korea–Bangladesh consulting and operational services into clear digital information architecture.',
    href: 'https://github.com/junbaehyun/korbanconsulting',
  },
];

const experience = [
  {
    years: '2026 — Now',
    company: 'Operation Mercy Kazakhstan',
    role: 'Developer',
    text: 'Web and mobile application maintenance, multilingual structured content, internal technical support, testing, and digital workflow improvement.',
  },
  {
    years: '2025 — 2026',
    company: 'KORBAN',
    role: 'Manager · Digital & International Operations',
    text: 'Web implementation, workflow automation, Korea–Bangladesh logistics, customer operations, and cross-border partner coordination.',
  },
  {
    years: '2022 — 2024',
    company: 'Central Asia Research + TCK / NH NongHyup',
    role: 'Research & Customer Operations',
    text: 'Kazakhstan media research, digital content, foreign-exchange customer support, and English-language communication.',
  },
];

const countries = [
  ['🇰🇷', 'Korea', 'Education · business · technology'],
  ['🇦🇺', 'Australia', 'Hospitality Certificate III'],
  ['🇧🇩', 'Bangladesh', 'Humanitarian · consulting · logistics'],
  ['🇰🇿', 'Kazakhstan', 'Research · development · cross-cultural work'],
];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.25]);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />

      <section className="hero section">
        <motion.div className="hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p
            className="kicker"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            SOFTWARE · DIGITAL SYSTEMS · INTERNATIONAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            JUNBAE
            <br />
            <span>HYUN</span>
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            I build practical digital systems for people and organizations working
            across <strong>languages, countries, and cultures.</strong>
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a className="button primary" href="#projects">View projects</a>
            <a className="button" href="https://github.com/junbaehyun" target="_blank" rel="noreferrer">GitHub ↗</a>
          </motion.div>
        </motion.div>
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
      </section>

      <section className="section statement-section">
        <Reveal>
          <p className="section-label">Professional positioning</p>
          <h2 className="statement">
            Technology <span>×</span> International Operations <span>×</span> Cross-cultural Service
          </h2>
          <p className="lead">
            Software is my primary profession. International operations, Korean language
            education, and cross-cultural experience expand where that technology can create value.
          </p>
        </Reveal>
        <div className="capabilities">
          {['React / Next.js', 'Flutter / Dart', 'XML / JSON', 'Firebase', 'Python', 'Automation', 'Git / Vercel', 'Google Cloud'].map((item, index) => (
            <Reveal key={item} delay={index * 0.04} className="pill-wrap">
              <span className="pill">{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section journey-section">
        <Reveal>
          <p className="section-label">International journey</p>
          <h2>One career.<br /><span>Multiple contexts.</span></h2>
        </Reveal>
        <div className="journey-grid">
          {countries.map(([flag, country, note], index) => (
            <Reveal key={country} delay={index * 0.08} className="country-card">
              <div className="flag">{flag}</div>
              <h3>{country}</h3>
              <p>{note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2>From operations to <span>digital systems.</span></h2>
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.years} delay={index * 0.08} className="timeline-row">
              <div className="timeline-year">{item.years}</div>
              <div>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal>
          <p className="section-label">Selected projects</p>
          <h2>Real problems.<br /><span>Working systems.</span></h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="project-card">
              <div className="project-flag">{project.flag}</div>
              <p className="stack">{project.stack}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">Explore project ↗</a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section focus-section">
        <Reveal>
          <p className="section-label">Next chapter</p>
          <h2>
            Build useful systems.<br />
            <span>Serve people across cultures.</span>
          </h2>
          <p className="lead">
            Open to software, digital systems, application integration, NGO technology,
            and technical operations roles internationally.
          </p>
          <div className="target-flags">🇨🇦 🇦🇺 🇬🇧 🇳🇿 🇪🇺</div>
          <div className="hero-actions">
            <a className="button primary" href="mailto:junbae3hyun@gmail.com">Contact me</a>
            <a className="button" href="https://github.com/junbaehyun" target="_blank" rel="noreferrer">github.com/junbaehyun ↗</a>
          </div>
        </Reveal>
      </section>

      <footer>
        <span>Junbae Hyun</span>
        <span>Technology × International Operations × Cross-cultural Service</span>
      </footer>
    </main>
  );
}
