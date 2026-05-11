import { useEffect, useState } from "react";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const links = {
  resume: asset("Feng_Resume.pdf"),
  github: "https://github.com/rf2960",
  linkedin: "https://www.linkedin.com/in/ruochenfeng/",
  email: "mailto:rf2960@columbia.edu",
};

const chapters = [
  { id: "identity", label: "Identity" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "worlds", label: "Worlds" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    slug: "malaria-vaccination-modelling",
    title: "Malaria Vaccination Roll-out Strategies",
    type: "Research",
    status: "Working paper",
    deck:
      "A mathematical modeling paper evaluating malaria vaccination roll-out strategies in Cameroon through age-structured transmission dynamics.",
    image: asset("case-assets/research/malaria-modelling.svg"),
    repo: null,
    artifact: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5250090",
    stats: [
      ["SSRN", "working paper"],
      ["25", "pages"],
      ["2025", "posted"],
    ],
    problem:
      "Vaccination roll-out decisions depend on timing, demographic structure, and transmission dynamics; a single aggregate estimate can hide the strategic tradeoffs.",
    built:
      "I contributed to a modeling study that evaluates malaria vaccination strategies for Cameroon, connecting mathematical assumptions to public-health interpretation.",
    decisions: [
      "Frame the work as a research paper rather than a software product.",
      "Show topic, authorship, and research context without overstating policy impact.",
    ],
    tradeoffs: [
      "The public artifact is a working paper, not a deployed health intervention.",
      "Modeling evidence depends on assumptions, calibration, and sensitivity analysis.",
    ],
    learned:
      "Good research writing makes assumptions and uncertainty easy to find.",
    gallery: [
      asset("research-impact-day-poster.jpg"),
      asset("research-impact-day-group.jpg"),
    ],
  },
  {
    slug: "pancreas-he-pathology",
    title: "Pancreas H&E Pathology AI",
    type: "Biomedical ML",
    deck:
      "A computer vision workflow for pancreatic H&E tiles, with validation, threshold tuning, and model-card notes.",
    image: asset("case-assets/pathology/pipeline_overview.png"),
    repo: "https://github.com/rf2960/pancreas-he-pathology",
    artifact: null,
    stats: [
      ["43,213", "annotated tiles"],
      ["39,944", "held-out predictions"],
      ["0.573", "tuned tissue macro F1"],
    ],
    problem:
      "Histopathology data needs careful validation: tiles are slide-correlated, classes are imbalanced, and raw scans cannot be published casually.",
    built:
      "I built a public workflow around QuPath annotation export, coordinate-aware tile parsing, WideResNet training, leave-one-slide-out validation, threshold tuning, model-card notes, and figure generation.",
    decisions: [
      "Make validation design explicit.",
      "Show enough artifacts to make the work inspectable without exposing private data.",
      "Frame threshold tuning as research evidence, not clinical deployment.",
    ],
    tradeoffs: [
      "The model is research-grade and not clinically deployable.",
      "Rare classes still make macro F1 more meaningful than accuracy alone.",
    ],
    learned:
      "The strongest parts of the project were leakage control, documentation, and clear limits.",
    gallery: [
      asset("case-assets/pathology/threshold_tuning_summary.png"),
      asset("case-assets/pathology/qupath_to_ml_workflow.png"),
    ],
  },
  {
    slug: "stardist-nuclear-segmentation",
    title: "StarDist Nuclear Segmentation",
    type: "Research tooling",
    deck:
      "A scale-aware tissue microarray segmentation workflow with a viewer for reviewing nuclei, tiles, and spatial context.",
    image: asset("case-assets/pathology/stardist-7-cores-overview-cover.png"),
    repo: "https://github.com/rf2960/stardist-nuclear-segmentation",
    artifact: asset("stardist-tma-viewer.html"),
    stats: [
      ["82K+", "nuclear masks"],
      ["7", "TMA cores"],
      ["HTML", "review artifact"],
    ],
    problem:
      "Segmentation output is hard to trust if reviewers only see aggregate counts.",
    built:
      "I assembled OpenSlide ingestion, StarDist inference, stain-gated filtering, overlap cleanup, and a shareable HTML viewer.",
    decisions: [
      "Treat visual QA as part of the pipeline.",
      "Keep the viewer self-contained so it can be opened without a local Python setup.",
    ],
    tradeoffs: [
      "The viewer is a curated public artifact, not the complete private slide collection.",
      "Segmentation still depends on stain quality, thresholds, and core detection.",
    ],
    learned:
      "For biomedical tools, review interfaces help people judge whether outputs are plausible.",
    gallery: [
      asset("case-assets/pathology/stardist-core1-overview-detections.png"),
      asset("case-assets/pathology/stardist-selected-patch-core1-r3-c2.png"),
    ],
  },
  {
    slug: "finance-news-analyzer",
    title: "Finance News Analyzer",
    type: "RAG + Agent Workflow",
    deck:
      "A Streamlit system that turns ticker-level financial news into cited short-horizon signal packets.",
    image: asset("case-assets/finance/finsight-rag-cover.svg"),
    repo: "https://github.com/rf2960/finance-news-analyzer",
    artifact: asset("finance-news-demo.html"),
    report: asset("case-assets/finance/finsight-final-report.pdf"),
    tags: ["RAG", "Agent Workflow", "LLM", "Financial News", "Retrieval"],
    stats: [
      ["3", "agent stages"],
      ["TF-IDF", "retrieval"],
      ["5d / 20d", "evaluation"],
    ],
    problem:
      "Financial news is noisy and fast-moving. A headline can look important without being novel, well-sourced, or relevant to forward returns.",
    built:
      "I built FinSight RAG, a local Streamlit dashboard that ingests ticker-relevant news, retrieves evidence chunks, adds technical and macro context, and produces structured signal packets with citations, confidence, risks, counter-evidence, and an agent trace.",
    decisions: [
      "Use TF-IDF retrieval with a keyword fallback so the demo can run without heavy infrastructure.",
      "Route evidence through Analyst, Strategist, and Decision stages instead of one undifferentiated prompt.",
      "Support both heuristic local mode and an optional OpenAI/LangGraph path when an API key is provided.",
      "Evaluate generated signals against 5-day and 20-day forward returns in the bundled demo sample.",
    ],
    tradeoffs: [
      "The Streamlit UI is local; there is no hosted demo link yet.",
      "The current retrieval layer is TF-IDF, not a dense vector index.",
      "The evaluation sample is useful for a class project, not evidence of a production trading strategy.",
    ],
    learned:
      "RAG is most useful here when it makes sources, counter-evidence, and evaluation visible, not when it simply summarizes headlines.",
    demo:
      "The demo is a local Streamlit dashboard. The linked static demo page uses saved project data to show Live Analysis, Evidence Audit, Evaluation Lab, and the system architecture.",
    future: [
      "Deploy the Streamlit demo or add a short walkthrough video.",
      "Replace TF-IDF retrieval with FAISS or Chroma for dense retrieval experiments.",
      "Improve citation grounding and source verification.",
      "Add sentiment, risk-event, and ticker-level monitoring views.",
      "Evaluate retrieval quality on a larger live-data sample.",
    ],
    gallery: [
      asset("case-assets/finance/finsight-live-analysis-demo.svg"),
      asset("case-assets/finance/finsight-evidence-audit-demo.svg"),
      asset("case-assets/finance/finsight-evaluation-demo.svg"),
      asset("case-assets/finance/finsight-system-architecture-web.png"),
    ],
  },
  {
    slug: "travelmind",
    title: "TravelMind Planner",
    type: "Agentic AI concept",
    deck:
      "A multi-agent travel-planning concept shown through product screens, architecture artifacts, and a hosted demo walkthrough.",
    image: asset("case-assets/travelmind/travelmind-homepage.png"),
    repo: "https://github.com/rf2960/travelmind-planner",
    artifact: asset("travelmind-demo.html"),
    stats: [
      ["2", "user flows"],
      ["5", "planned agent roles"],
      ["1440p", "demo walkthrough"],
    ],
    problem:
      "Travel planning is preference-heavy and iterative; a single prompt tends to flatten discovery, planning, and revision into one vague response.",
    built:
      "I documented a product concept with destination discovery, plan enhancement, architecture diagrams, screenshots, and a high-quality hosted demo page.",
    decisions: [
      "Separate discovery from existing-plan enhancement.",
      "Use agent roles to keep the workflow understandable.",
      "Be explicit that the public artifact is a demo, not a live production app.",
    ],
    tradeoffs: [
      "The public repo does not include a runnable backend/frontend release.",
      "Its value is product reasoning and system decomposition, not production metrics.",
    ],
    learned:
      "A useful AI product needs clear modes, fallback behavior, and visible assumptions.",
    gallery: [
      asset("case-assets/travelmind/discover_result.png"),
      asset("case-assets/travelmind/plan_result.png"),
    ],
  },
  {
    slug: "venture-outcomes",
    title: "Venture Outcomes Under Censoring",
    type: "Data storytelling",
    deck:
      "An interactive startup-outcomes analysis that treats company status as censored evidence rather than a simple success label.",
    image: asset("case-assets/investments/venture-artifact-cohort-section.png"),
    repo: "https://github.com/rf2960/market-investment-visualization",
    artifact: "https://rf2960.github.io/market-investment-visualization/",
    stats: [
      ["HTML", "published report"],
      ["SVG", "static exports"],
      ["0", "causal claims"],
    ],
    problem:
      "Startup data invites misleading rankings because many companies are still operating simply because they have not had enough time to exit or fail.",
    built:
      "I built a report that foregrounds founding cohort, funding depth, market fingerprints, and careful interpretation under survivorship bias.",
    decisions: [
      "Use mature cohorts for more interpretable comparisons.",
      "Keep the language descriptive rather than causal.",
      "Design the report as a guided reading path, not a chart dump.",
    ],
    tradeoffs: [
      "The dataset is static and incomplete.",
      "Funding is aggregated, not a time-series treatment model.",
    ],
    learned:
      "Good analysis often starts by removing the easy but misleading conclusion.",
    gallery: [
      asset("case-assets/investments/venture-artifact-overview-section.png"),
      asset("case-assets/investments/venture-artifact-markets-section.png"),
    ],
  },
];

