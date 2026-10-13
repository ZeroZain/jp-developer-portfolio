import { useEffect, useRef, useState } from 'react';
import { FaJava } from 'react-icons/fa6';
import {
  SiCss,
  SiDotnet,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from 'react-icons/si';
import profileBlack from '../Profile/Profile-Black.png';
import profileWhite from '../Profile/Profile-White.png';
import cvsuAthleticaImage from '../Works/cvsu_athletica.png';
import gameDevImage from '../Works/game_dev.png';

const portfolioConfig = {
  githubUrl: 'https://github.com/ZeroZain',
  linkedinUrl: 'https://www.linkedin.com/in/john-patrick-villanueva-b84569371/',
  email: 'jp.ovillanueva17@gmail.com',
  bio: "I'm John Patrick Villanueva, also known as JP, a Computer Science graduate interested in building useful software and interactive experiences. My project experience includes MERN-stack web development, API integration, authentication, and Unity game development. I enjoy learning new technologies, solving technical problems, and turning ideas into working applications.",
};

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss, color: '#1572b6' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'Java', icon: FaJava, color: '#ed8b00' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'C#', icon: SiDotnet, color: '#512bd4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Express.js', icon: SiExpress, color: 'currentColor' },
  { name: 'React.js', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
];

const projects = [
  {
    id: 'squarehub',
    name: 'IT SquareHub',
    context: 'Full-Stack Developer (OJT), July–August 2025',
    description:
      'Contributed to a web-based ID generation system, including work on user authentication and diagnosing login issues. The work included a MERN-stack login REST API and admin-side integration.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
    accent: 'cyan',
    nda: true,
  },
  {
    id: 'cvsu-athletica',
    name: 'CVSU ATHLETICA — University Sports Website',
    context: 'Team project, September 2024–January 2025',
    description:
      'Helped turn the team\'s original concept and story into a university sports platform. JP\'s primary responsibility was frontend development while contributing within a MERN-stack project.',
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    accent: 'violet',
    image: cvsuAthleticaImage,
  },
  {
    id: 'code-red',
    name: 'Code Red: Outbreak — 3D Survival Game',
    context: 'Lead Developer / Back-End & AI Programmer, April–June 2025',
    description:
      'Developed core gameplay systems such as combat, upgrades, and progression, and implemented enemy AI using Unity NavMeshAgent. Used ScriptableObjects for modular game architecture.',
    technologies: ['C#', 'Unity', 'NavMeshAgent', 'ScriptableObjects'],
    url: 'https://drive.google.com/drive/folders/1aO-sqK_EM_ivyZJlcSDW0Gi63S0nPSs0?usp=sharing',
    accent: 'blue',
    image: gameDevImage,
  },
];

const sectionOrder = ['about', 'projects', 'contact'];

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀' : '☾'}
      </span>
    </button>
  );
}

function ProjectVisual({ project }) {
  if (project.nda) {
    return (
      <div className={`project-visual project-visual--${project.accent} project-visual--nda`} aria-label={`${project.name} visual withheld under NDA`}>
        <span className="project-visual__lock" aria-hidden="true">NDA</span>
        <strong>Confidential project</strong>
        <small>Details withheld by agreement</small>
      </div>
    );
  }

  return (
    <div className={`project-visual project-visual--${project.accent}`} aria-label={`${project.name} preview`}>
      <img src={project.image} alt="" />
      <span>{project.name}</span>
    </div>
  );
}

