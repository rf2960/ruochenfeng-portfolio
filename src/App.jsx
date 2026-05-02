import { useEffect } from "react";

const focusItems = [
  {
    index: "01",
    title: "Industry",
    description:
      "Incoming Data Scientist Intern at Google Maps Navigation Trips, building driver-based forecasting with feature engineering, baseline evaluation, dashboards, and Gemini-powered forecast summaries.",
  },
  {
    index: "02",
    title: "Research",
    description:
      "At Columbia's Reya Lab, I build histopathology ML workflows across 43K+ annotated H&E tiles, slide-held-out validation, threshold tuning, and StarDist nuclear segmentation over 80K+ masks.",
  },
  {
    index: "03",
    title: "Foundation",
    description:
      "Earlier internships at VeriSilicon and OCBC Bank sharpened the production side: Spark/Kafka reporting, SQL pipelines over millions of records, risk dashboards, and volatility forecasting.",
  },
];

const projectItems = [
  {
    meta: "Flagship ML",
    title: "Pancreas H&E Pathology AI",
    description:
      "End-to-end computer vision workflow for pancreatic H&E tile classification, including QuPath annotation export, slide-held-out validation, threshold tuning, and public model documentation.",
    tags: ["PyTorch", "QuPath", "Medical CV"],
    href: "https://github.com/rf2960/pancreas-he-pathology",
    action: "View repo",
    featured: true,
  },
  {
    meta: "Research Tool",
    title: "StarDist Nuclear Segmentation",
    description:
      "Scale-normalized H&E TMA nuclear segmentation pipeline using OpenSlide, TensorFlow/StarDist 2D_versatile_he, stain-gated filtering, overlap deduplication, and interactive core/tile review.",
    tags: ["TensorFlow", "StarDist", "OpenSlide", "WSI analysis"],
    href: "https://github.com/rf2960/stardist-nuclear-segmentation",
    secondaryHref: `${import.meta.env.BASE_URL}stardist-tma-viewer.html`,
    action: "View repo",
    secondaryAction: "Open viewer hub",
    featured: true,
  },
  {
    meta: "Finance RAG",
    title: "FinSight RAG",
    description:
      "Evidence-grounded financial news analysis demo with a Streamlit research interface, signal schema, citation audit trail, and evaluation plan for short-horizon market signals.",
    tags: ["RAG", "Streamlit", "Evaluation"],
    href: "https://github.com/rf2960/finance-news-analyzer",
    action: "View repo",
  },
  {
    meta: "Agentic AI",
    title: "TravelMind Planner",
    description:
      "Multi-agent LLM travel-planning concept with destination discovery, existing-plan refinement, product screenshots, demo video, and architecture artifacts for a recruiter-friendly walkthrough.",
    tags: ["LLM agents", "Product design", "Architecture"],
    href: "https://github.com/rf2960/travelmind-planner",
    secondaryHref: `${import.meta.env.BASE_URL}travelmind-demo.html`,
    action: "View repo",
    secondaryAction: "Watch demo",
  },
  {
    meta: "Visualization",
    title: "Market Investment Visualization",
    description:
      "Interactive Crunchbase venture outcomes analysis with executive-level storytelling, cohort-aware interpretation, market fingerprints, and funding-depth exploration.",
    tags: ["Data storytelling", "Interactive report", "Venture data"],
    href: "https://github.com/rf2960/market-investment-visualization",
    secondaryHref: "https://rf2960.github.io/market-investment-visualization/",
    action: "View repo",
    secondaryAction: "Open report",
  },
  {
    meta: "Lab Tool - In Revision",
    title: "Organoid Counter",
    description:
      "SegFormer-based organoid counting work in revision, positioned as a bioimage analysis project with clearer documentation, ownership boundaries, and manuscript-oriented framing underway.",
    tags: ["SegFormer", "Bioimage", "In progress"],
    href: "https://github.com/rf2960/organoid-counter",
    action: "View repo",
  },
];