const publications = [
  {
    title: "Leveraging Mathematical Modelling to Evaluate Malaria Vaccination Roll-out Strategies in Cameroon",
    venue: "SSRN working paper, posted May 13, 2025",
    tag: "Working paper",
    authors: "Ruochen Feng, Qing Han, Sarafa A. Iyaniwura, Jude D. Kong",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5250090",
    description:
      "A mathematical modeling study evaluating malaria vaccination roll-out strategies in Cameroon, connecting transmission dynamics with public-health decision questions.",
  },
  {
    title: "A Novel Kalman Filter Algorithm Using Stance Detection for an Inertial Navigation System",
    venue: "Lecture Notes in Electrical Engineering, Springer Singapore, CSPS 2020, pp. 1968-1976",
    tag: "Conference chapter",
    authors: "Zhijian Shi, Ruochen Feng, Rui Lin, Gareth Peter Lewis",
    link: "https://link.springer.com/chapter/10.1007/978-981-15-8411-4_260",
    description:
      "A Springer conference chapter on stance-detection-assisted Kalman filtering for inertial navigation estimation.",
  },
];

const researchMoments = [
  {
    image: asset("research-activity-poster.jpg"),
    caption: "IHMPE Research & Impact Day 2025",
    note:
      "Poster presentation on mathematical modeling for malaria vaccination roll-out strategies in Cameroon.",
  },
  {
    image: asset("research-activity-group.jpg"),
    caption: "Research & impact community",
    note:
      "A small moment from the same research setting, included as context rather than personal branding.",
  },
];