function ParticleNetworkBackground({ reducedMotion, theme }) {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const hero = canvas.parentElement;
    if (!hero) return undefined;

    const context = canvas.getContext('2d');

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = hero.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      buildPoints(rect.width, rect.height);
    };

    const buildPoints = (width, height) => {
      const quantity = Math.min(150, Math.max(70, Math.floor((width * height) / 6500)));
      const points = [];
      for (let i = 0; i < quantity; i += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius: 0.8 + Math.random() * 1.7,
          hue: i % 2 === 0 ? 'cyan' : 'violet',
        });
      }
      pointsRef.current = points;
    };

    const draw = () => {
      const width = hero.clientWidth;
      const height = hero.clientHeight;
      context.clearRect(0, 0, width, height);
      context.fillStyle = theme === 'dark' ? 'rgba(2, 6, 14, 0.94)' : 'rgba(232, 240, 251, 0.9)';
      context.fillRect(0, 0, width, height);

      const motionScale = reducedMotion ? 0.35 : 1;
      for (const point of pointsRef.current) {
        point.x += point.vx * motionScale;
        point.y += point.vy * motionScale;

        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      }

      const connectionDistance = Math.min(210, Math.max(150, Math.min(width, height) * 0.25));
      const edges = new Map();

      for (let i = 0; i < pointsRef.current.length; i += 1) {
        const point = pointsRef.current[i];
        const neighbors = pointsRef.current
          .map((other, index) => ({
            index,
            distance: index === i ? Number.POSITIVE_INFINITY : Math.hypot(point.x - other.x, point.y - other.y),
          }))
          .filter(({ distance }) => distance <= connectionDistance)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 4);

        neighbors.forEach(({ index, distance }) => {
          const edgeKey = i < index ? `${i}-${index}` : `${index}-${i}`;
          if (!edges.has(edgeKey)) {
            edges.set(edgeKey, { from: point, to: pointsRef.current[index], distance });
          }
        });
      }

      edges.forEach(({ from, to, distance }) => {
        const strength = 1 - distance / connectionDistance;
        const fromDistance = Math.hypot(pointerRef.current.x - from.x, pointerRef.current.y - from.y);
        const toDistance = Math.hypot(pointerRef.current.x - to.x, pointerRef.current.y - to.y);
        const cursorStrength = pointerRef.current.active
          ? Math.max(0, 1 - Math.min(fromDistance, toDistance) / 190)
          : 0;
        context.beginPath();
        const lineColor = theme === 'dark' ? '126, 220, 255' : '38, 111, 184';
        context.strokeStyle = `rgba(${lineColor}, ${0.1 + strength * 0.3 + cursorStrength * 0.7})`;
        context.lineWidth = 0.8 + cursorStrength * 1.5;
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
      });

      for (let i = 0; i < pointsRef.current.length; i += 1) {
        const point = pointsRef.current[i];
        const dx = pointerRef.current.x - point.x;
        const dy = pointerRef.current.y - point.y;
        const distance = Math.hypot(dx, dy);
        const glow = pointerRef.current.active && distance < 210 ? 1 - distance / 210 : 0;

        if (glow > 0) {
          context.beginPath();
            context.strokeStyle = `rgba(${theme === 'dark' ? '181, 235, 255' : '29, 126, 211'}, ${0.25 + glow * 0.75})`;
          context.lineWidth = 1.5 + glow;
          context.moveTo(point.x, point.y);
          context.lineTo(pointerRef.current.x, pointerRef.current.y);
          context.stroke();
        }

        context.beginPath();
        context.shadowBlur = 12;
        context.shadowColor = theme === 'dark'
          ? (point.hue === 'cyan' ? '#38DDF5' : '#A477FF')
          : (point.hue === 'cyan' ? '#1689CC' : '#7048FF');
        const alpha = pointerRef.current.active && distance < 210 ? 1 : 0.7;
        const pointColor = theme === 'dark'
          ? (point.hue === 'cyan' ? '56, 221, 245' : '164, 119, 255')
          : (point.hue === 'cyan' ? '22, 137, 204' : '112, 72, 255');
        context.fillStyle = `rgba(${pointColor}, ${alpha})`;
        context.arc(point.x, point.y, point.radius + (glow > 0 ? 1.1 : 0.2), 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      if (pointerRef.current.active) {
        const spotlight = context.createRadialGradient(
          pointerRef.current.x,
          pointerRef.current.y,
          0,
          pointerRef.current.x,
          pointerRef.current.y,
          260,
        );
        const spotlightColor = theme === 'dark' ? '2, 6, 14' : '232, 240, 251';
        spotlight.addColorStop(0, `rgba(${spotlightColor}, 0)`);
        spotlight.addColorStop(0.5, `rgba(${spotlightColor}, 0.2)`);
        spotlight.addColorStop(1, `rgba(${spotlightColor}, 0.72)`);
        context.fillStyle = spotlight;
        context.fillRect(0, 0, width, height);
      }
    };

    setCanvasSize();

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    hero.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId = 0;
    const tick = () => {
      draw();
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      hero.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [reducedMotion, theme]);

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}