const toolkitItems = [
  {
    name: "Python",
    role: "Core programming",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    role: "Data querying",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "PyTorch",
    role: "Deep learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "TensorFlow",
    role: "ML systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "scikit-learn",
    role: "Classical ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    name: "Spark",
    role: "Distributed data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  },
  {
    name: "Docker",
    role: "Deployment",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    role: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Google Cloud",
    role: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Git",
    role: "Version control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const publications = [
  {
    title:
      "Leveraging Mathematical Modelling to Evaluate Malaria Vaccination Roll-Out Strategies in Cameroon",
    meta: "SSRN Preprint",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5250090",
    description:
      "A preprint studying vaccination strategy evaluation with age-structured mathematical modelling.",
  },
  {
    title:
      "A Novel Kalman Filter Algorithm Using Stance Detection for an Inertial Navigation System",
    meta: "Springer Chapter",
    href: "https://link.springer.com/chapter/10.1007/978-981-15-8411-4_260",
    description:
      "A Springer chapter focused on inertial navigation and stance detection with a Kalman-filter-based approach.",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.82-1.94-1.92-1.94-1.09 0-1.92.86-1.92 1.94 0 1.06.81 1.92 1.89 1.92h.03c1.12 0 1.92-.86 1.92-1.92Zm12.62 8.06c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H8.7c.04.85 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.04 1.91 2.57V20H19.4v-6.99Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.26 5.68.42.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function SkillLogo({ item }) {
  return (
    <article className="skill-tile">
      <span className="skill-icon">
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="skill-fallback">{item.name.slice(0, 2)}</span>
      </span>
      <span>
        <strong>{item.name}</strong>
        <small>{item.role}</small>
      </span>
    </article>
  );
}

export default function App() {
  const photoUrl = `${import.meta.env.BASE_URL}ruochen-photo.jpg`;
  const resumeUrl = `${import.meta.env.BASE_URL}Feng_Resume.pdf`;

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <nav className="section-rail" aria-label="Section navigation">
        <a href="#top" aria-label="Intro" />
        <a href="#about" aria-label="About" />
        <a href="#focus" aria-label="Work" />
        <a href="#projects" aria-label="Projects" />
        <a href="#publications" aria-label="Publications" />
        <a href="#contact" aria-label="Contact" />
      </nav>
      <header className="hero" id="top">
        <div className="content-width">
          <nav className="topbar">
            <span className="brand">Ruochen Feng</span>
            <div className="nav-group">
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#focus">Work</a>
                <a href="#projects">Projects</a>
                <a href="#publications">Publications</a>
                <a href="#contact">Contact</a>
              </div>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/ruochenfeng/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow">Data science portfolio</p>
                <h1>Ruochen Feng</h1>
                <p className="intro">
                  M.S. Data Science student at Columbia University building
                  machine learning systems for forecasting, biomedical computer
                  vision, evidence-grounded AI, and decision-focused analytics.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#focus">
                    View work
                  </a>
                  <a
                    className="button button-secondary"
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <a className="button button-secondary" href="#publications">
                    Publications
                  </a>
                </div>
              </div>
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src={photoUrl}
                  alt="Portrait of Ruochen Feng"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section about-section reveal" id="about">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">About</p>
              <h2>Data scientist with a stronger industry-first read.</h2>
            </div>
            <div className="two-column">
              <p>
                I am currently pursuing an M.S. in Data Science at Columbia
                University after completing an H.B.Sc. in Mathematics and
                Statistics with High Distinction at the University of Toronto.
              </p>
              <p>
                My strongest throughline is applied ML under real constraints:
                forecasting for Maps, data pipelines for business decisions,
                and research tools that make model outputs inspectable.
              </p>
            </div>
            <div className="skills-grid" aria-label="Technical toolkit">
              {toolkitItems.map((item) => (
                <SkillLogo item={item} key={item.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="section focus-section reveal" id="focus">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Work</p>
              <h2>Forecasting, data systems, and applied ML with evidence.</h2>
            </div>
            <div className="focus-grid">
              {focusItems.map((item) => (
                <article className="focus-item reveal" key={item.title}>
                  <p className="focus-index">{item.index}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section reveal" id="projects">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Projects</p>
              <h2>Portfolio projects with evidence to inspect.</h2>
            </div>
            <div className="project-grid">
              {projectItems.map((item) => (
                <article
                  className={`project-card reveal${item.featured ? " featured" : ""}`}
                  key={item.title}
                >
                  <p className="project-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      className="button button-secondary"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.action}
                    </a>
                    {item.secondaryHref && (
                      <a
                        className="button button-quiet"
                        href={item.secondaryHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.secondaryAction}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section publication-section reveal" id="publications">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Publications</p>
              <h2>Selected publications.</h2>
            </div>
            <div className="publication-list">
              {publications.map((item) => (
                <article className="publication-item" key={item.title}>
                  <div>
                    <p className="publication-meta">{item.meta}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <a
                    className="publication-link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section reveal" id="contact">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Contact</p>
              <h2>Connect.</h2>
            </div>
            <p className="contact-copy">
              I use this site as a concise home for my background, research,
              publications, and selected projects.
            </p>
            <p className="contact-email-display">rf2960@columbia.edu</p>
            <div className="contact-actions">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/ruochenfeng/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                className="social-link"
                href="https://github.com/rf2960"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