const ongoingWork = {
  title: "AI Organoid Counter",
  tag: "Ongoing",
  image: asset("case-assets/research/organoid-counter.svg"),
  link: "https://github.com/ReyaLab/AI_Organoid_Counter",
  description:
    "An in-progress Python tool that uses a fine-tuned SegFormer segmentation model to count organoids in brightfield microscopy images.",
  details: [
    "Batch-oriented analysis for folders of microscopy images.",
    "GUI workflow built around model selection, tiling, masks, and spreadsheet outputs.",
    "The public repo is active and still in progress.",
  ],
};

const aboutNotes = [
  {
    title: "Background",
    body:
      "I am a data science and machine learning student at Columbia.",
  },
  {
    title: "What I work on",
    body:
      "Biomedical computer vision, GenAI product concepts, forecasting, and tools for reviewing model output.",
  },
  {
    title: "Current focus",
    body:
      "Incoming Google Maps intern on Navigation Trips forecasting; continuing pathology-image tooling on the side.",
  },
];

const principles = [
  {
    title: "Show uncertainty.",
    body:
      "For a classifier, planner, or report, I want assumptions and edge cases to be visible.",
  },
  {
    title: "Make work inspectable.",
    body:
      "A viewer, demo, or report should help someone check the work without extra explanation.",
  },
  {
    title: "Do not overstate it.",
    body:
      "I prefer a smaller project with clear limits to a larger-sounding one with vague claims.",
  },
];