function SectionNavigation({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="section-nav" aria-label="Main navigation">
      <div className="section-nav__inner">
        <ul className="section-nav__list">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => onNavigate(id)}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('jp-portfolio-theme');
    if (stored) return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
  const [showModal, setShowModal] = useState(false);
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const prefersReducedMotion = useReducedMotionPreference();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('jp-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return undefined;

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('is-visible');
          revealObserver.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    revealObserver.observe(aboutSection);
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sectionTargets = sectionOrder.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sectionTargets.length) return undefined;

    const updateActiveSection = () => {
      const trackingLine = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sectionTargets[0].id;

      sectionTargets.forEach((target) => {
        if (target.offsetTop <= trackingLine) {
          currentSection = target.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: '' }));
    setSubmitState({ status: 'idle', message: '' });
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please use a valid email format.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.';

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    if (!accessKey) {
      setSubmitState({
        status: 'error',
        message: 'This form is not connected yet. Add VITE_WEB3FORMS_ACCESS_KEY in your environment to enable delivery.',
      });
      return;
    }

    setSubmitState({ status: 'sending', message: 'Sending your message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Portfolio contact form',
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed.');
      }

      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      setSubmitState({ status: 'success', message: 'Message sent successfully.' });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error.message || 'Something went wrong while sending your message. Please try again.',
      });
    }
  };

  return (
    <div className="page-shell">
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      </button>

      <header id="home" className="hero">
        <ParticleNetworkBackground reducedMotion={prefersReducedMotion} theme={theme} />
        <div className="hero__content">
          <p className="eyebrow hero-enter hero-enter--eyebrow">Developer Portfolio</p>
          <h1 className="hero-enter hero-enter--title">
            Hi! I am <span>John Patrick Villanueva</span>
            <br />
            or JP for short
          </h1>
          <a className="primary-button hero-enter hero-enter--button" href="#about">
            About Me
          </a>
        </div>
      </header>

      <SectionNavigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <section id="about" className="section about-section">
          <div className="section-heading about-reveal about-reveal--heading">
            <p className="section-kicker">About</p>
            <h2>Profile & Skills</h2>
          </div>

          <div className="about-grid">
            <div className="profile-column about-reveal about-reveal--profile">
              <div className="photo-placeholder">
                <img
                  className={`profile-photo profile-photo--${theme}`}
                  src={theme === 'dark' ? profileBlack : profileWhite}
                  alt="John Patrick Villanueva"
                />
              </div>
              <p className="bio">
                {portfolioConfig.bio}
              </p>
            </div>

            <div className="skills-panel about-reveal about-reveal--skills">
              <div className="skills-panel__header">
                <div>
                  <p className="skills-panel__eyebrow">Core toolkit</p>
                  <h3>Technologies I use</h3>
                </div>
                <span className="skills-panel__count">11 skills</span>
              </div>
              <div className="skills-grid" aria-label="Skills list">
                {skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <skill.icon className="skill-icon" style={{ color: skill.color }} aria-hidden="true" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Selected Work</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-row ${index % 2 === 1 ? 'project-row--reverse' : ''}`} key={project.id}>
                <div className="project-visual-wrap">
                  <ProjectVisual project={project} />
                </div>
                <div className="project-copy">
                  <p className="project-context">{project.context}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => (
                      <span key={technology} className="project-tag">
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      className="secondary-button"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Learn more about ${project.name}`}
                    >
                      LEARN MORE
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading centered">
            <p className="section-kicker">Contact</p>
            <h2>Get in touch</h2>
          </div>

          <div className="contact-card">
            <p className="contact-intro">
              Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                />
                {formErrors.name && (
                  <span id="name-error" className="error-text">
                    {formErrors.name}
                  </span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                />
                {formErrors.email && (
                  <span id="email-error" className="error-text">
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                />
                {formErrors.message && (
                  <span id="message-error" className="error-text">
                    {formErrors.message}
                  </span>
                )}
              </div>

              {!accessKey && (
                <p className="service-status service-status--warning" aria-live="polite">
                  Contact delivery is not configured yet. Set <strong>VITE_WEB3FORMS_ACCESS_KEY</strong> to enable live form submissions.
                </p>
              )}

              {submitState.message && (
                <p
                  className={`service-status ${submitState.status === 'error' ? 'service-status--error' : ''}`}
                  aria-live="polite"
                >
                  {submitState.message}
                </p>
              )}

              <button className="submit-button" type="submit" disabled={submitState.status === 'sending'}>
                {submitState.status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer__socials">
          <a
            href={portfolioConfig.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="JP on GitHub"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.7.1-3.4 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 3.1.1 3.4.8.8 1.3 2 1.3 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.2.8 2.4v3.6c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            href={portfolioConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="JP on LinkedIn"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.2 3.6A2.2 2.2 0 1 1 .8 3.6a2.2 2.2 0 0 1 4.4 0ZM1.1 8h4.2v12.9H1.1V8Zm6.8 0h4v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7v6.6h-4.2v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9H7.9V8Z" />
            </svg>
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioConfig.email)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Email JP with Gmail"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5v-11Zm1.6 1.2 7.1 5.2 7.1-5.2H5.1Zm14.4 10.3V8.4l-6.8 5-6.8-5v9.6c0 .3.2.5.5.5h12.6c.3 0 .5-.2.5-.5Z" />
            </svg>
          </a>
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} John Patrick Villanueva</p>
        <a href="#home" className="back-to-top">
          Back to Top
        </a>
      </footer>

      {showModal && (
        <div className="modal-overlay" role="presentation" onClick={() => setShowModal(false)}>
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="success-modal-title">Message sent successfully.</h3>
            <p>Thanks for reaching out!</p>
            <button type="button" className="primary-button" onClick={() => setShowModal(false)}>
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function useReducedMotionPreference() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return reducedMotion;
}

export default App;
