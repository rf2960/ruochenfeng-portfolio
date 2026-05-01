const focusItems = [
  {
    index: "01",
    title: "Industry",
    description:
      "Incoming Data Scientist Intern at Google Maps, building driver-based forecasting for Trips with end-to-end ML, evaluation, interpretability, and product-facing analytics.",
  },
  {
    index: "02",
    title: "Research",
    description:
      "At the Reya Lab, I work on histopathology image analysis with multi-class tissue modeling, StarDist-based cell segmentation, and interactive tools for patch-level exploration.",
  },
  {
    index: "03",
    title: "Foundation",
    description:
      "Previous work across VeriSilicon and OCBC, together with mathematics and statistics training at the University of Toronto, shaped my approach to forecasting, data systems, and applied ML.",
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
      "Scale-aware StarDist pipeline and interactive TMA viewer for reviewing nuclei, spatial core structure, dense patches, and segmentation behavior across H&E tissue microarrays.",
    tags: ["StarDist", "OpenSlide", "HTML viewer"],
    href: "https://github.com/rf2960/stardist-nuclear-segmentation",
    secondaryHref: `${import.meta.env.BASE_URL}stardist-tma-viewer.html`,
    action: "View repo",
    secondaryAction: "Open viewer",
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
      "Multi-stage LLM travel planner with destination discovery, existing-plan refinement, product screenshots, demo video, and architecture artifacts for a recruiter-friendly project walkthrough.",
    tags: ["LLM agents", "Product design", "Architecture"],
    href: "https://github.com/rf2960/travelmind-planner",
    action: "View repo",
  },
  {
    meta: "Visualization",
    title: "Market Investment Visualization",
    description:
      "A concise EDA and visualization project presenting market and investment patterns through a published Quarto report.",
    tags: ["EDA", "Quarto", "Visualization"],
    href: "https://github.com/rf2960/market-investment-visualization",
    secondaryHref: "https://rf2960.github.io/market-investment-visualization/",
    action: "View repo",
    secondaryAction: "Open report",
  },
  {
    meta: "Lab Tool - In Revision",
    title: "Organoid Counter",
    description:
      "SegFormer-based organoid counting tool copied from mentor lab work and currently waiting for your own revision around code ownership, manuscript positioning, and documentation.",
    tags: ["SegFormer", "Bioimage", "In progress"],
    href: "https://github.com/rf2960/organoid-counter",
    action: "View repo",
  },
];

const toolkitItems = [
  "Python",
  "SQL",
  "PyTorch",
  "scikit-learn",
  "TensorFlow",
  "Spark",
  "Kafka",
  "AWS/GCP",
  "Tableau",
  "StarDist",
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

export default function App() {
  const photoUrl = `${import.meta.env.BASE_URL}ruochen-photo.jpg`;
  const resumeUrl = `${import.meta.env.BASE_URL}Feng_Resume.pdf`;

  return (
    <div className="site-shell">
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
                  machine learning systems for forecasting, biomedical image
                  analysis, evidence-grounded AI, and decision-focused analytics.
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
                <div className="signal-panel" aria-hidden="true">
                  <span>forecasting</span>
                  <span>pathology ML</span>
                  <span>RAG systems</span>
                  <span>visual analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section about-section" id="about">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">About</p>
              <h2>Research-minded, data-driven, and concise by design.</h2>
            </div>
            <div className="two-column">
              <p>
                I am currently pursuing an M.S. in Data Science at Columbia
                University after completing an H.B.Sc. in Mathematics and
                Statistics with a Computer Science minor at the University of
                Toronto.
              </p>
              <p>
                My work sits between research and practice: deep learning,
                modeling, forecasting, analytics, and the systems needed to turn
                raw data into usable insight.
              </p>
            </div>
            <div className="toolkit-row" aria-label="Technical toolkit">
              {toolkitItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Work</p>
              <h2>Industry first, with research grounded in concrete work.</h2>
            </div>
            <div className="focus-grid">
              {focusItems.map((item) => (
                <article className="focus-item" key={item.title}>
                  <p className="focus-index">{item.index}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Projects</p>
              <h2>Portfolio projects with evidence to inspect.</h2>
            </div>
            <div className="project-grid">
              {projectItems.map((item) => (
                <article
                  className={`project-card${item.featured ? " featured" : ""}`}
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

        <section className="section publication-section" id="publications">
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

        <section className="section contact-section" id="contact">
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