const worlds = [
  {
    id: "research",
    label: "Research",
    title: "Biomedical ML and mathematical modeling.",
    body:
      "I care about validation, documentation, and being clear about what a result can and cannot say.",
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "Pipelines, forecasting, and decision surfaces.",
    body:
      "Earlier internships pushed me toward practical systems: SQL joins, dashboards, reporting reliability, and models that need explanation.",
  },
  {
    id: "creative",
    label: "Creative",
    title: "Music, UI taste, and small experiments.",
    body:
      "Music and interface design influence how I think about structure, pacing, and editing.",
  },
  {
    id: "lab",
    label: "Lab",
    title: "Questions that are allowed to be unfinished.",
    body:
      "Some prototypes are closer to sketches than products. A few belong here.",
  },
];

const guideAnswers = [
  {
    keywords: ["", "empty"],
    title: "Try a topic.",
    body:
      "Ask about a project, research, internships, creative work, or recruiting strengths.",
  },
  {
    keywords: ["strong", "strongest", "first", "read", "best"],
    title: "Start with pathology ML.",
    body:
      "It has the strongest technical evidence: data export, validation discipline, metrics, figures, and careful limitations.",
  },
  {
    keywords: ["paper", "publication", "ssrn", "malaria", "cameroon", "vaccine", "vaccination"],
    title: "The malaria paper is the main research item.",
    body:
      "It shows authorship, mathematical modeling, and public-health framing. I keep it separate from software projects.",
  },
  {
    keywords: ["springer", "kalman", "inertial", "navigation", "stance"],
    title: "The Springer chapter adds publication history.",
    body:
      "It is a conference chapter in Lecture Notes in Electrical Engineering. It is older, but still useful context.",
  },
  {
    keywords: ["organoid", "organic", "counter", "segformer", "ongoing"],
    title: "Organoid Counter is ongoing research tooling.",
    body:
      "It is active work around microscopy counting, a GUI workflow, and batch analysis.",
  },
  {
    keywords: ["stardist", "segmentation", "nuclei", "nuclear", "viewer"],
    title: "StarDist is about review workflow.",
    body:
      "The useful part is not just the count. It is the viewer that makes detections easier to inspect.",
  },
  {
    keywords: ["travel", "travelmind", "agent", "llm", "genai", "ai"],
    title: "TravelMind is a product concept.",
    body:
      "Its value is the breakdown of an AI workflow into modes, agent roles, and user-facing outputs.",
  },
  {
    keywords: ["creative", "music", "design", "ui"],
    title: "Creative work is a secondary thread.",
    body:
      "It shows taste, pacing, interface calmness, and editing. I keep it light on the site.",
  },
  {
    keywords: ["google", "forecast", "maps", "intern"],
    title: "Google Maps is incoming work.",
    body:
      "It is incoming forecasting work for Navigation Trips, so I mention it without claiming impact yet.",
  },
  {
    keywords: ["venture", "startup", "visualization", "censoring", "data"],
    title: "Venture outcomes is about careful comparison.",
    body:
      "It uses cohort maturity and survivorship bias to avoid overreading startup outcome data.",
  },
  {
    keywords: ["finance", "news", "rag", "agent", "finsight", "ticker", "market"],
    title: "Finance News Analyzer is the most AI-focused project.",
    body:
      "It combines retrieval, a three-stage agent workflow, Streamlit UI, source audit, and forward-return evaluation. It is framed as research tooling, not financial advice.",
  },
  {
    keywords: ["contact", "email", "resume", "linkedin", "github"],
    title: "Use the ending links.",
    body:
      "The contact section has email, resume, GitHub, and LinkedIn in one place. For a recruiter, resume plus pathology ML is the cleanest path.",
  },
];

function getGuideAnswer(question) {
  const text = question.trim().toLowerCase();
  if (!text) return guideAnswers[0];
  return (
    guideAnswers
      .slice(1)
      .find((item) => item.keywords.some((keyword) => text.includes(keyword))) || {
      title: "Best starting points",
      body:
        "The strongest pieces are pathology ML for technical depth, Finance News Analyzer for RAG/agents, StarDist for review tooling, and TravelMind for product reasoning.",
    }
  );
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function useNarrativeMotion() {
  const [chapter, setChapter] = useState("identity");

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const progress = clamp(window.scrollY / max, 0, 1);
      const intro = clamp(window.scrollY / Math.max(1, window.innerHeight * 0.82), 0, 1);
      root.style.setProperty("--story-progress", progress.toFixed(4));
      root.style.setProperty("--intro-progress", intro.toFixed(4));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setChapter(visible.target.id);
      },
      { threshold: [0.28, 0.45, 0.62] },
    );

    chapters.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return chapter;
}

function scrollToChapter(id, behavior = "smooth") {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

function App() {
  const [focusedProject, setFocusedProject] = useState(null);
  const [guideAnswer, setGuideAnswer] = useState(null);
  const chapter = useNarrativeMotion();

  useEffect(() => {
    document.title = "Ruochen Feng - ML systems, research, and creative tools";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Portfolio of Ruochen Feng: ML projects, research tooling, publications, and selected product experiments.",
    );
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const slug = path.startsWith("/projects/")
      ? window.location.pathname.replace("/projects/", "")
      : "";
    const project = projects.find((item) => item.slug === slug);
    if (project) {
      setFocusedProject(project);
      window.history.replaceState({}, "", "/");
      setTimeout(() => scrollToChapter("work", "auto"), 120);
      return;
    }

    const chapterByPath = {
      "/about": "about",
      "/projects": "work",
      "/research": "research",
      "/publications": "research",
      "/experience": "worlds",
      "/creative": "worlds",
      "/lab": "worlds",
      "/contact": "contact",
    };
    const hashChapter = window.location.hash.replace("#", "");
    const target = chapters.some((item) => item.id === hashChapter)
      ? hashChapter
      : chapterByPath[path];
    if (target) setTimeout(() => scrollToChapter(target, "auto"), 160);
  }, []);

  function openProject(project) {
    const run = () => setFocusedProject(project);
    if (document.startViewTransition) {
      document.startViewTransition(run);
    } else {
      run();
    }
  }

  function closeProject() {
    const run = () => setFocusedProject(null);
    if (document.startViewTransition) {
      document.startViewTransition(run);
    } else {
      run();
    }
  }

  useEffect(() => {
    if (!focusedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [focusedProject]);

  return (
    <div className="narrative-shell" data-chapter={chapter} data-focus={focusedProject ? "open" : "closed"}>
      <div className="story-field" aria-hidden="true" />
      <CompactIdentity chapter={chapter} />
      <ChapterNav chapter={chapter} />

      <main>
        <Landing />
        <About />
        <SelectedWork onOpenProject={openProject} focusedSlug={focusedProject?.slug} />
        <Research />
        <Worlds
          guideAnswer={guideAnswer}
          onAsk={(question) => {
            setGuideAnswer(getGuideAnswer(question));
          }}
        />
        <Ending />
      </main>

      {focusedProject && <ProjectFocus project={focusedProject} onClose={closeProject} />}
    </div>
  );
}

function CompactIdentity({ chapter }) {
  return (
    <button
      className="compact-identity"
      type="button"
      onClick={() => scrollToChapter("identity")}
      aria-label="Return to opening"
      data-visible={chapter === "identity" ? "false" : "true"}
    >
      <LogoMark />
      <span>Ruochen Feng</span>
    </button>
  );
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      RF
    </span>
  );
}

function ChapterNav({ chapter }) {
  return (
    <nav className="chapter-nav" aria-label="Narrative sections">
      {chapters.map((item) => (
        <button
          key={item.id}
          type="button"
          className={chapter === item.id ? "active" : ""}
          onClick={() => scrollToChapter(item.id)}
        >
          {item.label}
        </button>
      ))}
      <a href={links.resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </nav>
  );
}

function Landing() {
  return (
    <section className="stage landing-stage" id="identity" aria-label="Identity">
      <div className="hero-name-wrap">
        <LogoMark />
        <p className="stage-kicker">Data science / ML / research tools</p>
        <h1 className="hero-name">
          <span>Ruochen</span>
          <span>Feng</span>
        </h1>
        <p className="identity-line">
          I build ML tools, data products, and interfaces for reviewing model output.
        </p>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="stage about-stage" id="about" aria-label="About Ruochen Feng">
      <div className="chapter-label">01 / About</div>
      <div className="about-intro">
        <h2>I work across ML, research tooling, and product interfaces.</h2>
        <p>
          I care about the parts after a model runs: validation, review,
          documentation, and whether the output can be questioned.
        </p>
      </div>
      <div className="about-body">
        <div className="about-notes">
          {aboutNotes.map((item) => (
            <article className="about-note" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="principle-track">
          {principles.map((item, index) => (
            <article className="principle" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork({ onOpenProject, focusedSlug }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  function moveProject(direction) {
    setActiveIndex((index) => (index + direction + projects.length) % projects.length);
  }

  return (
    <section className="stage work-stage" id="work" aria-label="Selected work">
      <div className="chapter-label">02 / Selected work</div>
      <div className="work-heading">
        <h2>Selected work</h2>
        <p>
          A small set of projects across research, ML tooling, product demos, and data
          visualization.
        </p>
      </div>
      <div className="work-controls" aria-label="Project carousel controls">
        <button type="button" onClick={() => moveProject(-1)} aria-label="Previous project">
          Previous
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => moveProject(1)} aria-label="Next project">
          Next
        </button>
      </div>
      <div className="work-carousel" aria-live="polite">
        <div className="work-rail" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
          {projects.map((project, index) => (
            <article className="work-slide" key={project.slug} aria-hidden={activeIndex !== index}>
              <button
                className="work-card"
                type="button"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => onOpenProject(project)}
                style={{
                  viewTransitionName: focusedSlug === project.slug ? "none" : `project-${project.slug}`,
                }}
              >
                <span className="work-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="work-copy">
                  <span>{project.type}</span>
                  <strong>{project.title}</strong>
                  <em>{project.deck}</em>
                  {project.tags && (
                    <span className="work-tags">
                      {project.tags.slice(0, 3).map((tag) => (
                        <i key={tag}>{tag}</i>
                      ))}
                    </span>
                  )}
                </span>
                <span className="work-image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
      <div className="work-dots" aria-label="Choose a project">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${project.title}`}
          />
        ))}
      </div>
      <p className="work-current">{activeProject.title}</p>
    </section>
  );
}

function ProjectFocus({ project, onClose }) {
  return (
    <div className="focus-layer" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <button className="focus-backdrop" type="button" onClick={onClose} aria-label="Close project" />
      <article className="focus-panel" style={{ viewTransitionName: `project-${project.slug}` }}>
        <header className="focus-header">
          <button className="close-button" type="button" onClick={onClose}>
            Back to flow
          </button>
          <p>{project.type}</p>
        </header>
        <div className="focus-hero">
          <div>
            <h2 id="project-title">{project.title}</h2>
            <p>{project.deck}</p>
            {project.tags && (
              <div className="focus-tags" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
            <div className="focus-actions">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.artifact && (
                <a href={project.artifact} target="_blank" rel="noreferrer">
                  Open artifact
                </a>
              )}
              {project.report && (
                <a href={project.report} target="_blank" rel="noreferrer">
                  Report
                </a>
              )}
            </div>
          </div>
          <a
            className="focus-media"
            href={project.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size ${project.title} preview`}
          >
            <img src={project.image} alt={`${project.title} preview`} />
          </a>
        </div>

        <div className="focus-stats">
          {project.stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="focus-grid">
          <FocusBlock title="Problem" body={project.problem} />
          <FocusBlock title="What I built" body={project.built} />
          <FocusList title="Key decisions" items={project.decisions} />
          <FocusList title="Tradeoffs" items={project.tradeoffs} />
          <FocusBlock title="What I learned" body={project.learned} wide />
          {project.demo && <FocusBlock title="Demo" body={project.demo} wide />}
          {project.future && <FocusList title="Limitations / future work" items={project.future} wide />}
        </div>

        <div className="focus-gallery">
          {project.gallery.map((src, index) => (
            <a
              className="focus-gallery-item"
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full-size ${project.title} visual ${index + 1}`}
            >
              <img src={src} alt={`${project.title} visual ${index + 1}`} loading="lazy" />
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}

function FocusBlock({ title, body, wide = false }) {
  return (
    <section className={wide ? "focus-block wide" : "focus-block"}>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  );
}

function FocusList({ title, items, wide = false }) {
  return (
    <section className={wide ? "focus-block wide" : "focus-block"}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Research() {
  return (
    <section className="stage research-stage" id="research" aria-label="Research and publications">
      <div className="chapter-label">03 / Research</div>
      <div className="research-layout">
        <div className="research-intro">
          <h2>Research and publications</h2>
          <p>
            Papers, research activity, and ongoing tools. I keep these separate from
            product demos.
          </p>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <article className="publication" key={paper.title}>
              <span>{paper.tag}</span>
              <h3>{paper.title}</h3>
              <p className="publication-authors">{paper.authors}</p>
              <p>{paper.description}</p>
              <div className="publication-meta">
                <small>{paper.venue}</small>
                <a href={paper.link} target="_blank" rel="noreferrer">
                  Open paper
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="research-moment">
        <div>
          <span>Activity highlight</span>
          <h3>IHMPE Research & Impact Day 2025</h3>
          <p>
            A poster presentation connected to the malaria vaccination modeling work.
          </p>
        </div>
        <div className="moment-gallery">
          {researchMoments.map((moment) => (
            <figure key={moment.image}>
              <img src={moment.image} alt={moment.caption} loading="lazy" />
              <figcaption>
                <strong>{moment.caption}</strong>
                <span>{moment.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <article className="ongoing-card">
        <div>
          <span>{ongoingWork.tag}</span>
          <h3>{ongoingWork.title}</h3>
          <p>{ongoingWork.description}</p>
          <ul>
            {ongoingWork.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={ongoingWork.link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <span className="ongoing-media">
          <img src={ongoingWork.image} alt="" loading="lazy" />
        </span>
      </article>
    </section>
  );
}

function Worlds({ guideAnswer, onAsk }) {
  const [question, setQuestion] = useState("");

  function ask(value) {
    const finalQuestion = value ?? question;
    setQuestion(finalQuestion);
    onAsk(finalQuestion);
  }

  return (
    <section className="stage worlds-stage" id="worlds" aria-label="Sub-worlds">
      <div className="chapter-label">04 / Expansion</div>
      <div className="worlds-layout">
        <div className="worlds-copy">
          <h2>Other directions</h2>
          <p>
            A few areas outside the main project carousel: research, engineering
            practice, creative work, and experiments.
          </p>
        </div>
        <div className="world-grid">
          {worlds.map((world) => (
            <article key={world.id} className={`world-card ${world.id}`}>
              <span>{world.label}</span>
              <h3>{world.title}</h3>
              <p>{world.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="ask-strip">
        <div>
          <span>Site guide</span>
          <h3>Quick lookup</h3>
        </div>
        <div className="ask-console">
          <div className="ask-input">
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") ask();
              }}
              placeholder="Ask about projects, research, design, resume..."
              aria-label="Ask the portfolio"
            />
            <button type="button" onClick={() => ask()}>
              Ask
            </button>
          </div>
          {guideAnswer ? (
            <article aria-live="polite">
              <h4>{guideAnswer.title}</h4>
              <p>{guideAnswer.body}</p>
            </article>
          ) : (
            <article aria-live="polite">
              <h4>Ask a topic.</h4>
              <p>
                This is a local index. It points common questions to the relevant
                section.
              </p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

function Ending() {
  return (
    <section className="stage ending-stage" id="contact" aria-label="Contact">
      <div className="ending-card">
        <p className="chapter-label">05 / Contact</p>
        <h2>Contact</h2>
        <p>
          I am open to data science, ML research, product-oriented AI, and small
          collaborations.
        </p>
        <div className="ending-links">
          <a href={links.email}>Email</a>
          <a href={links.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
